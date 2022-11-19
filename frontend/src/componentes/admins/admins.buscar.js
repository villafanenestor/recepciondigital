import React from 'react';
import './admins.buscar.css'
import { request } from '../helper/helper'
import { Container, Row } from "react-bootstrap"
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory, { PaginationProvider, PaginationListStandalone, SizePerPageDropdownStandalone } from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';

const { SearchBar } = Search;
const products = [
    {
        id: 1,
        name: "admin1",
        price: 1000,

    }, {
        id: 2,
        name: "admin2",
        price: 2000,
    }, {
        id: 3,
        name: "admin2",
        price: 2000,
    }, {
        id: 4,
        name: "admin2",
        price: 2000,
    }, {
        id: 6,
        name: "admin2",
        price: 2000,
    }
    , {
        id: 7,
        name: "admin2",
        price: 2000,
    }
    , {
        id: 8,
        name: "admin2",
        price: 2000,
    }
    , {
        id: 9,
        name: "admin2",
        price: 2000,
    }
    , {
        id: 10,
        name: "admin2",
        price: 2000,
    }
    , {
        id: 11,
        name: "admin2",
        price: 2000,
    }
    , {
        id: 12,
        name: "admin2",
        price: 2000,
    }
];


const columns = [{
    dataField: 'id',
    text: 'Product ID'
}, {
    dataField: 'name',
    text: 'Product Name'
}, {
    dataField: 'price',
    text: 'Product Price'
}];


export default class AdminBuscar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentDidMount() {
        request.get("/Page").then(response => {
            console.log(response.data);
        })
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        
        const options = {
            custom: true,
            totalSize: products.length
        };
        return (
            <Container id='admins-buscarcontainer'>
                <Row>
                    <h1>Buscar Admins</h1>
                </Row>
                <Row>
                    <ToolkitProvider
                        keyField="id"
                        data={products}
                        columns={columns}
                        search
                    >
                        {
                            props => (
                                <div>
                                    <h3>Input something at below input field:</h3>
                                    <SearchBar {...props.searchProps} />
                                    <hr />
                                    <PaginationProvider pagination={paginationFactory(options)}>
                                        {({ paginationProps, paginationTableProps }) => (

                                            <div>
                                                <SizePerPageDropdownStandalone {...paginationProps}/>
                                                <BootstrapTable
                                                    keyField="id"
                                                    data={products}
                                                    columns={columns}
                                                    {...paginationTableProps}
                                                    {...props.baseProps}
                                                />
                                                <PaginationListStandalone
                                                    {...paginationProps}
                                                />
                                            </div>
                                        )}
                                    </PaginationProvider>
                                  
                                </div>
                            )
                        }
                    </ToolkitProvider>


                </Row>
            </Container>
        );
    }
}


