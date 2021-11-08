import { Link, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Sobre from "./Sobre";
import Contato from "./Contato";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, NavItem, NavLink} from 'react-bootstrap'

const Nav = () => {
  return (
    <header className="header">
      <h1 id="logo" >
          <cite title="font-family: 'Cormorant Garamond', serif">Volks Retrô </cite>
       </h1>
      <Navbar className="navbar-brand">
          <ul>
          <Link to='/Home'> Home </Link>
          </ul>
          <ul>
          <Link to='/Sobre'> Sobre </Link>
          </ul>
          <ul>
          <Link to='/Contato'> Contato </Link>
          </ul>
      </Navbar>
      <Nav>
      <Nav.Item>
         <Nav.Link eventKey="/Home">Home</Nav.Link>
         </Nav.Item> 
      </Nav>  
    </header>
  );
};

export default Nav;

