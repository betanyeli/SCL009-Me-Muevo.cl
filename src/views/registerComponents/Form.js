import React, { Component } from 'react';
//import {Link} from 'react-router-dom'
import UserDetails from './UserDetails';
import PersonalDetails from './PersonalDetails';
// import Confirmation from './Confirm';
// import Success from './Success';
import { db } from '../../data/firebaseInit.js'


class MainForm extends Component {
    constructor(){
        super();
        this.state = {
            step: 1,
            name: '',
            lastname: '',
            phone: '',
            email: '',
            rut: '',
            nationality: '',
            birthdate: '',
            gender: '',
            health: '',
        }
    }


    nextStep = () => {
        const { step } = this.state
        // eslint-disable-next-line
        const { name, lastname, phone, email } = this.state;
        this.setState({
            step : step + 1,
            name: '',
            lastname: '',
            phone: '',
            email: '',
        })

                db.collection("users").add({
                        name: this.state.name,
                        lastname: this.state.lastname,
                        phone: this.state.phone,
                        email: this.state.email,

                })
    }

    prevStep = () => {
        const { step } = this.state
        this.setState({
            step : step - 1
        })
    }

    handleChange = input => event => {
        this.setState({ [input] : event.target.value })
    }
    
    

    render(){
        const {step} = this.state;
        const { name, lastname, phone, email, rut, nationality, birthdate, gender, health } = this.state;
        const values = { name, lastname, phone, email, rut, nationality, birthdate, gender, health };

        
        // eslint-disable-next-line
        switch(step) {
        case 1:
            return <UserDetails 
                    nextStep={this.nextStep} 
                    handleChange = {this.handleChange}
                    values={values}
                    />
        case 2:
            return <PersonalDetails 
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange = {this.handleChange}
                    values={values}
                    />
        // case 3:
        //     return <Confirmation 
        //             nextStep={this.nextStep}
        //             prevStep={this.prevStep}
        //             values={values}
        //             />
        // case 4:
        //     return 
            
        }
    }
}

export default MainForm;