import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import logo from './image/logo.png'
//Templates && Components/
import TemplateInfo from './views/TemplateInfo';
import TemplateLaw from './views/TemplateLaw';
import TemplateGes from './views/TemplateGes'
import TemplateNews from './views/TemplateNews';
import TemplateRegister from './views/TemplateRegister';
import TemplateWhoWeAre from './views/TemplateWhoWeAre';
import TemplateHome from './views/TemplateHome';
import './App.css';
import Navbarmobile from './components/Navbarmobile';
import 'bootstrap/dist/css/bootstrap.min.css';
//import NewRegister from './views/newRegister';
class App extends Component {
 render() {
   return (
     <>
       <BrowserRouter>
         <div >
           {/* <Row> */}
           <header expand="lg" className="row">
             <div className="col-2">
               <Link to= {process.env.PUBLIC_URL + '/'}>
                 <img src={logo} 
                   className="d-inline-block align-top m-2"    style= {{width: '100px'}} alt="Logo de la Fundación">
                 </img></Link>
             </div>
             <div className="col-sm-7 col-md-7 col-lg-7" style = {{top:'14px'}}>
               <h3 className="mt-3">Fundación por la Artritis Reumatoide</h3>
             </div>
             <div className="col-sm-3 col-md-3 col-lg-3" style = {{top:'14px'}}>
               <a className="" href="telf: +56900000000"><h4 className="mt-3 phone">Contacto: +56 9 0000 0000</h4></a>
             </div>
           </header>
           <Navbarmobile />
           {/* <Col xs={12} md={9}> */}
           <Switch>
             <Route exact path= {process.env.PUBLIC_URL + '/'} component={TemplateHome} />
             <Route exact path='/artritis-reumatoide' component={TemplateInfo} />
             <Route exact path='/ley-ricarte-soto' component={TemplateLaw} />
             <Route exact path='/ges' component={TemplateGes} />
             <Route exact path='/noticias' component={TemplateNews} />
             <Route exact path='/registro' component={TemplateRegister} />
             <Route exact path='/quienes-somos' component={TemplateWhoWeAre} />
           </Switch>
           {/* </Col> */}
           {/* </Row> */}
         </div>
       </BrowserRouter>
     </>
   );
 }
}
export default App;