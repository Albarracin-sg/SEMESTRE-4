import React from "react";
import {
  Info,
  Users,
  Target,
  Heart,
  Globe,
  Lightbulb,
  Award,
  Zap,
} from "lucide-react";

// Card component mejorado
const Card = ({ title, children, icon: Icon, gradient }) => {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl p-8 shadow-xl transform hover:scale-105 transition-all duration-300 ${gradient}`}
    >
      <div className="relative z-10">
        <div className="flex items-center mb-4">
          <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm mr-4">
            <Icon className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>
        <div className="text-white/90 leading-relaxed">{children}</div>
      </div>
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
    </div>
  );
};

const About = () => {
  const teamMembers = [
    {
      name: "Valentina Tapia",
      role: "Ingeniera de Software",
      description:
        "Especialista en sostenibilidad y análisis de huella de carbono",
      icon: "🌱",
    },
    {
      name: "Javier Gomez",
      role: "Ingeniero de Software",
      description: "Experto en desarrollo web y experiencia de usuario",
      icon: "💻",
    },
    {
      name: "Esteban Molina",
      role: "Ingeniero de Software",
      description: "Especialista en diseño centrado en el usuario",
      icon: "🎨",
    },
    {
      name: "Juan Camilo Albarracín",
      role: "Ingeniero de Software",
      description:
        "Especialista en arquitectura de sistemas y desarrollo de algoritmos",
      icon: "⚙️",
    },
  ];

  const features = [
    {
      icon: Globe,
      title: "Cálculo Preciso",
      description: "Algoritmos avanzados para medir tu huella de carbono real",
    },
    {
      icon: Target,
      title: "Metas Personalizadas",
      description: "Establece objetivos realistas y alcanzables",
    },
    {
      icon: Lightbulb,
      title: "Consejos Inteligentes",
      description: "Recomendaciones personalizadas para reducir tu impacto",
    },
    {
      icon: Award,
      title: "Seguimiento de Progreso",
      description: "Monitorea tus avances y celebra tus logros",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-green-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-100/20 to-teal-100/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-16 sm:py-24">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="p-6 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full shadow-2xl">
                <Info className="w-16 h-16 text-white animate-pulse" />
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-green-600 bg-clip-text text-transparent mb-6 leading-tight">
              Acerca de Nosotros
            </h1>

            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
              Somos un equipo apasionado por crear un
              <span className="text-emerald-600 font-semibold">
                {" "}
                futuro más sostenible
              </span>{" "}
              a través de la tecnología y la conciencia ambiental.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="flex items-center bg-white/70 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
                <Heart className="w-5 h-5 text-red-500 mr-2" />
                <span className="text-gray-700 font-medium">Compromiso</span>
              </div>
              <div className="flex items-center bg-white/70 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
                <Users className="w-5 h-5 text-blue-500 mr-2" />
                <span className="text-gray-700 font-medium">Comunidad</span>
              </div>
              <div className="flex items-center bg-white/70 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
                <Zap className="w-5 h-5 text-yellow-500 mr-2" />
                <span className="text-gray-700 font-medium">Innovación</span>
              </div>
            </div>
          </div>
        </div>

        {/* Elementos decorativos */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-200/30 rounded-full blur-xl animate-bounce"></div>
        <div className="absolute bottom-32 right-16 w-24 h-24 bg-teal-200/40 rounded-full blur-lg animate-pulse"></div>
        <div
          className="absolute top-1/2 right-8 w-16 h-16 bg-green-200/50 rounded-full blur-md animate-bounce"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      {/* Misión y Visión */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-16">
          <Card
            title="Nuestra Misión"
            icon={Target}
            gradient="bg-gradient-to-br from-emerald-500 to-emerald-600"
          >
            <p className="text-lg mb-4">
              Empoderar a las personas para que tomen decisiones informadas
              sobre su impacto ambiental.
            </p>
            <p className="text-emerald-100">
              Proporcionamos herramientas accesibles y precisas para medir,
              entender y reducir la huella de carbono personal, creando
              conciencia y promoviendo acciones concretas hacia un futuro más
              sostenible.
            </p>
          </Card>

          <Card
            title="Nuestra Visión"
            icon={Globe}
            gradient="bg-gradient-to-br from-teal-500 to-teal-600"
          >
            <p className="text-lg mb-4">
              Un mundo donde cada persona contribuye activamente a la
              sostenibilidad ambiental.
            </p>
            <p className="text-teal-100">
              Visualizamos un futuro donde la medición y reducción de la huella
              de carbono sea parte natural de la vida cotidiana, y donde las
              decisiones individuales generen un impacto colectivo positivo para
              nuestro planeta.
            </p>
          </Card>
        </div>

        {/* Características */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              ¿Qué nos hace diferentes?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nuestra plataforma combina precisión científica con facilidad de
              uso
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm text-center">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Equipo */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Conoce a Nuestro Equipo
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Profesionales comprometidos con la sostenibilidad y la innovación
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-center">
                  <div className="text-6xl mb-4">{member.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-emerald-600 font-semibold mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Estadísticas de impacto */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Nuestro Impacto
            </h2>
            <p className="text-gray-600">
              Juntos estamos haciendo la diferencia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">
                5,000+
              </div>
              <p className="text-gray-700">Usuarios activos</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-600 mb-2">12.5T</div>
              <p className="text-gray-700">CO₂ reducido colectivamente</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">850</div>
              <p className="text-gray-700">
                Metas de sostenibilidad alcanzadas
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">92%</div>
              <p className="text-gray-700">Tasa de satisfacción</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
