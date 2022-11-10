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
            <div className="rform">
                <form class="card-form">
                <div class="input">
                    <input type="text" class="input-field" value="Alexander Parkinson" required/>
                    <label class="input-label">Full name</label>
                </div>
                            <div class="input">
                    <input type="text" class="input-field" value="vlockn@gmail.com" required/>
                    <label class="input-label">Email</label>
                </div>
                            <div class="input">
                    <input type="password" class="input-field" required/>
                    <label class="input-label">Password</label>
                </div>
                <div class="action">
                    <button class="action-button">Get started</button>
                </div>
                </form>
            </div>   
        </div>
    )
}
   


export default Admin;