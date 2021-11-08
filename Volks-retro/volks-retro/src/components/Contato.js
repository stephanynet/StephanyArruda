import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import fuscaParteInterior2 from "../img/fuscaParteInterior2.jpg";
import useForm from "./useForm"
import { Button } from 'react-bootstrap'

const Form = () => {
  const { form, onChange} = useForm({ email: "", password: "" });

  const fazerLogin = (event) => {
    event.preventDefault();
  };
  return (
    <StyledContact id="contact">
      <StyledFormWrapper>
        <h3>Contate-nos</h3>
         <form onSubmit={fazerLogin}>
        <input
          name="email"
          value={form.email}
          onChange={onChange}
          placeholder={"E-mail"}
          required
          type="email"
        />
        </form>
       
        <form>
        <input
          name="message"
          onChange={onChange}
          placeholder={"Mensagem"}
          required
        />
        <br></br>
        <br></br>
        <Link to="/"></Link>
        <Button>Enviar</Button>
        <Link/>
      </form>
      </StyledFormWrapper>
      </StyledContact>

      
    
  );
};

export default Form;

const StyledContact = styled.section`
  min-height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5), transparent), url(${fuscaParteInterior2});
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledFormWrapper = styled.div`
  background: rgba(19, 28, 39, 0.8);
  width: 30%;
  color: white;
  border-radius: 20px;

   {
    text-align: center;
    padding: 2rem;
  }

  name {
    padding: 0.1rem;
    text-align: center;
  }

  label {
    margin: 0rem 0.5rem;
  }

  input {
    padding: 0.0rem 0.0rem;
  }

  @media screen and (max-width: 200px) {
    width: 100%;
  }
`;


