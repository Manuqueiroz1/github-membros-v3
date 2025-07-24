import React, { useState } from 'react';
import { Settings, Plus, Edit3, Save, X, Upload, Trash2, Eye, EyeOff } from 'lucide-react';
import { BonusResource, BonusLesson, QuizQuestion } from '../types';
import { bonusResources } from '../data/bonusData';

interface AdminPanelProps {
  isVisible: boolean;
  onToggle: () => void;
  userEmail: string;
}

export default function AdminPanel({ isVisible, onToggle, userEmail }: AdminPanelProps) {
  const [activeTab, setActiveTab] = useState<'bonuses' | 'lessons' | 'exercises'>('bonuses');
  const [editingItem, setEditingItem] = useState<any>(null);
  const [showAddForm, setShowAddForm] = useState(false);

  if (!isVisible) {
    return (
      <button
        onClick={onToggle}
        className="fixed bottom-6 left-6 z-50 bg-red-600 hover:bg-red-700 text-white p-3 rounded-full shadow-lg transition-all"
        title="Painel Admin"
      >
        <Settings className="h-5 w-5" />
      </button>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="bg-red-600 text-white p-6 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Settings className="h-6 w-6" />
            <div>
              <h2 className="text-xl font-bold">Painel de Administração</h2>
              <p className="text-red-100 text-sm">Logado como: {userEmail}</p>
            </div>
          </div>
          <button
            onClick={onToggle}
            className="p-2 text-red-100 hover:text-white transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            {[
              { id: 'bonuses', label: 'Gerenciar Bônus', icon: '🎁' },
              { id: 'lessons', label: 'Gerenciar Aulas', icon: '📚' },
              { id: 'exercises', label: 'Gerenciar Exercícios', icon: '🧠' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`py-4 px-2 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-red-500 text-red-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          {activeTab === 'bonuses' && <BonusManagement />}
          {activeTab === 'lessons' && <LessonManagement />}
          {activeTab === 'exercises' && <ExerciseManagement />}
        </div>
      </div>
    </div>
  );
}

// Componente para gerenciar bônus
function BonusManagement() {
  const [editingBonus, setEditingBonus] = useState<BonusResource | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);

  const handleEdit = (bonus: BonusResource) => {
    setEditingBonus({ ...bonus });
  };

  const handleSave = () => {
    if (editingBonus) {
      // Aqui você salvaria no backend/localStorage
      console.log('Salvando bônus:', editingBonus);
      setEditingBonus(null);
      alert('Bônus salvo com sucesso!');
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && editingBonus) {
      // Simular upload de imagem
      const imageUrl = URL.createObjectURL(file);
      setEditingBonus({ ...editingBonus, thumbnail: imageUrl });
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold">Gerenciar Bônus</h3>
        <button
          onClick={() => setShowAddForm(true)}
          className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors flex items-center"
        >
          <Plus className="h-4 w-4 mr-2" />
          Adicionar Bônus
        </button>
      </div>

      {editingBonus ? (
        <div className="bg-gray-50 rounded-lg p-6">
          <h4 className="text-lg font-semibold mb-4">Editando: {editingBonus.title}</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Título</label>
              <input
                type="text"
                value={editingBonus.title}
                onChange={(e) => setEditingBonus({ ...editingBonus, title: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Tipo</label>
              <select
                value={editingBonus.type}
                onChange={(e) => setEditingBonus({ ...editingBonus, type: e.target.value as any })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              >
                <option value="course">Curso</option>
                <option value="ebook">E-book</option>
                <option value="guide">Guia</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">Descrição</label>
              <textarea
                value={editingBonus.description}
                onChange={(e) => setEditingBonus({ ...editingBonus, description: e.target.value })}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Duração Total</label>
              <input
                type="text"
                value={editingBonus.totalDuration}
                onChange={(e) => setEditingBonus({ ...editingBonus, totalDuration: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                placeholder="Ex: 4h 30min"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Avaliação</label>
              <input
                type="number"
                min="0"
                max="5"
                step="0.1"
                value={editingBonus.rating}
                onChange={(e) => setEditingBonus({ ...editingBonus, rating: parseFloat(e.target.value) })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">Imagem de Capa</label>
              <div className="flex items-center space-x-4">
                <img 
                  src={editingBonus.thumbnail} 
                  alt="Preview" 
                  className="w-20 h-20 object-cover rounded-lg"
                />
                <label className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg cursor-pointer transition-colors">
                  <Upload className="h-4 w-4 inline mr-2" />
                  Alterar Imagem
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </label>
              </div>
            </div>
          </div>

          <div className="flex justify-end space-x-3 mt-6">
            <button
              onClick={() => setEditingBonus(null)}
              className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              Cancelar
            </button>
            <button
              onClick={handleSave}
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors flex items-center"
            >
              <Save className="h-4 w-4 mr-2" />
              Salvar
            </button>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {bonusResources.map((bonus) => (
            <div key={bonus.id} className="bg-white border border-gray-200 rounded-lg p-4">
              <img 
                src={bonus.thumbnail} 
                alt={bonus.title}
                className="w-full h-32 object-cover rounded-lg mb-3"
              />
              <h4 className="font-semibold text-gray-900 mb-2">{bonus.title}</h4>
              <p className="text-sm text-gray-600 mb-3 line-clamp-2">{bonus.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500">{bonus.totalLessons} aulas</span>
                <button
                  onClick={() => handleEdit(bonus)}
                  className="bg-red-600 text-white px-3 py-1 rounded text-xs hover:bg-red-700 transition-colors flex items-center"
                >
                  <Edit3 className="h-3 w-3 mr-1" />
                  Editar
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// Componente para gerenciar aulas
function LessonManagement() {
  const [selectedBonus, setSelectedBonus] = useState<string>('');
  const [editingLesson, setEditingLesson] = useState<BonusLesson | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);

  const selectedBonusData = bonusResources.find(b => b.id === selectedBonus);

  const handleEditLesson = (lesson: BonusLesson) => {
    setEditingLesson({ ...lesson });
  };

  const handleSaveLesson = () => {
    if (editingLesson) {
      console.log('Salvando aula:', editingLesson);
      setEditingLesson(null);
      alert('Aula salva com sucesso!');
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold">Gerenciar Aulas</h3>
        <div className="flex space-x-3">
          <select
            value={selectedBonus}
            onChange={(e) => setSelectedBonus(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
          >
            <option value="">Selecione um bônus</option>
            {bonusResources.map((bonus) => (
              <option key={bonus.id} value={bonus.id}>{bonus.title}</option>
            ))}
          </select>
          {selectedBonus && (
            <button
              onClick={() => setShowAddForm(true)}
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors flex items-center"
            >
              <Plus className="h-4 w-4 mr-2" />
              Adicionar Aula
            </button>
          )}
        </div>
      </div>

      {editingLesson ? (
        <div className="bg-gray-50 rounded-lg p-6">
          <h4 className="text-lg font-semibold mb-4">Editando: {editingLesson.title}</h4>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Título da Aula</label>
              <input
                type="text"
                value={editingLesson.title}
                onChange={(e) => setEditingLesson({ ...editingLesson, title: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Descrição</label>
              <textarea
                value={editingLesson.description}
                onChange={(e) => setEditingLesson({ ...editingLesson, description: e.target.value })}
                rows={2}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">URL do Vídeo</label>
                <input
                  type="url"
                  value={editingLesson.videoUrl}
                  onChange={(e) => setEditingLesson({ ...editingLesson, videoUrl: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="https://www.youtube.com/embed/..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Duração</label>
                <input
                  type="text"
                  value={editingLesson.duration}
                  onChange={(e) => setEditingLesson({ ...editingLesson, duration: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="Ex: 25:30"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Conteúdo da Aula</label>
              <textarea
                value={editingLesson.textContent}
                onChange={(e) => setEditingLesson({ ...editingLesson, textContent: e.target.value })}
                rows={10}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent font-mono text-sm"
                placeholder="Digite o conteúdo em markdown..."
              />
            </div>
          </div>

          <div className="flex justify-end space-x-3 mt-6">
            <button
              onClick={() => setEditingLesson(null)}
              className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              Cancelar
            </button>
            <button
              onClick={handleSaveLesson}
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors flex items-center"
            >
              <Save className="h-4 w-4 mr-2" />
              Salvar
            </button>
          </div>
        </div>
      ) : selectedBonusData ? (
        <div className="space-y-4">
          {selectedBonusData.lessons.map((lesson, index) => (
            <div key={lesson.id} className="bg-white border border-gray-200 rounded-lg p-4">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 mb-1">
                    {index + 1}. {lesson.title}
                  </h4>
                  <p className="text-sm text-gray-600 mb-2">{lesson.description}</p>
                  <div className="flex items-center space-x-4 text-xs text-gray-500">
                    <span>⏱️ {lesson.duration}</span>
                    <span>🧠 {lesson.exercises.length} exercícios</span>
                    <span className={lesson.completed ? 'text-green-600' : 'text-gray-400'}>
                      {lesson.completed ? '✅ Concluída' : '⏳ Pendente'}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => handleEditLesson(lesson)}
                  className="bg-red-600 text-white px-3 py-1 rounded text-xs hover:bg-red-700 transition-colors flex items-center"
                >
                  <Edit3 className="h-3 w-3 mr-1" />
                  Editar
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 text-gray-500">
          <p>Selecione um bônus para gerenciar suas aulas</p>
        </div>
      )}
    </div>
  );
}

// Componente para gerenciar exercícios
function ExerciseManagement() {
  const [selectedBonus, setSelectedBonus] = useState<string>('');
  const [selectedLesson, setSelectedLesson] = useState<string>('');
  const [editingExercise, setEditingExercise] = useState<QuizQuestion | null>(null);

  const selectedBonusData = bonusResources.find(b => b.id === selectedBonus);
  const selectedLessonData = selectedBonusData?.lessons.find(l => l.id === selectedLesson);

  const handleEditExercise = (exercise: QuizQuestion) => {
    setEditingExercise({ ...exercise });
  };

  const handleSaveExercise = () => {
    if (editingExercise) {
      console.log('Salvando exercício:', editingExercise);
      setEditingExercise(null);
      alert('Exercício salvo com sucesso!');
    }
  };

  const addNewOption = () => {
    if (editingExercise) {
      setEditingExercise({
        ...editingExercise,
        options: [...editingExercise.options, '']
      });
    }
  };

  const removeOption = (index: number) => {
    if (editingExercise && editingExercise.options.length > 2) {
      const newOptions = editingExercise.options.filter((_, i) => i !== index);
      setEditingExercise({
        ...editingExercise,
        options: newOptions,
        correctAnswer: editingExercise.correctAnswer >= index ? Math.max(0, editingExercise.correctAnswer - 1) : editingExercise.correctAnswer
      });
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold">Gerenciar Exercícios</h3>
        <div className="flex space-x-3">
          <select
            value={selectedBonus}
            onChange={(e) => {
              setSelectedBonus(e.target.value);
              setSelectedLesson('');
            }}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
          >
            <option value="">Selecione um bônus</option>
            {bonusResources.map((bonus) => (
              <option key={bonus.id} value={bonus.id}>{bonus.title}</option>
            ))}
          </select>
          
          {selectedBonusData && (
            <select
              value={selectedLesson}
              onChange={(e) => setSelectedLesson(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
            >
              <option value="">Selecione uma aula</option>
              {selectedBonusData.lessons.map((lesson, index) => (
                <option key={lesson.id} value={lesson.id}>
                  {index + 1}. {lesson.title}
                </option>
              ))}
            </select>
          )}
        </div>
      </div>

      {editingExercise ? (
        <div className="bg-gray-50 rounded-lg p-6">
          <h4 className="text-lg font-semibold mb-4">Editando Exercício</h4>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Pergunta</label>
              <textarea
                value={editingExercise.question}
                onChange={(e) => setEditingExercise({ ...editingExercise, question: e.target.value })}
                rows={2}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Opções de Resposta</label>
              {editingExercise.options.map((option, index) => (
                <div key={index} className="flex items-center space-x-2 mb-2">
                  <input
                    type="radio"
                    name="correctAnswer"
                    checked={editingExercise.correctAnswer === index}
                    onChange={() => setEditingExercise({ ...editingExercise, correctAnswer: index })}
                    className="text-red-600"
                  />
                  <input
                    type="text"
                    value={option}
                    onChange={(e) => {
                      const newOptions = [...editingExercise.options];
                      newOptions[index] = e.target.value;
                      setEditingExercise({ ...editingExercise, options: newOptions });
                    }}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder={`Opção ${index + 1}`}
                  />
                  {editingExercise.options.length > 2 && (
                    <button
                      onClick={() => removeOption(index)}
                      className="text-red-600 hover:text-red-800 p-1"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  )}
                </div>
              ))}
              <button
                onClick={addNewOption}
                className="text-red-600 hover:text-red-800 text-sm flex items-center"
              >
                <Plus className="h-4 w-4 mr-1" />
                Adicionar Opção
              </button>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Explicação</label>
              <textarea
                value={editingExercise.explanation || ''}
                onChange={(e) => setEditingExercise({ ...editingExercise, explanation: e.target.value })}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                placeholder="Explicação da resposta correta (opcional)"
              />
            </div>
          </div>

          <div className="flex justify-end space-x-3 mt-6">
            <button
              onClick={() => setEditingExercise(null)}
              className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              Cancelar
            </button>
            <button
              onClick={handleSaveExercise}
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors flex items-center"
            >
              <Save className="h-4 w-4 mr-2" />
              Salvar
            </button>
          </div>
        </div>
      ) : selectedLessonData ? (
        <div className="space-y-4">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
            <h4 className="font-semibold text-blue-900">
              Aula: {selectedLessonData.title}
            </h4>
            <p className="text-blue-700 text-sm">{selectedLessonData.exercises.length} exercícios</p>
          </div>
          
          {selectedLessonData.exercises.map((exercise, index) => (
            <div key={exercise.id} className="bg-white border border-gray-200 rounded-lg p-4">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Exercício {index + 1}
                  </h4>
                  <p className="text-sm text-gray-700 mb-2">{exercise.question}</p>
                  <div className="text-xs text-gray-500">
                    {exercise.options.length} opções • Resposta correta: {exercise.options[exercise.correctAnswer]}
                  </div>
                </div>
                <button
                  onClick={() => handleEditExercise(exercise)}
                  className="bg-red-600 text-white px-3 py-1 rounded text-xs hover:bg-red-700 transition-colors flex items-center"
                >
                  <Edit3 className="h-3 w-3 mr-1" />
                  Editar
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 text-gray-500">
          <p>Selecione um bônus e uma aula para gerenciar os exercícios</p>
        </div>
      )}
    </div>
  );
}