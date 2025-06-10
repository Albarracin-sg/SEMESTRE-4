import React from 'react';
import Card from '../components/Card';

const Home = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mb-6">Bienvenido a tu App de Huella de Carbono</h1>
      <p className="text-center text-lg mb-8">Mide, entiende y reduce tu impacto en el planeta.</p>
      <div className="grid md:grid-cols-2 gap-8">
        <Card title="Calcula tu Huella">
          <p>Usa nuestra calculadora para estimar tu emisión de carbono anual basada en tu estilo de vida.</p>
        </Card>
        <Card title="Establece Metas">
          <p>Crea y sigue metas personalizadas para reducir tu huella de carbono a lo largo del tiempo.</p>
        </Card>
      </div>
    </div>
  );
};

export default Home;