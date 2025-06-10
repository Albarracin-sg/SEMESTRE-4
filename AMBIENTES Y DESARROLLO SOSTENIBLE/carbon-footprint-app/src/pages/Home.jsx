import React from 'react';
import { Leaf, Calculator, Target, TrendingDown, Globe, Zap } from 'lucide-react';

// Card component mejorado
const Card = ({ title, children, icon: Icon, gradient }) => {
  return (
    <div className={`relative overflow-hidden rounded-2xl p-8 shadow-xl transform hover:scale-105 transition-all duration-300 ${gradient}`}>
      <div className="relative z-10">
        <div className="flex items-center mb-4">
          <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm mr-4">
            <Icon className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>
        <div className="text-white/90 leading-relaxed">
          {children}
        </div>
      </div>
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
    </div>
  );
};

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-green-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-200/20 to-teal-200/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-16 sm:py-24">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="p-6 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full shadow-2xl">
                <Globe className="w-16 h-16 text-white animate-pulse" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-green-600 bg-clip-text text-transparent mb-6 leading-tight">
              Tu Huella de Carbono
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
              Descubre tu impacto ambiental, establece metas sostenibles y contribuye a un planeta más verde. 
              <span className="text-emerald-600 font-semibold"> Cada acción cuenta.</span>
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="flex items-center bg-white/70 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
                <Leaf className="w-5 h-5 text-emerald-500 mr-2" />
                <span className="text-gray-700 font-medium">Sostenible</span>
              </div>
              <div className="flex items-center bg-white/70 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
                <TrendingDown className="w-5 h-5 text-teal-500 mr-2" />
                <span className="text-gray-700 font-medium">Reducción</span>
              </div>
              <div className="flex items-center bg-white/70 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
                <Zap className="w-5 h-5 text-green-500 mr-2" />
                <span className="text-gray-700 font-medium">Acción</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Elementos decorativos */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-200/30 rounded-full blur-xl animate-bounce"></div>
        <div className="absolute bottom-32 right-16 w-24 h-24 bg-teal-200/40 rounded-full blur-lg animate-pulse"></div>
        <div className="absolute top-1/2 right-8 w-16 h-16 bg-green-200/50 rounded-full blur-md animate-bounce" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Cards Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <Card 
            title="Calcula tu Huella" 
            icon={Calculator}
            gradient="bg-gradient-to-br from-emerald-500 to-emerald-600"
          >
            <p className="text-lg mb-4">
              Descubre tu impacto ambiental real con nuestra calculadora inteligente.
            </p>
            <p className="text-emerald-100">
              Analizamos tu estilo de vida, consumo energético y hábitos de transporte 
              para darte una medición precisa y personalizada de tu huella de carbono anual.
            </p>
          </Card>
          
          <Card 
            title="Establece Metas" 
            icon={Target}
            gradient="bg-gradient-to-br from-teal-500 to-teal-600"
          >
            <p className="text-lg mb-4">
              Crea objetivos realistas y alcanzables para un futuro más sostenible.
            </p>
            <p className="text-teal-100">
              Define metas personalizadas, recibe recomendaciones específicas y 
              monitorea tu progreso mientras reduces gradualmente tu impacto ambiental.
            </p>
          </Card>
        </div>
        
        {/* Estadísticas motivacionales */}
        <div className="mt-16 bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">El Impacto de Actuar Juntos</h2>
            <p className="text-gray-600">Pequeños cambios, grandes resultados</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">2.5T</div>
              <p className="text-gray-700">CO₂ promedio reducido por usuario al año</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-600 mb-2">89%</div>
              <p className="text-gray-700">De usuarios logran sus metas sostenibles</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">🌱</div>
              <p className="text-gray-700">Equivale a plantar 113 árboles</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;