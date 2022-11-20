import React from 'react';
import { request } from '../helper/helper'
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory, { PaginationProvider, PaginationListStandalone, SizePerPageDropdownStandalone } from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';

const { SearchBar } = Search;


export default class DataGrid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rows: []

        }

    }

    getData() {
        request.get(this.props.url).then(response => {
            this.setState({rows: response.data});
            //console.log(response.data);
        })
            .catch(error => {
                console.log(error);
            })
    }
    render() {
        const options = {
            custom: true,
            totalSize: this.state.rows.length
        };
        return (
            <ToolkitProvider
                keyField="tp"
                data={this.state.rows}
                columns={this.props.columns}
                search
            >
                {(props) => (
                    <div>
                        <h3>Buscar datos</h3>
                        <SearchBar {...props.searchProps} />
                        <hr />
                        <PaginationProvider pagination={paginationFactory(options)}>
                            {({ paginationProps, paginationTableProps }) => (

                                <div>

                                    <SizePerPageDropdownStandalone {...paginationProps} />
                                    <BootstrapTable
                                        keyField="bt"
                                        data={this.state.rows}
                                        columns={this.props.columns}
                                        {...paginationTableProps}
                                        {...props.baseProps}
                                    />
                                    <PaginationListStandalone {...paginationProps} />
                                </div>
                            )}
                        </PaginationProvider>

                    </div>
                )
                }
            </ToolkitProvider>
        );
    }
}
