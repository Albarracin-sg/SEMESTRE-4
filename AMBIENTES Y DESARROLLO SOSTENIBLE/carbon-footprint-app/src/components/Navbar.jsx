import { NavLink } from 'react-router-dom';
import { Leaf, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { to: '/', label: 'Inicio' },
    { to: '/calculator', label: 'Calculadora' },
    { to: '/goals', label: 'Metas' },
    { to: '/about', label: 'Acerca de' }
  ];

  return (
    <nav className="bg-gradient-to-r from-emerald-600 via-teal-600 to-green-600 shadow-xl relative">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-3 text-white hover:text-emerald-100 transition-colors duration-300">
            <div className="p-2 bg-white/20 rounded-full backdrop-blur-sm">
              <Leaf className="w-6 h-6" />
            </div>
            <span className="text-2xl font-bold bg-white/90 bg-clip-text text-transparent">
              CarbonApp
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => 
                  `px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                    isActive 
                      ? 'bg-white/20 text-white backdrop-blur-sm shadow-lg' 
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-white hover:bg-white/10 rounded-full transition-colors duration-200"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-gradient-to-b from-emerald-600 to-teal-700 shadow-2xl border-t border-white/10 backdrop-blur-sm">
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) => 
                    `block px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                      isActive 
                        ? 'bg-white/20 text-white backdrop-blur-sm shadow-lg' 
                        : 'text-white/90 hover:text-white hover:bg-white/10'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;