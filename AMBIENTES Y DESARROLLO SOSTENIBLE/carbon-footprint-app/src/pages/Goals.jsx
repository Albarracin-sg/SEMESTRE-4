import React from 'react';
import GoalList from '../features/goals/GoalList';
import AddGoalForm from '../features/goals/AddGoalForm';

const Goals = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Mis Metas de Reducción</h1>
      <div className="space-y-6">
        <AddGoalForm />
        <GoalList />
      </div>
    </div>
  );
};

export default Goals;