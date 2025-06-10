// Formatear números para una mejor visualización
export const formatNumber = (num) => {
  return num.toLocaleString('es-ES', { maximumFractionDigits: 2 });
};

// Formatear emisiones a toneladas
export const formatToTonnes = (kg) => {
  return (kg / 1000).toFixed(2);
};