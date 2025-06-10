import React from 'react';
import { Leaf, Heart, Globe, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-slate-800 to-gray-900 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-emerald-500/20 rounded-full">
                <Leaf className="w-6 h-6 text-emerald-400" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                CarbonApp
              </span>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Transformando el mundo, una huella de carbono a la vez. Únete a la revolución verde 
              y contribuye a un futuro más sostenible para las próximas generaciones.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <Heart className="w-4 h-4 text-red-400" />
              <span>Hecho con amor por Javier Gomez, Juan Albarracin, Esteban Molina, Valentina Tapia</span>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-lg font-semibold text-emerald-400 mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/" className="hover:text-emerald-400 transition-colors duration-200">Inicio</a></li>
              <li><a href="/calculator" className="hover:text-emerald-400 transition-colors duration-200">Calculadora</a></li>
              <li><a href="/goals" className="hover:text-emerald-400 transition-colors duration-200">Metas</a></li>
              <li><a href="/about" className="hover:text-emerald-400 transition-colors duration-200">Acerca de</a></li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-lg font-semibold text-emerald-400 mb-4">Contacto</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-emerald-400" />
                <span className="text-sm">info@carbonapp.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-emerald-400" />
                <span className="text-sm">+57 (1) 234-5678</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span className="text-sm">Bogotá, Colombia</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} CarbonApp. Todos los derechos reservados.
            </p>
            <div className="flex items-center space-x-4 text-gray-400">
              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4 text-emerald-400" />
                <span className="text-sm">Comprometidos con el medio ambiente</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;