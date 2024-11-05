import miImagen from './assets/inicio.svg';
import '../src/Components/Inicio.css';

export default function Inicio() {
  return (
    <div>
      <img src={miImagen} alt="Descripción de la imagen" className="imagen-inicio" />
    </div>
  );
}
