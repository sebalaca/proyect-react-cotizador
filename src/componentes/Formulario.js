import React, {Fragment, useState} from "react";
import { calcularTotal } from "../Helpers";

const Formulario = (props) => {

    const {cantidad, setCantidad, plazo, setPlazo, total, setTotal, setCargando} = props

    //Creamos useState para definir un mensaje de error
    const [error, setError] = useState(false)

    const handleLeerCantidad = (e) => {
        setCantidad(parseInt(e.target.value))
    }

    const handleLeerPlazo = (e) => {
        setPlazo(parseInt(e.target.value))
    }

    const calcularPrestamo = (e) => {
        e.preventDefault()

        //Validar si se ingresaron los datos que se solicita en form, sino dar error
        if(cantidad === 0 || plazo === ''){
            setError(true)
            return
        }

        //Eliminar error previo
        setError(false)

        //Habilitar el Spinner
        setCargando(true)

        setTimeout(() => {            
            //Realizar la cotizacion
            const total = calcularTotal(cantidad, plazo)
    
            //Guardar total
            setTotal(total)

        //Deshabilitar el Spinner
        setCargando(false)
        }, 3000);

    }

    return (
        <Fragment>
            <form onSubmit={calcularPrestamo}>

                <div className="row">
                    <div>
                    <label>Cantidad Prestamo</label>
                    <input
                        className="u-full-width"
                        type="number"
                        placeholder="Ejemplo: 3000"
                        onChange={handleLeerCantidad}
                    />
                    </div>
                    <div>
                    <label>Plazo para Pagar</label>
                    <select 
                        className="u-full-width"
                        onChange={handleLeerPlazo}
                    >
                        <option value="">Seleccionar</option>
                        <option value="3">3 meses</option>
                        <option value="6">6 meses</option>
                        <option value="12">12 meses</option>
                        <option value="24">24 meses</option>
                    </select>
                    </div>
                    <div>
                    <input
                        type="submit"
                        value="Calcular"
                        className="button-primary u-full-width"
                    />
                    </div>
                </div>
            </form>

            {(error)?<p className="error">Todos los campos son obligatorios</p>:null}
            
        </Fragment>    
    );
};

export default Formulario;
