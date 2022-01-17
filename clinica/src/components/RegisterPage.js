import React from 'react'
import { Link } from "react-router-dom";
import atendimento from '../img/atendimento.jpg'

export default function RegisterPage() {
    return (
      <div className="header">
        <img src={atendimento} />
     
      <div className="user-login">
      <br></br>
      <form className="form-register">
      <h3>Cadastro do Paciente</h3>
        <div className="user-login__form-control">
          <label htmlFor="name">Nome:</label>
          <input id="name" type="text" name="name" />
        </div>

        <div className="user-login__form-control">
          <label htmlFor="number">CPF:</label>
          <input id="cpf" type="number" name="cpf" />
        </div>

        <div className="user-login__form-control">
          <label htmlFor="number">Data de Nascimento:</label>
          <input id="birthdate" type="number" name="birthdate" /> 
        </div>

        <div className="user-login__form-control">
          <label htmlFor="number">Peso:</label>
          <input id="weigth" type="number" name="weigth" /> 
        </div>

        <div className="user-login__form-control">
          <label htmlFor="number">Altura:</label>
          <input id="heigth" type="number" name="heigth" /> 
        </div>
        <Link to='/HomePage'>
        <button> Cadastrar </button>
        </Link>
        </form>
        </div>
      </div>
    );
  };

