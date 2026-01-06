import { Link } from 'react-router-dom';
import AppRoutes from './AppRoutes'

export default function App() {
  return (
    <>
      <nav style={{ display: 'flex', gap: '1rem', padding: '1rem', background: '#21262d' }}>
        <Link to="/">Inicio</Link>
        <Link to="/about">Acerca de</Link>
        <Link to="/productos">Productos</Link>
        <Link to="/contacto">Contacto</Link>
      </nav>

      <AppRoutes />
    </>
  );
}