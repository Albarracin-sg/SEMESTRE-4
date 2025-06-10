// Datos más detallados de factores de emisión.
// Fuente: EPA, IPCC, etc. (Usar fuentes fiables para datos reales)
export const emissionFactors = {
  transport: {
    car_gasoline_per_km: 0.18, // kg CO2e
    car_diesel_per_km: 0.17,
    bus_per_km: 0.1,
    flight_short_haul_per_km: 0.25,
  },
  energy: {
    electricity_kwh_spain: 0.233,
    natural_gas_kwh: 0.202,
  },
  food: {
    beef_per_kg: 27,
    chicken_per_kg: 6.9,
    vegetables_per_kg: 2,
  },
};