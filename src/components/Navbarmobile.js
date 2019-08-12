import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
let timer = null;
class Navbarmobile extends React.Component {

  state = { redirectToReferrer: false, path: '/' };

  toNews(path) {
    timer = setTimeout(() => {
      this.setState({ redirectToReferrer: true, path: path });
    }, 500);

  }

  cancelTimer() {
    clearTimeout(timer);
  }

  render() {
    let { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      this.setState({ redirectToReferrer: false });
      return <Redirect to={this.state.path} push={true} />;
    }

    return (
      <Navbar className="bgNav" expand="lg">
        <Navbar.Brand>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav onMouseEnter={() => this.toNews('/quienes-somos')} onMouseLeave={() => this.cancelTimer()} ><Link to="/quienes-somos">Nosotros</Link></Nav>
            <Nav onMouseEnter={() => this.toNews('/artritis-reumatoide')} onMouseLeave={() => this.cancelTimer()}><Link to="/artritis-reumatoide">Artritis Reumatoide</Link></Nav>
            <Nav onMouseEnter={() => this.toNews('/ley-ricarte-soto')} onMouseLeave={() => this.cancelTimer()}><Link to="/ley-ricarte-soto">Ley Ricarte Soto</Link></Nav>
            <Nav onMouseEnter={() => this.toNews('/ges')} onMouseLeave={() => this.cancelTimer()}><Link to="/ges">Ges/Auge</Link></Nav>
            <Nav onMouseEnter={() => this.toNews('/registro')} onMouseLeave={() => this.cancelTimer()}><Link to="/registro">Registro de Pacientes</Link></Nav>
            <Nav onMouseEnter={() => this.toNews('/noticias')} onMouseLeave={() => this.cancelTimer()}><Link to="/noticias">Noticias y Eventos</Link></Nav>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

    )
  }
}
export default Navbarmobile;
