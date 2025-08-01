import React, { useState } from 'react';
import { Brain, Send, User, Bot, Sparkles, BookOpen, Target, Clock, Download, FileText } from 'lucide-react';
import SupportButton from './SupportButton';

interface Message {
  id: string;
  type: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface AIAssistantSectionProps {
  onPlanGenerated?: () => void;
}

export default function AIAssistantSection({ onPlanGenerated }: AIAssistantSectionProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'assistant',
      content: '👋 Olá! Sou sua assistente de IA da Teacher Poli. \n\n🎯 **Por que criar seu plano personalizado é importante?**\n\n✅ A Teacher Poli se adapta ao SEU nível e objetivos\n✅ Você terá uma experiência única, feita especialmente para você\n✅ Sem seu plano, a IA não consegue te ajudar da melhor forma\n\n💡 **Vamos começar?** Me conte sobre seus objetivos de aprendizado e seu nível atual de inglês.',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [generatedPlan, setGeneratedPlan] = useState<any>(null);

  const studyPlanTemplates = [
    {
      title: 'Inglês Básico',
      description: 'Plano para iniciantes em inglês',
      duration: '30 dias',
      icon: BookOpen
    },
    {
      title: 'Inglês Intermediário',
      description: 'Aperfeiçoe suas habilidades',
      duration: '30 dias',
      icon: Target
    },
    {
      title: 'Inglês Avançado',
      description: 'Fluência e proficiência',
      duration: '30 dias',
      icon: Sparkles
    }
  ];

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      // Importação dinâmica do serviço OpenAI
      const { default: openaiService } = await import('../services/openaiService');
      const aiResponse = await openaiService.sendMessage(inputMessage);
      
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'assistant',
        content: aiResponse,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, assistantMessage]);
      
      // Verificar se a resposta indica geração de plano
      if (aiResponse.toLowerCase().includes('plano') || aiResponse.toLowerCase().includes('plan')) {
        // Gerar plano real usando OpenAI
        try {
          const planData = await openaiService.generateStudyPlan({
            level: 'Intermediário', // Pode ser extraído da conversa
            objectives: ['Conversação fluente'],
            availableTime: '45 minutos',
            interests: ['Geral']
          });
          setGeneratedPlan(planData);
        } catch (error) {
          console.error('Erro ao gerar plano:', error);
          // Fallback para plano simulado
          const planData = {
            title: `Plano Personalizado - Intermediário`,
            level: 'Intermediário',
            objective: 'Conversação fluente',
            dailyTime: '45 minutos',
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
          setGeneratedPlan(planData);
        }
      }
        
      // Notify parent component that plan was generated
      if (onPlanGenerated) {
        onPlanGenerated();
        
        // Show success message
        setTimeout(() => {
          const message = `🎉 **PARABÉNS!** Seu plano foi gerado com sucesso!\n\n🔓 **ACESSO LIBERADO!** Agora você tem acesso completo a:\n\n✨ Teacher Poli (sua IA personalizada)\n🎁 Bônus Exclusivos\n👥 Comunidade WhatsApp\n⚙️ Todas as configurações\n\n🚀 **Próximo passo:** Clique na aba "Teacher Poli" para começar a conversar com sua assistente personalizada!`;
          alert(message);
        }, 500);
      }
      
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
      
      // Fallback para resposta simulada em caso de erro
      const fallbackResponses = [
        "Entendo sua pergunta! Como sua Teacher Poli, vou te ajudar com isso. Primeiro, vamos focar no seu nível atual de inglês.",
        "Excelente pergunta! Para criar o melhor plano para você, preciso entender melhor seus objetivos específicos.",
        "Perfeito! Vou criar um plano personalizado baseado no que você me contou. Que tipo de situações você mais quer praticar?"
      ];
      
      const fallbackResponse = fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)];
      
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'assistant',
        content: fallbackResponse + "\n\n⚠️ *Modo simulação ativo - Configure OpenAI nas configurações para IA real*",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, assistantMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleTemplateSelect = (template: any) => {
    const message = `Gostaria de usar o template "${template.title}" como base para meu plano de estudos.`;
    setInputMessage(message);
  };

  const downloadPlan = () => {
    // In a real implementation, this would generate and download a PDF
    const element = document.createElement('a');
    const file = new Blob(['Plano de Estudos Personalizado - Teacher Poli\n\nEste é um exemplo de plano de estudos...'], 
      { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'plano-estudos-30-dias.pdf';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
      <div className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Assistente de IA</h2>
        <p className="text-sm sm:text-base text-gray-600">Crie seu plano de estudos personalizado com inteligência artificial</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-8">
        {/* Templates */}
        <div className="lg:col-span-1 order-2 lg:order-1">
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4">Templates Rápidos</h3>
            <div className="space-y-3">
              {studyPlanTemplates.map((template, index) => {
                const Icon = template.icon;
                return (
                  <button
                    key={index}
                    onClick={() => handleTemplateSelect(template)}
                    className="w-full text-left p-2 sm:p-3 rounded-lg border border-gray-200 hover:border-purple-300 hover:bg-purple-50 transition-colors"
                  >
                    <div className="flex items-start space-x-2 sm:space-x-3">
                      <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="text-xs sm:text-sm font-medium text-gray-900">{template.title}</h4>
                        <p className="text-xs text-gray-500 mt-1 line-clamp-2">{template.description}</p>
                        <div className="flex items-center mt-2 text-xs text-gray-400">
                          <Clock className="h-3 w-3 mr-1" />
                          {template.duration}
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
          
          {/* Generated Plan Download */}
          {generatedPlan && (
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4">Plano Gerado</h3>
              <div className="bg-purple-50 rounded-lg p-4 mb-4">
                <h4 className="text-sm sm:text-base font-medium text-purple-900 mb-2">{generatedPlan.title}</h4>
                <div className="text-sm text-purple-700 space-y-1">
                  <p>Nível: {generatedPlan.level}</p>
                  <p>Objetivo: {generatedPlan.objective}</p>
                  <p>Tempo diário: {generatedPlan.dailyTime}</p>
                </div>
              </div>
              <button
                onClick={downloadPlan}
                className="w-full flex items-center justify-center px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm sm:text-base font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all"
              >
                <Download className="mr-2 h-4 w-4" />
                <span className="hidden sm:inline">Baixar Plano Completo</span>
                <span className="sm:hidden">Baixar</span>
              </button>
              <p className="text-xs text-gray-500 mt-2 text-center">Válido por 30 dias</p>
            </div>
          )}
          </div>
        </div>

        {/* Chat Interface */}
        <div className="lg:col-span-3 order-1 lg:order-2">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 h-[500px] sm:h-[600px] flex flex-col">
            {/* Chat Header */}
            <div className="p-4 border-b border-gray-200 flex items-center space-x-3">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                <Brain className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-semibold text-gray-900">Assistente IA</h3>
                <p className="text-xs sm:text-sm text-gray-500">Especialista em ensino de inglês</p>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'} px-2 sm:px-0`}
                >
                  <div className={`flex items-start space-x-2 max-w-[280px] sm:max-w-xs lg:max-w-md ${
                    message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                  }`}>
                    <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.type === 'user' 
                        ? 'bg-purple-600' 
                        : 'bg-purple-100'
                    }`}>
                      {message.type === 'user' ? (
                        <User className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                      ) : (
                        <Bot className="h-3 w-3 sm:h-4 sm:w-4 text-purple-600" />
                      )}
                    </div>
                    <div className={`rounded-lg px-3 sm:px-4 py-2 ${
                      message.type === 'user'
                        ? 'bg-purple-600 text-white'
                        : 'bg-gray-100 text-gray-900'
                    }`}>
                      <p className="text-xs sm:text-sm">{message.content}</p>
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex items-start space-x-2">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-purple-100 rounded-full flex items-center justify-center">
                      <Bot className="h-3 w-3 sm:h-4 sm:w-4 text-purple-600" />
                    </div>
                    <div className="bg-gray-100 rounded-lg px-4 py-2">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex space-x-2 items-end">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Digite sua mensagem..."
                  className="flex-1 border border-gray-300 rounded-lg px-3 sm:px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputMessage.trim() || isLoading}
                  className="bg-purple-600 text-white px-3 sm:px-4 py-2 rounded-lg hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex-shrink-0"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Support Section */}
      <div className="mt-8 bg-blue-50 rounded-lg p-6 text-center">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Dúvidas sobre seu plano?</h3>
        <p className="text-gray-600 mb-4">Fale conosco para otimizar seus estudos</p>
        <SupportButton position="inline" variant="primary" />
      </div>

      {/* Fixed Support Button */}
      <SupportButton />
    </div>
  );
}
