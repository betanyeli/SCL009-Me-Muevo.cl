import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

class UserDetails extends Component {

    saveAndContinue = (e) => {
        e.preventDefault()
        this.props.nextStep()
    }

    render() {
        const { values } = this.props;
        return (

            <Form>
                <h2> Regístrate, tu apoyo es importante </h2>
                <Form.Group >
                    <Form.Label>
                        Nombre
                    </Form.Label>
                    <Form.Control type="text" onChange={this.props.handleChange('name')}
                        defaultValue={values.name} />
                </Form.Group>
                <Form.Group >
                    <Form.Label>
                        Apellido
                    </Form.Label>
                    <Form.Control type="text" onChange={this.props.handleChange('lastname')}
                        defaultValue={values.lastname} />
                </Form.Group>
                <Form.Group >
                    <Form.Label>
                    Correo electrónico
                    </Form.Label>
                    <Form.Control type="text" onChange={this.props.handleChange('email')}
                        defaultValue={values.email} />
                </Form.Group>
                <Form.Group >
                    <Form.Label>
                        Teléfono
                    </Form.Label>
                    <Form.Control type="tel" onChange={this.props.handleChange('phone')}
                        defaultValue={values.phone} />
                </Form.Group>
               
                   

  
                <Button className="float-right" onClick={this.saveAndContinue}>Guardar </Button>
            </Form>
        )
    }
}
//<Button onClick={this.saveAndContinue}>Guardar y continuar</Button>
export default UserDetails;