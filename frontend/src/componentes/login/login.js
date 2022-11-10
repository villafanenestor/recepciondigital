import React from "react";
import axios from 'axios';
import app from '../../app.json'
import { Container, Form, Button,} from "react-bootstrap";
import '../../CSS/Test.css'
//import HideAndShowPass from "../HidePass/HideAndShowPass"
import '../../CSS/form.css'
import Cookies from "universal-cookie"
import { calcularExpiracionSesion  } from "../helper/helper";
import {isNull} from 'util'

const {APIHOST} = app
const cookies = new Cookies();

export default class login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };

    }

    iniciarSesion() {
        axios.post(`${APIHOST}/api/auth/login`, {
            email: this.state.usuarios,
            password: this.state.password,
        })

            .then((response) => {
                
                console.log(response);
                if(isNull(response.data.token)){
                    alert("Usuario no encontrado")
                }else{
                    cookies.set('_s',response.data.tokenInformation.token,{
                        path:"/",
                        expires: calcularExpiracionSesion(),
                    });
                }

                
            })
            .catch((err) => {
                console.log(err);

                const {response} = err;
                const {data} = response;
                const {errors} = data;
                

                if(response.status===400){
                    alert(data.msg);
                    alert(errors[0].msg)
                }

            });
    }

    render() {
        return (

            <div className="contenedor-test">
                <img className='imagen-test' src={require("../../images/recep.jpeg")} alt='imagen test' />
                <Container id="login-container" >
                    <Form id='stripe-login'>
                        <div className="form" >
                            <Form.Group className="field padding-bottom--24" controlId="formBasicEmail">
                                <Form.Label className="elabel">Email address</Form.Label>
                                <Form.Control className="boxsize" placeholder="Email" onChange={(e) => this.setState({ usuarios: e.target.value })} />
                                {this.state.usuarios}

                            </Form.Group>

                            <Form.Group className="field padding-bottom--24" controlId="formBasicPassword">
                                <Form.Label >Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" onChange={(e) => this.setState({ password: e.target.value })} />
                                {this.state.password}

                            </Form.Group>

                            <Button  type="button" onClick={() => {this.iniciarSesion();}}>
                                Inicia sesion
                            </Button>
                            
                        </div>
                    </Form>
                </Container>
            </div>
        );
    }
}



