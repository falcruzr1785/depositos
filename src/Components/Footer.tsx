import './Footer.css';
import MediaQuery from 'react-responsive';

export default function NavBar() {
    return (
      <MediaQuery minWidth={500}>
<div className="footer">
  <p> - Importación de vehiculos - </p>
  <a> Autos Freddy CR</a>
</div>
</MediaQuery>  
)
}