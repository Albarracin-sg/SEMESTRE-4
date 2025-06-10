  // Factores de emisión (ejemplos, usar datos precisos)
  const EMISSION_FACTORS = {
    COCHE_GASOLINA_KM: 0.18, // kgCO2e/km
    ELECTRICIDAD_KWH: 0.233, // kgCO2e/kWh
  };

  export const calculateTransportEmissions = (km) => {
    return km * EMISSION_FACTORS.COCHE_GASOLINA_KM * 52; // Anual
  };

  export const calculateElectricityEmissions = (kwh) => {
    return kwh * EMISSION_FACTORS.ELECTRICIDAD_KWH * 12; // Anual
  };