import React from "react"
import "../../CSS/Admin.css" 
import {Button, Form} from "react-bootstrap"
import {BrowserRouter as  Link} from 'react-router-dom';


 export default function Admin() {
    return (
        <div>
            

            <div className="contenedor-admin">
                {/* <div className="logout">
                     <button type="submit">Cerrar sesion</button>
                </div> */}
                <div className="propiedades">  
                    <div class="btn-group">
                        <ul className="slide">
                            <Link to="/admins">
                                <li><button>Propiedades</button></li>
                            </Link>
                            <li><button>Operador</button></li>
                            <li><button>Registro Visitas</button></li>
                            <li><button>Cerrar sesión</button></li>
                        </ul>
                    </div>
                </div>
                <div className="Title">
                    <h1><strong>Registrar Propiedades</strong></h1> 
                </div>
                <Form className="Container-Pro">

                    <Form.Group className="field" controlId="formBasicEmail">
                             <Form.Label className="elabel">Email address</Form.Label>
                             <Form.Control className="boxsize" placeholder="Email" onChange={(e) => this.setState({ usuarios: e.target.value })} />
                     </Form.Group>
                     <Form.Group className="field" controlId="formBasicEmail">
                             <Form.Label className="elabel">Email address</Form.Label>
                             <Form.Control className="boxsize" placeholder="Email" onChange={(e) => this.setState({ usuarios: e.target.value })} />
                    </Form.Group>
                    <Form.Group className="field" controlId="formBasicEmail">
                             <Form.Label className="elabel">Email address</Form.Label>
                             <Form.Control className="boxsize" placeholder="Email" onChange={(e) => this.setState({ usuarios: e.target.value })} />
                    </Form.Group>
                    <Form.Group className="field" controlId="formBasicEmail">
                             <Form.Label className="elabel">Email address</Form.Label>
                             <Form.Control className="boxsize" placeholder="Email" onChange={(e) => this.setState({ usuarios: e.target.value })} />
                    </Form.Group>
                    <Form.Group className="field" controlId="formBasicEmail">
                             <Form.Label className="elabel">Email address</Form.Label>
                             <Form.Control className="boxsize" placeholder="Email" onChange={(e) => this.setState({ usuarios: e.target.value })} />
                    </Form.Group>
                    <br></br>
                    <Button type="Button">Enviar</Button>
                 </Form>
                 <div>
                    <h3><strong>Propiedades Registradas</strong></h3> 
                </div>
                <div class="img"/>
            </div>
        </div>   
    )
}
   

