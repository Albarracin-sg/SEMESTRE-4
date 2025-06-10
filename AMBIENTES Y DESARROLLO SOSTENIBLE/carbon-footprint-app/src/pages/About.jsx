import React from 'react';
import Card from '../components/Card';

const About = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Acerca de la App</h1>
      <Card title="Nuestra Misión">
        <p>
          Nuestra misión es proporcionar una herramienta accesible y fácil de usar para que las personas
          tomen conciencia de su huella de carbono y se sientan empoderadas para tomar acciones
          que contribuyan a un futuro más sostenible.
        </p>
      </Card>
    </div>
  );
};

export default About;