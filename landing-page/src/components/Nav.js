import styled from "styled-components";
import { Link, Switch, Route } from "react-router-dom";
import Hero from "./Hero";
import Locations from "./Locations";
import Benefits from "./Benefits";
import Form from "./Form";

const Nav = () => {
  return (
    <MainHeader className="main-head">
      <nav>
        <h1 id="logo">Viagem Perfeita</h1>  
          <ul>
          <Link to='/Hero'> Home </Link>
          </ul>
          <Link to='/Locations'> Sobre </Link>
          <ul>
          <Link to='/Benefits'> Benefícios </Link>
          </ul>
          <Link to='/Form'> Contato </Link>
      </nav>
          <Switch> 
            <Route path="/Hero" component={Hero} />
            <Route path="/Locations" component={Locations} />
            <Route path="/Benefits" component={Benefits} />
            <Route path="Form" component={Form} />
          </Switch>
    </MainHeader>
  );
};

export default Nav;

const MainHeader = styled.h1`
  background: #131c27;
  color: white;
  position: sticky;
  top: 0px;
  z-index: 3;

  a {
    color: white;
    
  }

  nav {
    
    min-height: 10vh;
    display: flex;
    width: 98%;
    margin: auto;
    align-items: center;
    padding: 1rem;

    ul {
      display: flex;
      flex-grow: 1;
      flex-shrink: 5;
      flex-basis: 10rem;
      justify-content: space-around;
      align-items: center;
      list-style: none;
    }

    #logo {
      flex: 1 1 40rem;
      flex-grow: 2;
      flex-shrink: 1;
      flex-basis: 40rem;
      font-family: "Pattaya", sans-serif;
      font-weight: 400;
    }
  }

  @media screen and (max-width: 599px) {
    nav {
      flex-wrap: wrap;
      text-align: center;
    }
    #logo {
      padding: 2rem;
    }
  }
`;


