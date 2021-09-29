import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import mountain from "../img/contact-mountain.png";
import useForm from "./useForm"

const Form = () => {
  const { form, onChange} = useForm({ email: "", password: "" });

  const fazerLogin = (event) => {
    event.preventDefault();
  };
  return (
    <StyledContact id="contact">
      <StyledFormWrapper className="form-wrapper">
        <header className="form-head">
          <h2>Contate-nos</h2>
        </header>
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
          name="password"
          value={form.password}
          onChange={onChange}
          placeholder={"Senha"}
          required
        />
        <br></br>
        <br></br>
        <Link to="/"></Link>
        <button>Enviar</button>
        <Link/>
      </form>
      </StyledFormWrapper>
      </StyledContact>

      
    
  );
};

export default Form;

const StyledContact = styled.section`
  min-height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5), transparent), url(${mountain});
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledFormWrapper = styled.div`
  background: rgba(19, 28, 39, 0.8);
  width: 50%;
  color: white;
  border-radius: 20px;

   {
    text-align: center;
    padding: 5rem;
  }

  name {
    padding: 3rem;
    text-align: center;
  }

  label {
    margin: 0rem 3rem;
  }

  input {
    padding: 1rem 3rem;
  }

  @media screen and (max-width: 599px) {
    width: 100%;
  }
`;

const button = styled.button`
  width: 100%;
  padding: 2rem;
  margin-top: 8rem;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  background: #4c6e97;
  border: none;
  color: white;
  font-size: 1.8rem;
  cursor: pointer;
  transition: background 0.5s ease-in-out 0.25s;

  :hover {
    background: #27394e;
  }
`;
