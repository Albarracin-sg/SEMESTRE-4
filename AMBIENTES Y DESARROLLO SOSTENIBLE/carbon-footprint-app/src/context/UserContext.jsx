// Simulación de una API de metas
const goals = [
  { id: 1, description: 'Reducir el uso del coche.', completed: false },
];

export const getGoals = async () => {
  return new Promise(resolve => setTimeout(() => resolve(goals), 500));
};

export const addGoal = async (description) => {
  const newGoal = { id: Date.now(), description, completed: false };
  goals.push(newGoal);
  return new Promise(resolve => setTimeout(() => resolve(newGoal), 500));
};