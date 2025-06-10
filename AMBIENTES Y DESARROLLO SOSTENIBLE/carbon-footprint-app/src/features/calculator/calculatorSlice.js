import { create } from 'zustand';

export const useCalculatorStore = create((set) => ({
  results: {
    transport: 0,
    electricity: 0,
    total: 0,
  },
  calculate: (data) => {
    // Aquí usarías calculatorUtils.js
    const transportEmissions = data.transport * 0.18 * 52;
    const electricityEmissions = data.electricity * 0.233 * 12;
    set({
      results: {
        transport: transportEmissions,
        electricity: electricityEmissions,
        total: transportEmissions + electricityEmissions,
      },
    });
  },
}));