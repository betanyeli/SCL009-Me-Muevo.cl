import React from 'react';
import Swal from 'sweetalert2'
import { Row, Col, Container } from 'react-bootstrap';
import { db } from '../data/firebaseInit.js'
import '../App.css'



class NewRegister extends React.Component {
        constructor(props) {
                super(props)
                this.state = {
                        name: '',
                        lastname: '',
                        phone: '',
                        email: '',
                        rut: '',
                        nationality: '',
                        birthdate: '',
                        gender: '',
                        health: '',
                        value: ''
                }
                //1 registro principal name && last name && phone && mail
                //2 info secundaria rut && nacionalidad, fecha de nacimiento, 
                //3 info final sexo && previsión && Gracias, 
        }

        sendData = event => {
                event.preventDefault()
                // eslint-disable-next-line
                const { name, lastname, phone, email, rut, nationality, birthdate, gender, health } = this.state;
                this.setState({
                        name: '',
                        lastname: '',
                        phone: '',
                        email: '',
                        rut: '',
                        nationality: '',
                        birthdate: '',
                        gender: '',
                        health: '',
                })

                db.collection("users").add({
                        name: this.state.name,
                        lastname: this.state.lastname,
                        phone: this.state.phone,
                        email: this.state.email,
                        rut: this.state.rut,
                        nationality: this.state.nationality,
                        birthdate: this.state.birthdate,
                        gender: this.state.gender,
                        health: this.state.health,
                }).then(() => {
                        Swal.fire(
                                'Registro Exitoso',
                                'Tus datos fueron enviados correctamente',
                                'success'
                        )

                })
                        .catch(() => {
                                Swal.fire("Failed to send");
                        })


        }
        render() {
                return (
                        <>
                                <Container>
                                        <Row className="register bgDiv">
                                                <Col className="pt-3" xs={12} sm={12} md={8} lg={6}>
                                                        <h2> Regístrate, tu apoyo es importante </h2>
                                                        <div className="form-group">

                                                                <label htmlFor="name">Nombres:</label>
                                                                <input className="form-control" type="text" />
                                                                <label htmlFor="lastname">Apellidos:</label>
                                                                <input className="form-control" type="text" />
                                                                <label htmlFor="email">Correo electrónico</label>
                                                                <input className="form-control" type="text" />
                                                                <label htmlFor="phone">Teléfono</label>
                                                                <input className="form-control" type="text" />
                                                                <br></br>
                                                                <button className="btn btn-primary" onClick={this.sendData}>Enviar Registro</button>

                                                        </div>
                                                </Col>
                                        </Row>
                                </Container>
                        </>

                )
        }

}


export default NewRegister;