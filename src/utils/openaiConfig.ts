// 🔧 CONFIGURAÇÃO DA OPENAI API
// Configure suas credenciais da OpenAI aqui

export interface OpenAIConfig {
  apiKey: string;
  assistantId: string;
  organizationId?: string;
}

// 🔧 SUBSTITUA ESTAS CONFIGURAÇÕES PELAS SUAS CREDENCIAIS
const OPENAI_CONFIG: OpenAIConfig = {
  // Sua chave de API da OpenAI (sk-...)
  apiKey: process.env.VITE_OPENAI_API_KEY || 'sua-chave-api-aqui',
  
  // ID do seu Assistant GPT (asst_...)
  assistantId: process.env.VITE_OPENAI_ASSISTANT_ID || 'seu-assistant-id-aqui',
  
  // ID da organização (opcional)
  organizationId: process.env.VITE_OPENAI_ORG_ID || undefined
};

export default OPENAI_CONFIG;

// Validação das configurações
export function validateOpenAIConfig(): boolean {
  if (!OPENAI_CONFIG.apiKey || OPENAI_CONFIG.apiKey === 'sua-chave-api-aqui') {
    console.error('❌ OpenAI API Key não configurada');
    return false;
  }
  
  if (!OPENAI_CONFIG.assistantId || OPENAI_CONFIG.assistantId === 'seu-assistant-id-aqui') {
    console.error('❌ OpenAI Assistant ID não configurado');
    return false;
  }
  
  return true;
}

// Função para testar a conexão
export async function testOpenAIConnection(): Promise<boolean> {
  try {
    const OpenAI = (await import('openai')).default;
    const openai = new OpenAI({
      apiKey: OPENAI_CONFIG.apiKey,
      organization: OPENAI_CONFIG.organizationId,
      dangerouslyAllowBrowser: true // Necessário para uso no browser
    });

    // Testa listando assistants
    await openai.beta.assistants.retrieve(OPENAI_CONFIG.assistantId);
    console.log('✅ Conexão com OpenAI estabelecida com sucesso');
    return true;
  } catch (error) {
    console.error('❌ Erro ao conectar com OpenAI:', error);
    return false;
  }
}