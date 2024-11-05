import { useState } from 'react'
import {useForm} from 'react-hook-form'


// Importa las funciones de texto desde el archivo de utilidades
import { detalleTxtTransport } from '../utils/auctionTexts';
import { copiarAlPortapapeles } from '../utils/clipboard';
import { BANK_INFO } from '../constants/bankingInfo';
import MediaQuery from 'react-responsive';


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
    
    switch (data.naviera) {
      case 'atm':
        detalleText = BANK_INFO.atm + detalleTxtTransport(montoFinal, data.idDetalle);

        break; // Salir del caso 'atm'

      case 'na':
        detalleText = BANK_INFO.na + detalleTxtTransport(montoFinal, data.idDetalle);
        
        break; // Salir del caso 'North Atlantic'

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
        <label htmlFor='naviera'> NAVIERA </label>
        <select
        {...register("naviera", {
            required: true,

        })}
        id='naviera'
        >   <option value="selection" > Seleccionar </option>
            <option value="na" > NorthAtlantic </option>
            <option value="atm"> ATM </option>
        </select>
        </div>
        {/*detalle del vehiculo */}
        <label htmlFor="idDetalle"> Detalle </label>
        <input type="text" 
        {...register("idDetalle", {
            required: true,
        })}
        id='idDetalle'
        />
        {errors.idDetalle && <span className='error'> Detalle es requerido</span>}

        {/*monto */}
        <label htmlFor="monto"> Monto </label>
        <input type="number"
        {...register("monto", {
            required: true,

        })}
        id='monto'
        />
        {errors.monto && <span className='error'> El monto es requerido</span>}

     
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
