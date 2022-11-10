import React from "react"
import "../CSS/Admin.css"

 function Admin() {
    return (
        <div className="contenedor-admin">
            <div className="propiedades">
                <div class="btn-group">
                    <button><a href="./admin.js">Propiedades</a></button>
                    <button>Operador</button>
                    <button>Registro Visitas</button>
                </div>
            </div>

            <div className="logout">
                <a href="#">Cerrar Sesion</a>
            </div>
            <div className="rpropiedades">
                <h1>Registrar Propiedades</h1>
            </div>
        </div>
    )
}
   


export default Admin;