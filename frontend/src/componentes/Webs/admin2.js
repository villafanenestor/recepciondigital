import React from "react";
import axios from 'axios';
import app from '../../app.json'
import "../../CSS/Admin.css"
import { Button, Form, Nav, Row } from "react-bootstrap"
//import { BrowserRouter as Link } from 'react-router-dom';
import Propiedades from "../grid/crearP";
import AdminBuscar from "../admins/admins.buscar";
import Navbar from "./navbar";

const { APIHOST } = app


export default class Admin2 extends React.Component {


    constructor(props) {
        super(props);
        this.state = {


        }
    }


    render() {
        return (
            <div>


                <div className="contenedor-admin">
                    <Navbar />

                    <div className="Title">
                        <h1><strong>Registrar Propiedades</strong></h1>
                    </div>
                    
                    <Propiedades />
                    <div className="b-prop">
                        <AdminBuscar />
                    </div>
                    <div class="img" />
                </div>
            </div>
        );
    }
}

