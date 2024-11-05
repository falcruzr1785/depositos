import miImagen from '../assets/inicio.svg';
import './Inicio.css';

export default function Inicio() {
  return (
    <div>
      <img src={miImagen} alt="Descripción de la imagen" className="imagen-inicio" />
    </div>
  );
}
