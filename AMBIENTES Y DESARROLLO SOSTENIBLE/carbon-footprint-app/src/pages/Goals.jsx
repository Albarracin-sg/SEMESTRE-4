import React, { useState } from 'react';
import Card from '../components/Card';

const Goals = () => {
  const [goals, setGoals] = useState([
    { 
      id: 1, 
      title: 'Reducir emisiones de transporte', 
      description: 'Usar transporte público o bicicleta 3 días a la semana',
      category: 'Transporte',
      target: '20% reducción',
      progress: 65,
      deadline: '2024-12-31',
      status: 'En progreso',
      impact: '2.5 kg CO2/semana'
    },
    { 
      id: 2, 
      title: 'Eficiencia energética del hogar', 
      description: 'Cambiar todas las bombillas a LED y optimizar el uso de calefacción',
      category: 'Energía',
      target: '30% reducción',
      progress: 40,
      deadline: '2024-11-30',
      status: 'En progreso',
      impact: '15 kg CO2/mes'
    },
    { 
      id: 3, 
      title: 'Alimentación sostenible', 
      description: 'Reducir el consumo de carne a 2 veces por semana',
      category: 'Alimentación',
      target: '25% reducción',
      progress: 80,
      deadline: '2024-10-31',
      status: 'Casi completado',
      impact: '8 kg CO2/semana'
    }
  ]);

  const [newGoal, setNewGoal] = useState({
    title: '',
    description: '',
    category: 'Transporte',
    target: '',
    deadline: '',
    impact: ''
  });

  const [showAddForm, setShowAddForm] = useState(false);

  const categories = ['Transporte', 'Energía', 'Alimentación', 'Residuos', 'Agua', 'Otros'];

  const handleAddGoal = (e) => {
    e.preventDefault();
    if (newGoal.title && newGoal.description) {
      const goal = {
        id: Date.now(),
        ...newGoal,
        progress: 0,
        status: 'Pendiente'
      };
      setGoals([...goals, goal]);
      setNewGoal({
        title: '',
        description: '',
        category: 'Transporte',
        target: '',
        deadline: '',
        impact: ''
      });
      setShowAddForm(false);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completado': return 'bg-green-100 text-green-800';
      case 'Casi completado': return 'bg-yellow-100 text-yellow-800';
      case 'En progreso': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Transporte': return '🚗';
      case 'Energía': return '💡';
      case 'Alimentación': return '🍽️';
      case 'Residuos': return '♻️';
      case 'Agua': return '💧';
      default: return '🌱';
    }
  };

  const totalImpactReduction = goals.reduce((sum, goal) => {
    return sum + (parseFloat(goal.impact.replace(/[^\d.]/g, '')) || 0);
  }, 0);

  const averageProgress = goals.reduce((sum, goal) => sum + goal.progress, 0) / goals.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">🎯 Mis Metas de Sostenibilidad</h1>
          <p className="text-gray-600 text-lg">Establece y cumple tus objetivos para reducir tu huella de carbono</p>
        </div>

        {/* Stats Dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card title="📊 Progreso General">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">{Math.round(averageProgress)}%</div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div 
                  className="bg-blue-600 h-3 rounded-full transition-all duration-300"
                  style={{ width: `${averageProgress}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-600 mt-2">Promedio de todas las metas</p>
            </div>
          </Card>

          <Card title="🌍 Impacto Estimado">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">{totalImpactReduction.toFixed(1)}</div>
              <p className="text-sm text-gray-600">kg CO2 reducidos por semana</p>
              <div className="mt-2 text-xs text-green-700">
                ≈ {(totalImpactReduction * 52).toFixed(0)} kg CO2/año
              </div>
            </div>
          </Card>

          <Card title="📈 Metas Activas">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">{goals.length}</div>
              <p className="text-sm text-gray-600">Objetivos establecidos</p>
              <div className="mt-2 text-xs text-purple-700">
                {goals.filter(g => g.status === 'Completado').length} completadas
              </div>
            </div>
          </Card>
        </div>

        {/* Add Goal Button */}
        <div className="mb-8 text-center">
          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:from-green-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            {showAddForm ? '❌ Cancelar' : '➕ Añadir Nueva Meta'}
          </button>
        </div>

        {/* Add Goal Form */}
        {showAddForm && (
          <Card title="🎯 Crear Nueva Meta">
            <form onSubmit={handleAddGoal} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    📝 Título de la Meta
                  </label>
                  <input
                    type="text"
                    value={newGoal.title}
                    onChange={(e) => setNewGoal({...newGoal, title: e.target.value})}
                    placeholder="Ej: Reducir uso del coche"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    🏷️ Categoría
                  </label>
                  <select
                    value={newGoal.category}
                    onChange={(e) => setNewGoal({...newGoal, category: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {categories.map(cat => (
                      <option key={cat} value={cat}>{getCategoryIcon(cat)} {cat}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  📋 Descripción
                </label>
                <textarea
                  value={newGoal.description}
                  onChange={(e) => setNewGoal({...newGoal, description: e.target.value})}
                  placeholder="Describe tu meta en detalle..."
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent h-24 resize-none"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    🎯 Objetivo
                  </label>
                  <input
                    type="text"
                    value={newGoal.target}
                    onChange={(e) => setNewGoal({...newGoal, target: e.target.value})}
                    placeholder="Ej: 30% reducción"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    📅 Fecha Límite
                  </label>
                  <input
                    type="date"
                    value={newGoal.deadline}
                    onChange={(e) => setNewGoal({...newGoal, deadline: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    🌍 Impacto Estimado
                  </label>
                  <input
                    type="text"
                    value={newGoal.impact}
                    onChange={(e) => setNewGoal({...newGoal, impact: e.target.value})}
                    placeholder="Ej: 5 kg CO2/semana"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="flex gap-4 justify-end">
                <button
                  type="button"
                  onClick={() => setShowAddForm(false)}
                  className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Crear Meta
                </button>
              </div>
            </form>
          </Card>
        )}

        {/* Goals List */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">📋 Mis Metas Actuales</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {goals.map(goal => (
              <div key={goal.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{getCategoryIcon(goal.category)}</span>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800">{goal.title}</h3>
                        <span className="text-sm text-gray-500">{goal.category}</span>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(goal.status)}`}>
                      {goal.status}
                    </span>
                  </div>

                  <p className="text-gray-600 mb-4">{goal.description}</p>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700">Progreso</span>
                      <span className="text-sm font-bold text-blue-600">{goal.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${goal.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-gray-100">
                    <div>
                      <span className="text-xs text-gray-500">Objetivo</span>
                      <p className="text-sm font-medium text-gray-800">{goal.target}</p>
                    </div>
                    <div>
                      <span className="text-xs text-gray-500">Impacto</span>
                      <p className="text-sm font-medium text-green-600">{goal.impact}</p>
                    </div>
                  </div>

                  {goal.deadline && (
                    <div className="mt-3 pt-3 border-t border-gray-100">
                      <span className="text-xs text-gray-500">Fecha límite: </span>
                      <span className="text-sm font-medium text-gray-800">
                        {new Date(goal.deadline).toLocaleDateString('es-ES')}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tips Section */}
        <div className="mt-12">
          <Card title="💡 Consejos para Alcanzar tus Metas">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">🎯 Sé Específico</h4>
                <p className="text-sm text-blue-700">Define metas claras y medibles. En lugar de "usar menos el coche", di "usar el coche 2 días menos por semana".</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">📊 Mide tu Progreso</h4>
                <p className="text-sm text-green-700">Lleva un registro semanal de tus avances. Pequeños pasos consistentes llevan a grandes cambios.</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-800 mb-2">🏆 Celebra los Logros</h4>
                <p className="text-sm text-purple-700">Reconoce y celebra cada meta alcanzada. Te motivará a seguir adelante con tus objetivos.</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Goals;