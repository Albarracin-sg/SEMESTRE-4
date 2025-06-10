import React from 'react';
import CalculatorForm from '../features/calculator/CalculatorForm';
import { Calculator as CalculatorIcon, Leaf, TrendingUp, Info } from 'lucide-react';

const Calculator = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-green-100 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full shadow-2xl">
              <CalculatorIcon className="w-12 h-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-green-600 bg-clip-text text-transparent mb-4">
            Calculadora de Huella de Carbono
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre tu impacto ambiental real y comienza tu camino hacia un estilo de vida más sostenible
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Formulario */}
          <div className="lg:col-span-2">
            <CalculatorForm />
          </div>

          {/* Panel informativo */}
          <div className="space-y-6">
            {/* Información */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-blue-100 rounded-full mr-3">
                  <Info className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">¿Sabías que...?</h3>
              </div>
              <div className="space-y-3 text-gray-600">
                <p className="text-sm">
                  • El hogar promedio emite 4.8 toneladas de CO₂ al año
                </p>
                <p className="text-sm">
                  • El transporte representa el 29% de las emisiones
                </p>
                <p className="text-sm">
                  • Pequeños cambios pueden reducir hasta un 20% tu huella
                </p>
              </div>
            </div>

            {/* Consejos */}
            <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-6 text-white shadow-xl">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-white/20 rounded-full mr-3">
                  <Leaf className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold">Consejos Rápidos</h3>
              </div>
              <ul className="space-y-2 text-sm text-emerald-100">
                <li>• Usa transporte público o bicicleta</li>
                <li>• Cambia a bombillas LED</li>
                <li>• Reduce el consumo de carne</li>
                <li>• Recicla y reutiliza materiales</li>
                <li>• Desconecta aparatos no utilizados</li>
              </ul>
            </div>

            {/* Estadísticas */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-green-100 rounded-full mr-3">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Impacto Global</h3>
              </div>
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-600">15%</div>
                  <div className="text-sm text-gray-600">Reducción promedio lograda</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-teal-600">2.1T</div>
                  <div className="text-sm text-gray-600">CO₂ evitado por usuario</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;