import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
/*Templates && Components*/
import TemplateInfo from './views/TemplateInfo';
import TemplateLaw from './views/TemplateLaw';
import TemplateNews from './views/TemplateNews';
import TemplateRegister from './views/TemplateRegister';
import TemplateWhoWeAre from './views/TemplateWhoWeAre';
import TemplateHome from './views/TemplateHome';
//import Navbar from './components/Navbar'
import './App.css';


class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>

          {/* <header>

            <nav className="navbar navbar-light bg-light navbar-expand-lg ">
              <a className="navbar-brand" href>


              </a>
            </nav>
          </header> */}
          <div className="App row">
            <div className="sidebar col-sm-12 col-md-3" >
              <div className="logo">
                <Link to="/"><img src="http://www.memuevo.cl/wp-content/themes/newmemuevo/img/logo.png" width="90" height="70" className="d-inline-block align-top" alt="" /></Link>
              </div>
              <div class="pos-f-t">
  <div class="collapse" id="navbarToggleExternalContent">
    <div class="bg-dark p-4">
      <h5 class="text-white h4">Collapsed content</h5>
      <span class="text-muted">Toggleable via the navbar brand.</span>
    </div>
  </div>
  <nav class="navbar navbar-dark bg-dark">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <ul className="list-group" >
                <li className="list-group-item"><Link to="/artritis-reumatoide">Artritis reumatoide</Link></li>
                <li className="list-group-item"><Link to="/ley-ricarte-soto">Ley Ricarte Soto</Link></li>
                <li className="list-group-item"><Link to="/noticias">Noticias</Link></li>
                <li className="list-group-item"><Link to="/registro">Registro de Pacientes</Link></li>
                <li className="list-group-item"><Link to="/quienes-somos">Quienes Somos</Link></li>



              </ul>
  </nav>

</div> 

            </div>
            <div className="content col-sm-12 col-md-9">
              <Switch>
                <Route exact path='/' component={TemplateHome} />
                <Route exact path='/artritis-reumatoide' component={TemplateInfo} />
                <Route exact path='/ley-ricarte-soto' component={TemplateLaw} />
                <Route exact path='/noticias' component={TemplateNews} />
                <Route exact path='/registro' component={TemplateRegister} />
                <Route exact path='/quienes-somos' component={TemplateWhoWeAre} />
              </Switch>

            </div>

          </div>

        </BrowserRouter>
      </>
    );

  }
}


export default App;
