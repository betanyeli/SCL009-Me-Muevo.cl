import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Form from './registerComponents/Form'

class ContainerForm extends Component{
    render(){
        return(
            
              
                <Container>
                    <Row className="register bgDiv">
                        <Col className="pt-3" xs={12} sm={12} md={8} lg={6}>
                        
                <Form />

                        </Col>
                    </Row>
                </Container>


                
            
        )
    }
}

export default ContainerForm;