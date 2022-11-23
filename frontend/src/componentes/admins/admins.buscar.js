import React from 'react';
import './admins.buscar.css'
//import { request } from '../helper/helper'
import { Container, Row, } from "react-bootstrap"
import DataGrid from '../grid/grid';

const columns = [
    {
        dataField: '_id',
        text: 'ID',
        hidden: true,
    },
    {
        dataField: 'nombre',
        text: 'Nombre',
    },
    {
        dataField: 'email',
        text: 'Email',
    },
    {
        dataField: 'rol',
        text: 'Rol',
    },
    {
        dataField: 'estado',
        text: 'Estado',
    }
    
];



export default class AdminBuscar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    

    render() {


        return (
            <Container id='admins-buscarcontainer'>
                <Row>
                    <h1>Buscar Admins</h1>
                </Row>
                <Row>
                    <DataGrid url="/admins" columns={columns} />
                </Row>
            </Container>
        );
    }
}


