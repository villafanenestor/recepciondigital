import React from "react"
import '../CSS/Test.css'

 function Test() {
    return (
        <div className='contenedor-test'>
            <img className='imagen-test' src={require("../images/recep.jpeg")} alt='imagen test'/>
            <div className='contenedor-texto-test'>
                <p className="nombre-test">Sam el cachorro</p>
                <p className="raza-test">Labrador</p>
                <p className="texto-test">perrito melo callejero bien mamalon</p>
            </div>
        </div>
    )
}

export default Test;