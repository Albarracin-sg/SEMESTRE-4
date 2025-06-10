import { useState } from 'react';
import { emissionFactors } from '../data/emissionsData';

export const useCarbonCalculator = () => {
  const [inputs, setInputs] = useState({});
  const [results, setResults] = useState(null);

  const calculate = (formData) => {
    const transportTotal = (formData.kmCoche || 0) * emissionFactors.transport.car_gasoline_per_km * 52;
    const energyTotal = (formData.kwhElec || 0) * emissionFactors.energy.electricity_kwh_spain * 12;
    setResults({
      transport: transportTotal,
      energy: energyTotal,
      total: transportTotal + energyTotal,
    });
  };

  return { results, calculate };
};