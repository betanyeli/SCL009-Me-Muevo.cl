import React, { Component } from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import Swal from 'sweetalert2'
import {Link} from 'react-router-dom'
//import { db } from '../data/firebaseInit.js'



class Confirmation extends Component{
    saveAndContinue = (e) => {
        e.preventDefault();
        //this.props.nextStep();
        Swal.fire(
            'Registro Exitoso',
            'Tus datos fueron enviados correctamente',
            'success'
    )
    
    }


    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render(){
        const {values: { name, lastname, phone, email}} = this.props;

        return(
            <div>
                <h2 className="float-center">Finalizar registro</h2>
                <p>Confirma si los datos están correctos</p>
               
                    <ListGroup>
                        
                        <ListGroup.Item>Nombre: {name}</ListGroup.Item>
                    </ListGroup>
                    <ListGroup>
                        
                        <ListGroup.Item>Apellido: {lastname}</ListGroup.Item>
                    </ListGroup>
                    <ListGroup>
                        
                        <ListGroup.Item>
                            Teléfono: {phone}
                        </ListGroup.Item>
                    </ListGroup>
                    <ListGroup>
                       
                        <ListGroup.Item> Correo electrónico: {email} </ListGroup.Item>
                    </ListGroup>



                <Button className="float-left" onClick={this.back}>Atrás</Button>
               
<Button className="float-right" onClick={this.saveAndContinue}><Link to="/">Enviar</Link></Button>
            </div>
        )
    }
}

export default Confirmation;