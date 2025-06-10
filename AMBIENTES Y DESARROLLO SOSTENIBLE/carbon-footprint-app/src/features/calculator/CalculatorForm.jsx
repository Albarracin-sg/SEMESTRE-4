import React, { useState } from 'react';
import { useCalculatorStore } from './calculatorSlice';
import {
  calculateTransportEmissions,
  calculateElectricityEmissions
} from './calculatorUtils';

const CalculatorForm = () => {
  const [kilometros, setKilometros] = useState('');
  const [electricidad, setElectricidad] = useState('');
  const [hasCalculated, setHasCalculated] = useState(false);
  const { results, calculate } = useCalculatorStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    const kmValue = Number(kilometros) || 0;
    const electricityValue = Number(electricidad) || 0;
    
    const transportEmissions = calculateTransportEmissions(kmValue);
    const electricityEmissions = calculateElectricityEmissions(electricityValue);
    
    calculate({
      transport: kmValue,
      electricity: electricityValue
    });
    
    setHasCalculated(true);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 p-6 text-white">
          <h1 className="text-2xl font-bold text-center">🌱 Calculadora de Huella de Carbono</h1>
          <p className="text-center mt-2 text-green-100">Descubre tu impacto ambiental anual</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          {/* Transport Input */}
          <div className="space-y-2">
            <label htmlFor="transporte" className="flex items-center text-lg font-semibold text-gray-700">
              🚗 Kilómetros recorridos en coche por semana
            </label>
            <div className="relative">
              <input
                type="number"
                id="transporte"
                placeholder="Ej: 150"
                className="w-full p-4 border-2 border-gray-200 rounded-xl text-lg focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300 outline-none"
                value={kilometros}
                onChange={(e) => setKilometros(e.target.value)}
                min="0"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 font-medium">
                km/semana
              </div>
            </div>
          </div>

          {/* Electricity Input */}
          <div className="space-y-2">
            <label htmlFor="electricidad" className="flex items-center text-lg font-semibold text-gray-700">
              ⚡ Consumo mensual de electricidad
            </label>
            <div className="relative">
              <input
                type="number"
                id="electricidad"
                placeholder="Ej: 300"
                className="w-full p-4 border-2 border-gray-200 rounded-xl text-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 outline-none"
                value={electricidad}
                onChange={(e) => setElectricidad(e.target.value)}
                min="0"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 font-medium">
                kWh/mes
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white p-4 rounded-xl text-lg font-semibold hover:from-green-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            🧮 Calcular mi Huella de Carbono
          </button>
        </form>

        {/* Results Section */}
        {hasCalculated && (
          <div className="mx-8 mb-8 p-6 bg-white rounded-xl shadow-inner border border-gray-100">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              📊 Tus Emisiones Anuales de CO₂
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {/* Transport Card */}
              <div className="bg-gradient-to-br from-green-100 to-green-50 p-4 rounded-lg border border-green-200">
                <div className="flex items-center mb-2">
                  <span className="text-2xl mr-2">🚗</span>
                  <span className="font-semibold text-green-800">Transporte</span>
                </div>
                <p className="text-2xl font-bold text-green-700">
                  {results.transport.toFixed(1)} kg
                </p>
                <p className="text-sm text-green-600">CO₂ anual</p>
              </div>

              {/* Electricity Card */}
              <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-4 rounded-lg border border-blue-200">
                <div className="flex items-center mb-2">
                  <span className="text-2xl mr-2">⚡</span>
                  <span className="font-semibold text-blue-800">Electricidad</span>
                </div>
                <p className="text-2xl font-bold text-blue-700">
                  {results.electricity.toFixed(1)} kg
                </p>
                <p className="text-sm text-blue-600">CO₂ anual</p>
              </div>

              {/* Total Card */}
              <div className="bg-gradient-to-br from-purple-100 to-purple-50 p-4 rounded-lg border border-purple-200">
                <div className="flex items-center mb-2">
                  <span className="text-2xl mr-2">🌍</span>
                  <span className="font-semibold text-purple-800">Total</span>
                </div>
                <p className="text-2xl font-bold text-purple-700">
                  {results.total.toFixed(1)} kg
                </p>
                <p className="text-sm text-purple-600">CO₂ anual</p>
              </div>
            </div>

            {/* Environmental Context */}
            <div className="mt-6 p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg border border-amber-200">
              <div className="flex items-start">
                <span className="text-2xl mr-3 mt-1">💡</span>
                <div>
                  <h3 className="font-semibold text-amber-800 mb-1">Contexto Ambiental</h3>
                  <p className="text-sm text-amber-700">
                    {results.total < 1000 
                      ? "¡Excelente! Tu huella de carbono está por debajo del promedio."
                      : results.total < 3000
                      ? "Tu huella de carbono está en el rango promedio. Considera opciones más sostenibles."
                      : "Tu huella de carbono es alta. Hay muchas oportunidades para reducir emisiones."
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CalculatorForm;