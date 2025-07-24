import OpenAI from 'openai';
import OPENAI_CONFIG, { validateOpenAIConfig } from '../utils/openaiConfig';

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export interface StudyPlan {
  title: string;
  level: string;
  objective: string;
  dailyTime: string;
  duration: string;
  topics: string[];
  schedule: {
    week: number;
    focus: string;
    activities: string[];
  }[];
  generatedAt: Date;
}

class OpenAIService {
  private openai: OpenAI | null = null;
  private threadId: string | null = null;
  private isInitialized = false;

  constructor() {
    this.initialize();
  }

  private async initialize() {
    if (!validateOpenAIConfig()) {
      console.warn('⚠️ OpenAI não configurado - usando modo simulação');
      return;
    }

    try {
      this.openai = new OpenAI({
        apiKey: OPENAI_CONFIG.apiKey,
        organization: OPENAI_CONFIG.organizationId,
        dangerouslyAllowBrowser: true
      });

      // Criar uma nova thread para a conversa
      const thread = await this.openai.beta.threads.create();
      this.threadId = thread.id;
      this.isInitialized = true;
      
      console.log('✅ OpenAI Service inicializado com sucesso');
    } catch (error) {
      console.error('❌ Erro ao inicializar OpenAI Service:', error);
    }
  }

  async sendMessage(message: string): Promise<string> {
    // Modo simulação se não estiver configurado
    if (!this.isInitialized || !this.openai || !this.threadId) {
      return this.simulateResponse(message);
    }

    try {
      // Adicionar mensagem do usuário à thread
      await this.openai.beta.threads.messages.create(this.threadId, {
        role: 'user',
        content: message
      });

      // Executar o assistant
      const run = await this.openai.beta.threads.runs.create(this.threadId, {
        assistant_id: OPENAI_CONFIG.assistantId
      });

      // Aguardar conclusão
      let runStatus = await this.openai.beta.threads.runs.retrieve(this.threadId, run.id);
      
      while (runStatus.status === 'in_progress' || runStatus.status === 'queued') {
        await new Promise(resolve => setTimeout(resolve, 1000));
        runStatus = await this.openai.beta.threads.runs.retrieve(this.threadId, run.id);
      }

      if (runStatus.status === 'completed') {
        // Buscar mensagens da thread
        const messages = await this.openai.beta.threads.messages.list(this.threadId);
        const lastMessage = messages.data[0];
        
        if (lastMessage.role === 'assistant' && lastMessage.content[0].type === 'text') {
          return lastMessage.content[0].text.value;
        }
      }

      throw new Error(`Run failed with status: ${runStatus.status}`);
    } catch (error) {
      console.error('❌ Erro ao enviar mensagem:', error);
      return this.simulateResponse(message);
    }
  }

  async generateStudyPlan(userInfo: {
    level: string;
    objectives: string[];
    availableTime: string;
    interests: string[];
  }): Promise<StudyPlan> {
    const prompt = `
Crie um plano de estudos personalizado de inglês com base nas seguintes informações:

Nível atual: ${userInfo.level}
Objetivos: ${userInfo.objectives.join(', ')}
Tempo disponível: ${userInfo.availableTime}
Interesses: ${userInfo.interests.join(', ')}

Por favor, forneça um plano estruturado em formato JSON com:
- Título do plano
- Nível e objetivo principal
- Tempo diário recomendado
- Duração total do plano
- Lista de tópicos principais
- Cronograma semanal detalhado

Responda APENAS com o JSON, sem texto adicional.
    `;

    try {
      const response = await this.sendMessage(prompt);
      
      // Tentar extrair JSON da resposta
      const jsonMatch = response.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        const planData = JSON.parse(jsonMatch[0]);
        return {
          ...planData,
          generatedAt: new Date()
        };
      }
      
      throw new Error('Resposta não contém JSON válido');
    } catch (error) {
      console.error('❌ Erro ao gerar plano:', error);
      return this.generateFallbackPlan(userInfo);
    }
  }

  private simulateResponse(message: string): string {
    const responses = [
      "Entendo sua pergunta! Como sua Teacher Poli, vou te ajudar com isso. Primeiro, vamos focar no seu nível atual de inglês.",
      "Excelente pergunta! Para criar o melhor plano para você, preciso entender melhor seus objetivos específicos.",
      "Perfeito! Vou criar um plano personalizado baseado no que você me contou. Que tipo de situações você mais quer praticar?",
      "Ótimo! Com base nas suas informações, posso ver que você tem potencial para progredir rapidamente. Vamos estruturar um plano eficiente.",
      "Entendi perfeitamente! Vou adaptar nossa abordagem ao seu estilo de aprendizagem. Prefere focar mais na conversação ou na gramática?"
    ];
    
    return responses[Math.floor(Math.random() * responses.length)];
  }

  private generateFallbackPlan(userInfo: any): StudyPlan {
    return {
      title: `Plano Personalizado - ${userInfo.level}`,
      level: userInfo.level,
      objective: userInfo.objectives[0] || 'Melhorar inglês geral',
      dailyTime: userInfo.availableTime,
      duration: '30 dias',
      topics: [
        'Vocabulário essencial',
        'Gramática básica',
        'Conversação prática',
        'Compreensão auditiva',
        'Escrita funcional'
      ],
      schedule: [
        {
          week: 1,
          focus: 'Fundamentos',
          activities: ['Vocabulário básico', 'Presente simples', 'Conversação inicial']
        },
        {
          week: 2,
          focus: 'Desenvolvimento',
          activities: ['Tempos verbais', 'Listening practice', 'Diálogos práticos']
        },
        {
          week: 3,
          focus: 'Aplicação',
          activities: ['Situações reais', 'Escrita prática', 'Pronúncia']
        },
        {
          week: 4,
          focus: 'Consolidação',
          activities: ['Review geral', 'Conversação fluente', 'Avaliação']
        }
      ],
      generatedAt: new Date()
    };
  }

  // Resetar conversa
  async resetConversation() {
    if (this.openai && this.isInitialized) {
      try {
        const thread = await this.openai.beta.threads.create();
        this.threadId = thread.id;
        console.log('🔄 Conversa resetada');
      } catch (error) {
        console.error('❌ Erro ao resetar conversa:', error);
      }
    }
  }

  // Verificar se está configurado
  isConfigured(): boolean {
    return this.isInitialized && this.openai !== null;
  }
}

export const openaiService = new OpenAIService();
export default openaiService;