import React from "react";
import { Row, Col, Container } from 'react-bootstrap';


const Footermain = () => {
  return (
    <footer className="footermain">
      <Container>
        <Row>


        <Col xs={12} md={6}>
            <p className="rrss">
              <strong>© Fundación Me Muevo 2014 </strong>
            </p>
            <h2>
              <a href="https://www.memuevo.cl" alt="Fundación Me Muevo"></a>
            </h2>

            <p className="rrss">
              RUT: 65.088.095-1
                 </p>
<p className="rrss">
              Providencia, Santiago de Chile
            </p>
            

          </Col>
          <Col xs={12} md={6}>
          <p className="rrss">
              Contáctanos: <a href="tel: +56987433259" title="Teléfono">+56987433259</a>
            </p>
            <a className="rrss" href="mailto:comunicaciones@memuevo.cl" title="Enviar correo">comunicaciones@memuevo.cl</a>

           
            <div className="rrss">
              <span> Síguenos en:</span>
              <a target='_blank' href="https://www.facebook.com/memuevo.cl"><img className="icon" src="https://www.pngrepo.com/png/13643/170/facebook.png" alt="logo Facebook" /></a>
              <a target='_blank' href="https://www.twitter.com/memuevoCl"><img className="icon" src="http://www.pngall.com/wp-content/uploads/2016/07/Twitter-Download-PNG.png" alt="logo Twitter" /></a>
              <a target='_blank' href="https://www.youtube.com/channel/UCyl9QdUUFMCDh0HARVzvvwg"><img className="icon" src="https://mondorent.com/wp-content/uploads/2016/03/youtube-logo-icon-2014-300x295.png" alt="logo youtube" /></a>

            </div>
          </Col>
        </Row>
      </Container>
    </footer>

  );
}
export default Footermain;