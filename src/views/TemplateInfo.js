import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import infoDesktop from '../image/infoDesktop.png';
const TemplateInfo = () => {

        return (
                <div>
                        <section>
                                <Container>
                                        <Row>
                                                <Col className="marginInitial">
                                                        <h4>Artritis Reumatoide</h4>
                                                </Col>
                                                <Col xs={12} md={12} className="marginInitial">
                                                        <img src={infoDesktop} className="imgAr" alt="Infografía de la Enfermedad" />
                                                </Col>
                                        </Row>
                                </Container>
                        </section>
                </div>
        )

}
export default TemplateInfo;
