import React, { useState } from 'react';
import { Settings, Key, Bot, TestTube, CheckCircle, XCircle, Save } from 'lucide-react';
import { testOpenAIConnection } from '../utils/openaiConfig';
import openaiService from '../services/openaiService';

interface ConfigurationPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConfigurationPanel({ isOpen, onClose }: ConfigurationPanelProps) {
  const [apiKey, setApiKey] = useState('');
  const [assistantId, setAssistantId] = useState('');
  const [orgId, setOrgId] = useState('');
  const [isTestingConnection, setIsTestingConnection] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isSaving, setIsSaving] = useState(false);

  const handleTestConnection = async () => {
    if (!apiKey || !assistantId) {
      alert('Por favor, preencha a API Key e o Assistant ID');
      return;
    }

    setIsTestingConnection(true);
    setConnectionStatus('idle');

    try {
      // Temporariamente definir as configurações para teste
      const originalEnv = {
        apiKey: process.env.VITE_OPENAI_API_KEY,
        assistantId: process.env.VITE_OPENAI_ASSISTANT_ID,
        orgId: process.env.VITE_OPENAI_ORG_ID
      };

      // Definir temporariamente para teste
      (process.env as any).VITE_OPENAI_API_KEY = apiKey;
      (process.env as any).VITE_OPENAI_ASSISTANT_ID = assistantId;
      (process.env as any).VITE_OPENAI_ORG_ID = orgId;

      const isConnected = await testOpenAIConnection();
      setConnectionStatus(isConnected ? 'success' : 'error');

      // Restaurar configurações originais
      (process.env as any).VITE_OPENAI_API_KEY = originalEnv.apiKey;
      (process.env as any).VITE_OPENAI_ASSISTANT_ID = originalEnv.assistantId;
      (process.env as any).VITE_OPENAI_ORG_ID = originalEnv.orgId;

    } catch (error) {
      setConnectionStatus('error');
    } finally {
      setIsTestingConnection(false);
    }
  };

  const handleSave = async () => {
    setIsSaving(true);
    
    try {
      // Salvar no localStorage (em produção, isso seria enviado para o backend)
      localStorage.setItem('openai_config', JSON.stringify({
        apiKey,
        assistantId,
        orgId,
        savedAt: new Date().toISOString()
      }));

      // Atualizar variáveis de ambiente
      (process.env as any).VITE_OPENAI_API_KEY = apiKey;
      (process.env as any).VITE_OPENAI_ASSISTANT_ID = assistantId;
      (process.env as any).VITE_OPENAI_ORG_ID = orgId;

      // Reinicializar o serviço
      await openaiService.resetConversation();

      alert('Configurações salvas com sucesso!');
      onClose();
    } catch (error) {
      alert('Erro ao salvar configurações');
    } finally {
      setIsSaving(false);
    }
  };

  // Carregar configurações salvas
  React.useEffect(() => {
    const saved = localStorage.getItem('openai_config');
    if (saved) {
      try {
        const config = JSON.parse(saved);
        setApiKey(config.apiKey || '');
        setAssistantId(config.assistantId || '');
        setOrgId(config.orgId || '');
      } catch (error) {
        console.error('Erro ao carregar configurações:', error);
      }
    }
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-blue-600 text-white p-6 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Settings className="h-6 w-6" />
              <div>
                <h2 className="text-xl font-bold">Configuração da IA</h2>
                <p className="text-blue-100 text-sm">Configure sua integração com OpenAI</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-blue-100 hover:text-white p-2"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Instruções */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h3 className="font-semibold text-blue-900 mb-2">Como configurar:</h3>
            <ol className="text-sm text-blue-800 space-y-1">
              <li>1. Acesse <a href="https://platform.openai.com/api-keys" target="_blank" className="underline">platform.openai.com/api-keys</a></li>
              <li>2. Crie uma nova API Key</li>
              <li>3. Acesse <a href="https://platform.openai.com/assistants" target="_blank" className="underline">platform.openai.com/assistants</a></li>
              <li>4. Crie ou copie o ID de um Assistant existente</li>
              <li>5. Cole as informações abaixo e teste a conexão</li>
            </ol>
          </div>

          {/* Formulário */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Key className="h-4 w-4 inline mr-2" />
                OpenAI API Key
              </label>
              <input
                type="password"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="sk-..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Bot className="h-4 w-4 inline mr-2" />
                Assistant ID
              </label>
              <input
                type="text"
                value={assistantId}
                onChange={(e) => setAssistantId(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="asst_..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Organization ID (opcional)
              </label>
              <input
                type="text"
                value={orgId}
                onChange={(e) => setOrgId(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="org-..."
              />
            </div>
          </div>

          {/* Teste de Conexão */}
          <div className="border-t pt-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-900">Teste de Conexão</h3>
              <button
                onClick={handleTestConnection}
                disabled={isTestingConnection || !apiKey || !assistantId}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center"
              >
                <TestTube className="h-4 w-4 mr-2" />
                {isTestingConnection ? 'Testando...' : 'Testar Conexão'}
              </button>
            </div>

            {connectionStatus !== 'idle' && (
              <div className={`flex items-center space-x-2 p-3 rounded-lg ${
                connectionStatus === 'success' 
                  ? 'bg-green-50 text-green-800 border border-green-200' 
                  : 'bg-red-50 text-red-800 border border-red-200'
              }`}>
                {connectionStatus === 'success' ? (
                  <CheckCircle className="h-5 w-5" />
                ) : (
                  <XCircle className="h-5 w-5" />
                )}
                <span className="text-sm font-medium">
                  {connectionStatus === 'success' 
                    ? 'Conexão estabelecida com sucesso!' 
                    : 'Erro na conexão. Verifique suas credenciais.'}
                </span>
              </div>
            )}
          </div>

          {/* Botões */}
          <div className="flex justify-end space-x-3 pt-4 border-t">
            <button
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              Cancelar
            </button>
            <button
              onClick={handleSave}
              disabled={isSaving || !apiKey || !assistantId}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center"
            >
              <Save className="h-4 w-4 mr-2" />
              {isSaving ? 'Salvando...' : 'Salvar Configurações'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}