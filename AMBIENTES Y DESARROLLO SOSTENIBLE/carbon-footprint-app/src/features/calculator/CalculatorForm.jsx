import React from 'react';

const CalculatorForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí irá la lógica para calcular la huella
    alert('Calculando...');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow-md">
      <div>
        <label htmlFor="transporte" className="block font-medium">Kilómetros recorridos en coche por semana:</label>
        <input type="number" id="transporte" className="w-full p-2 border rounded-md" />
      </div>
      <div>
        <label htmlFor="electricidad" className="block font-medium">Consumo mensual de electricidad (kWh):</label>
        <input type="number" id="electricidad" className="w-full p-2 border rounded-md" />
      </div>
      <button type="submit" className="w-full bg-green-600 text-white p-2 rounded-md hover:bg-green-700">
        Calcular
      </button>
    </form>
  );
};

export default CalculatorForm;