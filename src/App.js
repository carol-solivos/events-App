import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Grid, Row } from 'react-bootstrap';
import Home from './Components/Home/Home';
import SignIn from './Components/SignIn'
// import EventsAll from './Components/EventsAll.js'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import AddEvent from './Components/Addevent/Addevent';
import './App.css';
import EventView1 from './Components/EventView/EventView1'

const App = () => (
  <Router>
    <div>
      <Navbar collapseOnSelect fixedTop className="topNav">
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">EventsApp</Link>
          </Navbar.Brand>
          <Nav pullRight className="nav-user">
            <NavItem eventKey={6} href="#">
              <Link to="/addevent"><i class="far fa-plus-square"></i></Link>
            </NavItem>
            <NavItem eventKey={1} href="#">
              <Link to="/registrarse"><i class="fas fa-sign-in-alt"></i></Link>
            </NavItem>
            <NavItem eventKey={2} href="#">
              <Link to="/tus-eventos"><i class="fas fa-user"></i></Link>
            </NavItem>
          </Nav>
        </Navbar.Header>       
          
      </Navbar>

      <div className="space"></div>

      <Route exact path="/" component={Home} />
      <Route path="/registrarse" component={Registrarse} />
      <Route path="/tus-eventos" component={EventView1} />
      <Route path="/quienes-somos" component={QuienesSomos} />
      <Route path="/contacto" component={Contacto} />
      <Route path="/ayuda" component={Ayuda} />
      <Route path="/temas" component={Temas} />
      <Route path="/blog" component={Blog} />
      <Route path="/addevent" component={AddEvent} />

      <Navbar collapseOnSelect fixedBottom className="footer">   
          <Nav className="nav-items">
            <NavItem eventKey={1} href="#">
              <Link to="/quienes-somos">Somos</Link>
            </NavItem>
            <NavItem eventKey={2} href="#">
              <Link to="/contacto">Contacto</Link>
            </NavItem>
            <NavItem eventKey={3} href="#">
              <Link to="/ayuda">Ayuda</Link>
            </NavItem>
            <NavItem eventKey={4} href="#">
              <Link to="/temas">Temas</Link>
            </NavItem>
            <NavItem eventKey={5} href="#">
              <Link to="/blog">Blog</Link>
            </NavItem>
          </Nav>
      </Navbar>
    </div>
  </Router>

);

const Registrarse = () => (
  <div className="app">
    <h2>Registrarse</h2>
  </div>
);

const IniciarSesion = () => (
  <div className="app">
    <h2>Iniciar Sesion</h2>
  </div>
);

const QuienesSomos = () => (
  <div className="app">
    <h2>Quienes Somos</h2>
  </div>
);

const Contacto = () => (
  <div className="app">
    <h2>Contacto</h2>
  </div>
);

const Ayuda = () => (
  <div className="app">
    <h2>Ayuda</h2>
  </div>
);

const Temas = () => (
  <div className="app">
    <h2>Temas</h2>
  </div>
);

const Blog = () => (
  <div className="app">
    <h2>Blog</h2>
  </div>
);


/*class App extends Component {
  render() {
    return (
        <Grid fluid className="container-app">
          <Home />
          <AddEvent />
        </Grid>
    );
  }
}*/

export default App;

// <Navbar.Collapse>        
//           <Nav pullRight>
//             <NavItem eventKey={1} href="#">
//               <Link to="/about">Registrarse</Link>
//             </NavItem>
//             <NavItem eventKey={2} href="#">
//               <Link to="/topics">Iniciar sesión</Link>
//             </NavItem>
//           </Nav>
//         </Navbar.Collapse>