import { Fragment, useState } from "react";
import Formulario from "./componentes/Formulario";
import Header from "./componentes/Header";
import Mensaje from "./componentes/Mensaje";
import Resultado from "./componentes/Resultado";
import Spinner from "./componentes/Spinner";


function App() {
      //Definir el State
      const [cantidad, setCantidad] = useState(0)
      const [plazo, setPlazo] = useState('')
      const [total, setTotal] = useState(0)

      //UseState para el Spinner
      const [cargando, setCargando] = useState(false)

      //Este condicional sirve para mostrar un componenete o el otro
      let componente
      if(cargando){
        componente = <Spinner />
      } else if(total === 0) {
        componente = <Mensaje />
      }else{
        componente = <Resultado 
                        total={total}
                        plazo={plazo}
                        cantidad={cantidad}
                      />
      }

  return (
    <Fragment>
      <Header titulo="Cotizador de Prestamos" />

      <div className="container">
        <Formulario 
          cantidad={cantidad} setCantidad={setCantidad} 
          plazo={plazo} setPlazo={setPlazo}
          total={total} setTotal={setTotal}
          setCargando={setCargando}
        />
        <div className="mensajes">
          {componente}
        </div>

      </div>
    </Fragment>
  );
}

export default App;
