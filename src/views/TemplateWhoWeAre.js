//================TemplateWhoWeAre.js=========================
import React from 'react';
import { Redirect } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Component } from 'react'
import Modals from '../components/Modals';
import employes from './employes.json';

let timer = null;

class TemplateWhoWheAre extends Component {
        constructor(props) {
                super(props);
                this.state = {
                        dataEmployes: employes.Employes

                }
        }

        state = { redirectToReferrer: false, path: '/quienes-somos' };

        toNews(path) {
                timer = setTimeout(() => {
                        this.setState({ redirectToReferrer: true, path: path });
                }, 700);
        }

        cancelTimer() {
                clearTimeout(timer);
        }


        cards() {
                return this.state.dataEmployes.map((element, index) => {
                        return <div >
                                <Card className="cards-employes" style={{ width: '10rem' }} >
                                        <Card.Img variant="top border-radius-50px" src={element.img} className="cards-img" />
                                        <Card.Body className="pl-2">
                                                <Card.Title>
                                                        <h6 className="card-link center">{element.name}</h6>
                                                </Card.Title>
                                                <Modals employes={element} />
                                        </Card.Body>
                                </Card>
                        </div>
                })
        }

        render() {
                // const [modalShow, setModalShow] = useState(false);
                let { redirectToReferrer } = this.state;
                if (redirectToReferrer) {
                        this.setState({ redirectToReferrer: false });
                        return <Redirect to={this.state.path} push={true} />;
                }

                return (
                        <>
                                <Container>
                                        <Row>
                                                <Col xs={12} md={12} lg={5} className="bgDiv marginInitial">
                                                        <div className="pt-3">
                                                                <h3>¿Quiénes Somos?</h3>
                                                                <p>     Me Muevo es una fundación sin fines de lucro que congrega a personas afectadas,
                                                                        familiares y amigos de pacientes con Artritis Reumatoide. Su misión es incidir
                                                                        en políticas públicas y promover prácticas orientadas a mejorar la calidad de vida
                                                                        de quienes viven con Artritis Reumatoide, a través del desarrollo y generación de
                                                                        conocimiento, educación  y participación ciudadana. Como parte de sus objetivos
                                                                        fundacionales, la fundación se propone organizar cada mes de Octubre una campaña
                                                                        de awareness con el fin de informar y educar acerca de la enfermedad a la sociedad
                                                                        a la sociedad chilena.
                                                                </p>
                                                                <h4>Misión</h4>
                                                                <p>
                                                                        Incidir en políticas públicas y promover prácticas orientadas a mejorar la calidad de vida
                                                                        de quienes viven con Artritis Reumatoide, a través del desarrollo y generación de conocimiento,
                                                                        educación y participación ciudadana.
                                                                </p>
                                                                <h4>Visión</h4>
                                                                <p>
                                                                        Que no exista más discapacidad por artritis reumatoide en Chile.
                                                                </p>
                                                        </div>
                                                </Col>
                                                <Col xs={12} md={12} lg={7}>

                                                        <div className="cards-employs">
                                                                <Row>{this.cards()}</Row>
                                                        </div>

                                                </Col>
                                        </Row>
                                </Container>
                        </>
                )
        }
}

export default TemplateWhoWheAre;
