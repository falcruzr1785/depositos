import { Link } from "react-router-dom";
import './NavBar.css';

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-title">
        <Link to={'/Inicio'}>
          <h2>Depósitos</h2>
        </Link>
      </div>

      <ul className='nav-list'>
        <Link to={'/Inicio'}>
          <li>Inicio</li>
        </Link>
        
        <div className="deposit-options">
          <Link to={'./Subastas'}>{/*plantilla despliegda datos para pagar subastas*/}
            <li>Subastas</li>
          </Link>
          {/* Plantilla desplegada para datos de transporte */}
          <Link to="./Transportes">
            <li>Transporte</li>
          </Link>
        </div>
      </ul>
    </nav>
  );
}
