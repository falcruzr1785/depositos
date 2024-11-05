import { useState } from 'react'
import '../Components/Form.css'
import {useForm} from 'react-hook-form'
import MediaQuery from 'react-responsive';

// Importa las funciones de texto desde el archivo de utilidades
import {detalleTxtAuction } from '../utils/auctionTexts';
import { copiarAlPortapapeles } from '../utils/clipboard';
import { BANK_INFO } from '../constants/bankingInfo';


export default function FormInput() {


  const {register, handleSubmit,
    formState: {errors}
} = useForm()
const [detalle, setDetalle] = useState('') // Estado para almacenar el detalle

 

const onSubmit = handleSubmit((data) => {
    let detalleText = '';
    let montoFinal = data.monto;

     // Si el checkbox de costos está marcado, sumar 55 al monto
     if (data.costos) {
        montoFinal = Number(data.monto) + 55;
      }
    
    switch (data.subasta) {
      case 'copart':
        detalleText = BANK_INFO.copart + detalleTxtAuction(montoFinal, data.stock);

        break; // Salir del caso 'copart'

      case 'iaa':
        detalleText = BANK_INFO.iaa + detalleTxtAuction(montoFinal, data.stock);
        
        break; // Salir del caso 'IAA'

      default:
        detalleText = 'Subasta no especificada';
        break;
    }

    setDetalle(detalleText); // Actualizar el estado "detalle"
  });
   
  
 

  return (
    <MediaQuery minWidth={500}>
    <div className='form'>

      <form onSubmit={onSubmit}> 

        {/*seleccion de subasta */}
        <div className="custom-select">
        <label htmlFor="subasta"> SUBASTA </label>
        <select
        {...register("subasta", {
            required: true,

        })}
        id='subasta'
        >   <option value="selection" > Seleccionar </option>
            <option value="copart" > Copart </option>
            <option value="iaa"> IAA </option>
        </select>
        </div>
        {/*numero de stock del vehiculo */}
        <label htmlFor="stock"> Numero de Stock </label>
        <input type="text" 
        {...register("stock", {
            required: true,
        })}
        id='stock'
        />
        {errors.stock && <span className='error'> Numero de stock es requerido</span>}

        {/*monto */}
        <label htmlFor="monto"> Monto </label>
        <input type="number"
        {...register("monto", {
            required: true,

        })}
        id='monto'
        />
        {errors.monto && <span className='error'> El monto es requerido</span>}

      <div className='costos'>
      <label>
        {/*costos extras */}
       
        <input type="checkbox"
        {...register("costos")}
        id='costos' // Agregar el id correspondiente

        />
          {<span > Marque el check para sumar costos </span>}
          </label>

        </div>
        {/*boton para generar */}
        <button>
            Generar
        </button>
        
      </form>

     
      {/* Campo de texto que despliega el detalle */}
      <label htmlFor='detalle'> Detalle </label>
        <textarea
          className='detalle'
          value={detalle} // Mostrar el texto almacenado en el estado "detalle"
          readOnly // Hacer que el campo sea de solo lectura
          id='detalle' // Agregar el id correspondiente

        />
     
         {/* Botón para copiar el detalle */}
      <button onClick={()=>copiarAlPortapapeles(detalle)}>Copiar</button>
    </div>
    </MediaQuery>  
  )
}
