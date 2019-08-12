import React, { useState } from 'react';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';

let timer;

function Modals(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const toModal = () => {
    timer = setTimeout(() => {
      handleShow()
    }, 700);
  }

  const cancelTimer = () => {
    clearTimeout(timer);
  }

  const closeModal = () => {
    timer = setTimeout(() => {
      handleClose()
    }, 700);
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow} onMouseEnter={toModal} onMouseLeave={cancelTimer}>
        Ver detalles
      </Button>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header
        // </Modal>closeButton
        >
          <Modal.Title>
            {props.employes.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col xs={12} md={12} lg={4} className="center">
                <img src={props.employes.img} style={{ width: '12rem' }} className="center" alt="foto de empleado"></img>
                <h6 className="center">{props.employes.title}</h6>
              </Col>
              <Col xs={12} md={12} lg={8}>
                <p>{props.employes.description}</p>
              </Col>
            </Row>

            <Row>
              <Col xs={12} md={12} lg={12}>
                
                <p>{props.employes.cv}</p>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} onMouseEnter={closeModal} onMouseLeave={cancelTimer}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Modals;
