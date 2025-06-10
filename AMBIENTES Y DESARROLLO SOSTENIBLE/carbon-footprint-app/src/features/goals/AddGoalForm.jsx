import React from 'react';

const AddGoalForm = () => {
  return (
    <form className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">Añadir Nueva Meta</h3>
      <input
        type="text"
        placeholder="Ej: Usar la bicicleta para ir al trabajo"
        className="w-full p-2 border rounded-md mb-4"
      />
      <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700">
        Añadir Meta
      </button>
    </form>
  );
};

export default AddGoalForm;