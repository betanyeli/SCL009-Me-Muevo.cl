import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import infografiaGes from '../image/infografiaGes.jpg';



const TemplateGes = () => {

        return (

                <section>
                        <Container>
                                <Row>
                                        <Col className="marginInitial">
                                                <h4>GES/Auge</h4>
                                        </Col>
                                        <Col className="marginInitial" xs={12} md={12} >
                                                <img src={infografiaGes} className="d-inline-block align-top" alt="infografia Ges"></img>

                                        </Col>
                                </Row>
                        </Container>
                </section>

        )

}

export default TemplateGes;



