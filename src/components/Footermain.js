import React from "react";
import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../image/logo.png'
const Footermain = () => {
  return (
    <footer className="footermain">
      <Container>
        <Row>
          <Col xs={12} md={4}>
          <Link to="/"> 
                 <img src={logo} className="logo"
                  alt="Logo de la Fundación">
                 </img></Link>
          </Col>
          <Col xs={12} md={4}>
            <p className="rrss">
              <strong>© Fundación Me Muevo 2014 </strong>
            </p>
            <p className="rrss">
              RUT: 65.088.095-1
            </p>
            <p className="rrss">
              Providencia, Santiago de Chile
                 </p>
          </Col>
          <Col xs={12} md={4}>
            <a className="rrss" href="mailto:comunicaciones@memuevo.cl" title="Enviar correo">comunicaciones@memuevo.cl</a>
            <p className="rrss">
              Contactanos: <a href="tel: +56987433259" title="Teléfono">+56987433259</a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>

  );
}
export default Footermain;