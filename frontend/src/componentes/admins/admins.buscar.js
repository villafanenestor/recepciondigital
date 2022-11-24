import React from 'react';
import './admins.buscar.css'
//import { request } from '../helper/helper'
import { Container, Row, } from "react-bootstrap"
import DataGrid from '../grid/grid';

export const columns = [
    // {
    //     dataField: '_id',
    //     text: 'ID',
    //     hidden: true,
    // },
    {
        dataField: 'nombre',
        text: 'Nombre',
    },
    {
        dataField: 'nit',
        text: 'Nit',
    },
    {
        dataField: 'direccion',
        text: 'Rol',
    },
    {
        dataField: 'cantidad_viviendas',
        text: 'Cantidad de viviendas',
    },
    {
        dataField: 'tipo_viviendas',
        text: 'Tipo de viviendas',
    },
    
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
                    <h1>Buscar Conjuntos</h1>
                </Row>
                <Row>
                    <DataGrid url="/admins" columns={columns} />
                </Row>
            </Container>
        );
    }
}


