import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { db } from '../data/firebaseInit.js'
import './components.css'



class TemplateRegister extends React.Component {
        constructor(props) {
                super(props)
                this.state = {
                        currentStep: 1,
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

        handleChange = event => {
                const { name, lastname, phone, email, rut, nationality, birthdate, gender, health, value } = event.target
                this.setState({
                        [name]: value,
                        [lastname]: value,
                        [phone]: value,
                        [email]: value,
                        [rut]: value,
                        [nationality]: value,
                        [birthdate]: value,
                        [gender]: value,
                        [health]: value

                })
        }

        handleSubmit = event => {
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
                        alert("Sending to firebase");
                })
                        .catch(() => {
                                alert("Failed to send");
                        })


        }

        _next = () => {
                let currentStep = this.state.currentStep
                currentStep = currentStep >= 2 ? 3 : currentStep + 1
                this.setState({
                        currentStep: currentStep
                })
        }

        _prev = () => {
                let currentStep = this.state.currentStep
                currentStep = currentStep <= 1 ? 1 : currentStep - 1
                this.setState({
                        currentStep: currentStep
                })
        }

        /*
        * the functions for our button
        */
        previousButton() {
                let currentStep = this.state.currentStep;
                if (currentStep !== 1) {
                        return (
                                <>
                                        <button
                                                className="btn btn-secondary"
                                                type="button" onClick={this._prev}>
                                                Atrás </button>
                                        <button className="btn btn-primary" onClick={this.handleSubmit}>Registrar</button>
                                </>


                        )
                }
                return null;
        }

        nextButton() {
                let currentStep = this.state.currentStep;
                if (currentStep < 2) {
                        return (
                                <button
                                        className="btn btn-primary float-right"
                                        type="button" onClick={this._next}>
                                        Siguiente
            </button>
                        )
                }
                return null;
        }

        render() {
                return (
                        <React.Fragment>



                                <Container >
                                        <Row className="register bgDiv">
                                                <Col xs={12} sm={12} md={8} lg={6}>
                                                        <h2> Regístrate, tu apoyo es importante </h2>
                                                        <form>
                                                                {/* 
              render the form steps and pass required props in
            */}
                                                                <Step1
                                                                        currentStep={this.state.currentStep}
                                                                        handleChange={this.handleChange}
                                                                        name={this.state.name}
                                                                        lastname={this.state.lastname}
                                                                        email={this.state.email}
                                                                        phone={this.state.phone}
                                                                />
                                                                <Step2
                                                                        currentStep={this.state.currentStep}
                                                                        handleChange={this.handleChange}
                                                                        rut={this.state.rut}
                                                                        nationality={this.state.nationality}
                                                                        birthdate={this.state.birthdate}
                                                                        gender={this.state.gender}
                                                                        health={this.state.health}
                                                                />

                                                                {this.previousButton()}
                                                                {this.nextButton()}

                                                        </form>
                                                </Col>
                                        </Row>
                                </Container>

                        </React.Fragment>
                );
        }
}

function Step1(props) {
        if (props.currentStep !== 1) {
                return null
        }
        return (
                <div className="form-group">

                        <label htmlFor="name">Nombres:</label>
                        <input
                                className="form-control"
                                id="name"
                                name="name"
                                type="text"
                                value={props.name}
                                onChange={props.handleChange}
                                required
                        />
                        <label htmlFor="lastname">Apellidos:</label>
                        <input
                                className="form-control"
                                id="lastname"
                                name="lastname"
                                type="text"
                                value={props.lastname}
                                onChange={props.handleChange}
                        />
                        <label htmlFor="email">Correo electrónico</label>
                        <input
                                className="form-control"
                                id="email"
                                name="email"
                                type="text"
                                value={props.email}
                                onChange={props.handleChange}
                                required
                        />
                        <label htmlFor="phone">Teléfono</label>
                        <input
                                className="form-control"
                                id="phone"
                                name="phone"
                                type="text"
                                value={props.phone}
                                onChange={props.handleChange}
                                required
                        />

                </div>
        );
}

function Step2(props) {
        if (props.currentStep !== 2) {
                return null
        }
        return (
                <>
                        <p>Súmate a nuestra red de pacientes y recibe boletines informativos en tu correo electrónico </p>
                        {/* <p>Paso {this.state.currentStep} </p> */}
                        <div className="form-group">
                                <label htmlFor="rut">R.U.T.</label>
                                <input
                                        className="form-control"
                                        id="rut"
                                        name="rut"
                                        type="text"
                                        value={props.rut}
                                        onChange={props.handleChange}
                                />
                                <label htmlFor="rut">Nacionalidad</label>
                                <select value={props.value} className="form-control">
                                        <option>--Selecciona una opción--</option>
                                        <option value="chilena">Chilena</option>
                                        <option value="extranjera">Extranjera</option>
                                </select>
                                <label htmlFor="rut">Fecha de nacimiento</label>
                                <input
                                        className="form-control"
                                        id="birthday"
                                        name="birthday"
                                        type="date"
                                        value={props.birthday}
                                        onChange={props.handleChange}
                                />
                                <label htmlFor="name">Género</label>
                                <select value={props.value} className="form-control">
                                        <option>--Selecciona una opción--</option>
                                        <option value="Femenino">Femenino</option>
                                        <option value="Masculino">Masculino</option>
                                </select>
                                <label htmlFor="name">Previsión</label>
                                <select value={props.value} className="form-control">
                                        <option>--Selecciona una opción--</option>
                                        <option value="Fonasa">FONASA</option>
                                        <option value="Isapre">ISAPRE</option>
                                </select>


                        </div>

                </>
        );
}


export default TemplateRegister;