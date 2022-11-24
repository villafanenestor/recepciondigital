import React from 'react';
import { Form, Button} from 'react-bootstrap';
import Select from '../Webs/selectinfo';


export default class Propiedades extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <Form className="Container-Pro">

                <Form.Group className="field" controlId="formBasicName">
                    <Form.Label className="elabel">Nombre</Form.Label>
                    <Form.Control className="boxsize" placeholder="Nombre" onChange={(e) => this.setState({ usuarios: e.target.value })} />
                </Form.Group>
                <Form.Group className="field" controlId="formBasicPhone">
                    <Form.Label className="elabel">Telefono</Form.Label>
                    <Form.Control className="boxsize" placeholder="Telefono" onChange={(e) => this.setState({ usuarios: e.target.value })} />
                </Form.Group>
                <Form.Group className="field" controlId="formBasicEmail">
                    <Form.Label className="elabel">Cedula</Form.Label>
                    <Form.Control className="boxsize" placeholder="Cedula" onChange={(e) => this.setState({ usuarios: e.target.value })} />
                </Form.Group>
                <Form.Group className="field" >
                    <Form.Label className="elabel">Seleccionar Apartamento</Form.Label>
                    <Select />
                </Form.Group>

                <Button type="Button">Crear Registro</Button>
            </Form>
        );
    }
}
