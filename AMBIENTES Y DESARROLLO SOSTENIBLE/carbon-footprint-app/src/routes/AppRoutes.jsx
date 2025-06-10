import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Calculator from '../pages/Calculator';
import Goals from '../pages/Goals';
import About from '../pages/About';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/goals" element={<Goals />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default AppRoutes;