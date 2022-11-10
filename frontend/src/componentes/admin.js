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
                    <div class="card-image">	
                        
                    </div>
                    <form class="card-form">
                        
                        <div class="input">
                            <label class="input-label">Nombre</label>
                            <input type="text" class="input-field"  required/>
                        </div>
                        <div class="input">
                            <label class="input-label">Cedula</label>
                            <input type="text" class="input-field"  required/>
                        </div>
                        <div class="input">
                            <label class="input-label">Telefono</label>
                            <input type="password" class="input-field" required/>
                        </div>
                        <div class="input">
                            <label class="input-label">Torre/Bloque</label>
                            <input type="password" class="input-field" required/>
                        </div>
                        <div class="input">
                            <label class="input-label">Apartamento</label>
                            <input type="password" class="input-field" required/>
                        </div>
                        <div class="action">
                            <button class="action-button">Enviar</button>
                        </div>
                    </form>
                    
                </div> 
                
        </div>
    )
}
   


export default Admin;