import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-green-600 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <NavLink to="/" className="text-white text-2xl font-bold">CarbonApp 🌍</NavLink>
        <div className="space-x-4">
          <NavLink to="/" className="text-white hover:text-green-200">Inicio</NavLink>
          <NavLink to="/calculator" className="text-white hover:text-green-200">Calculadora</NavLink>
          <NavLink to="/goals" className="text-white hover:text-green-200">Metas</NavLink>
          <NavLink to="/about" className="text-white hover:text-green-200">Acerca de</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;