import React from "react"
import "../../CSS/Admin.css" 
import {Container} from "react-bootstrap"
import {BrowserRouter as  Link} from 'react-router-dom';

 export default function Admin() {
    return (
        <div>
            <div className="logout">
                Cerrar sesion
            </div>

            <div className="contenedor-admin">
                <div className="propiedades">  
                    <div class="btn-group">
                        <ul className="slide">
                            <Link to="/admins">
                                <li><button>Propiedades</button></li>
                            </Link>
                            <li><button>Operador</button></li>
                            <li><button>Registro Visitas</button></li>
                        </ul>
                    </div>
                </div>
                <div className="Title">
                    <h1><strong>Registrar Propiedades</strong></h1> 
                </div>
                <div className="Container-Pro">
                    <Container className="Data-1">
                        Nombre <input type="text"  placeholder="Torre/Bloque"/>
                    </Container>
                    <Container className="Data-2">
                        Cédula <input type="text"  placeholder="Torre/Bloque"/>
                    </Container>
                    <Container className="Data-3">
                        Celular <input type="text"  placeholder="Torre/Bloque"/> 
                    </Container>
                    <Container className="Data-4">
                        Torre/Bloque <input type="text"  placeholder="Torre/Bloque"/>
                    </Container>
                    <Container className="Data-">
                        Apartamento/Casa <input type="text"  placeholder="Torre/Bloque"/>
                    </Container>
                 </div>
                <div class="img"/>
            </div>
        </div>   
    )
}
   

