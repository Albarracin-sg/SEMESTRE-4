import React from 'react';

const GoalList = () => {
  // Datos de ejemplo
  const goals = [
    { id: 1, text: 'Reducir el uso del coche en 20 km por semana.' },
    { id: 2, text: 'Cambiar a bombillas LED en toda la casa.' },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">Lista de Metas</h3>
      <ul className="space-y-2">
        {goals.map(goal => (
          <li key={goal.id} className="p-2 bg-gray-100 rounded-md">{goal.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default GoalList;