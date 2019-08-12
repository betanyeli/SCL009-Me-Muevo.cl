import React from 'react'
import { Link } from 'react-router-dom';
import CarouselHome from '../components/CarouselHome'
import infografiaRicarteSoto from '../image/infografiaRicarteSoto.jpg'
import infografiaGes from '../image/infografiaGes.jpg';
import { Row, Col, Container } from 'react-bootstrap';

const TemplateHome = () => {
    return (
                   <>
                   <section>

                      <CarouselHome/> 
                </section>  

                <section>
                 <Container>
                     <Row>
                         <Col xs={12} md={4}>
<div>
    <img src={infografiaRicarteSoto} alt="" className= "img-bottom_home"/><div><Link to="/ley-ricarte-soto">Ver mas</Link></div>
    </div>
    </Col>
    <Col xs={12} md={4}>
<div>
    <img src={infografiaGes} alt="" className= "img-bottom_home"/>
    <div><Link to="/ges">Ver mas</Link></div>
    </div>
    </Col>
    <Col xs={12} md={4}>
<div>
    <img src={infografiaRicarteSoto} alt="" className= "img-bottom_home"/><div><Link to="/ges">Ver mas</Link></div>
    </div>
    </Col>

</Row>
</Container>
</section>
                </>
    )
}
export default TemplateHome;