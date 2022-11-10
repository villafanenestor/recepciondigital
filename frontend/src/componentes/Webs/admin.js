import React from "react"
import "../CSS/Admin.css"

 function Admin() {
    return (
        <div>
            <div className="logout">
                <a href="#">Cerrar Sesion</a>
            </div>

            <div className="contenedor-admin">
                <div className="propiedades">  
                    <div class="btn-group">
                        <ul className="slide">
                            <li><button>Propiedades</button></li>
                            <li><button>Operador</button></li>
                            <li><button>RegistroVisitas</button></li>
                        </ul>
                    </div>
                </div>
                <div className="Title">
                    <h1><strong>Registrar Propiedades</strong></h1> 
                </div>
                <div class="img">
                    
                </div>
                
            </div>
        </div>   
    )
}
   


export default Admin;