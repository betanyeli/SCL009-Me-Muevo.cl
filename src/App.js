import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import logo from './image/logo.png'
import { Row, Col, Container } from 'react-bootstrap';
//Templates && Components/
import TemplateInfo from './views/TemplateInfo';
import TemplateLaw from './views/TemplateLaw';
import TemplateGes from './views/TemplateGes'
import TemplateNews from './views/TemplateNews';
import ContainerForm from './views/ContainerForm';
import TemplateWhoWeAre from './views/TemplateWhoWeAre';
import TemplateHome from './views/TemplateHome';
import './App.css';
import Navbarmobile from './components/Navbarmobile';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footermain from './components/Footermain';
class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>


          <header>
            <Container className= "container-header">
              <Row>
              <Col xs ={12} md ={2}>
              <Link to="/"> 
                 <img src={logo} className="logo"
                  alt="Logo de la Fundación">
                 </img></Link>
                 </Col>
              <Col xs ={12} md ={7}>
                  <h3 className="nameFundation">Fundación por la Artritis Reumatoide</h3>
                </Col>

                <Col xs ={12} md ={3}>
                  <a className="" href="telf: +56900000000"><h4 className="contactPhone">Contacto: +56 9 87433259</h4></a>
                  </Col>
              </Row>
            </Container>
          </header>
          <Navbarmobile />
          
          <Switch>
            <Route exact path='/' component={TemplateHome} />
            <Route exact path='/artritis-reumatoide' component={TemplateInfo} />
            <Route exact path='/ley-ricarte-soto' component={TemplateLaw} />
            <Route exact path='/ges' component={TemplateGes} />
            <Route exact path='/noticias' component={TemplateNews} />
            <Route exact path='/registro' component={ContainerForm} />
            <Route exact path='/quienes-somos' component={TemplateWhoWeAre} />
          </Switch>
         
           <Footermain/> 
      </BrowserRouter>
 
     </>
   );
  }
}
export default App;