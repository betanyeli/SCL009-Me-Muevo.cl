import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import Swal from 'sweetalert2'
//import {Link} from 'react-router-dom'


class PersonalDetails extends Component {
    saveAndContinue = (e) => {
        e.preventDefault();
        //this.props.nextStep();
        Swal.fire(
            'Registro Exitoso',
            'Tus datos fueron enviados correctamente',
            'success'
    )
    }

    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values } = this.props
        return (
            <Form>
                <h4>Súmate a nuestra red de pacientes y recibe boletines informativos en tu correo electrónico </h4>
                <Form.Group>
                    <Form.Label>
                        R.U.T.
                    </Form.Label>
                    <Form.Control type="text" onChange={this.props.handleChange('rut')}
                        defaultValue={values.rut} />
                </Form.Group>
                <Form.Group>
                    <Form.Label className="mr-3" >
                        Fecha de Nacimiento:
                    </Form.Label>
                    <Form.Control type="date" onChange={this.props.handleChange('birthday')}
                        defaultValue={values.birthday} />
                </Form.Group>
                <Form.Group>
                    <Form.Label className="mr-3">
                        Nacionalidad:
                    </Form.Label>
                    <Form.Check inline
                        type="radio"
                        label="Chilena"
                        name="formHorizontalRadios"
                        id="chilena"
                        defaultValue={values.nationality}
                    />
                    <Form.Check inline
                        type="radio"
                        label="Extranjera"
                        name="formHorizontalRadios"
                        id="extranjero"
                        defaultValue={values.nationality}
                    />
                </Form.Group>
                
                <Form.Group>
                    <Form.Label className="mr-3">
                        Género:
                    </Form.Label>
                    <Form.Check inline
                        type="radio"
                        label="Femenino"
                        name="formHorizontalRadios"
                        id="femenino"
                        defaultValue={values.genre}
                    />
                    <Form.Check inline
                        type="radio"
                        label="Masculino"
                        name="formHorizontalRadios"
                        id="masculino"
                        defaultValue={values.genre}
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label className="mr-3">
                        Previsión: 
                    </Form.Label>
                    {/* <Form.Control type="text" onChange={this.props.handleChange('nationality')}
                        defaultValue={values.nationality} /> */}
                    <Form.Check inline
                        type="radio"
                        label="FONASA"
                        name="formHorizontalRadios"
                        id="fonasa"
                        defaultValue={values.health}
                    />
                    <Form.Check inline
                        type="radio"
                        label="ISAPRE"
                        name="formHorizontalRadios"
                        id="isapre"
                        defaultValue={values.health}
                    />
                </Form.Group>

                <Button className=" btn float-left" onClick={this.back}>Atrás</Button>
                <Button className="float-right btn-enviar" onClick={this.saveAndContinue}>Enviar</Button>
            </Form>
        )
    }
}

export default PersonalDetails;