import React from 'react';
import { Button, Form, } from "react-bootstrap"
import axios from 'axios';
import app from '../../app.json'

const { APIHOST } = app

export default class Select extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre: []
        }
    }

    componentDidMount() {
        axios.get(`${APIHOST}/conjunto`)
            .then(response => {
                this.setState({ nombre: response.data });
            })
            .catch(error => {
                console.log(error);
            })
    }
    render() {
        return (
            <Form.Select id="ddlViewBy" className="boxsize" >
                {this.state.nombre.map(elemento => (
                    <option key={elemento.nombre} value={elemento.nombre}>{elemento.nombre}</option>
                ))}

            </Form.Select>
        );
    }
}

