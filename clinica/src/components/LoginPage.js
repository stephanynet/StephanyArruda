import React from 'react'
import { Link } from "react-router-dom";
import medico from '../img/medico.jpg'

export default function LoginPage() {
    return (
      <div className='header'>
        <img src={medico} /> 
      <main>
      <form className="form-login">
      <h1>Login</h1>
        <div className="user-login__form-control">
          <label htmlFor="name">Nome:</label>
          <input id="name" type="text" name="name" />
        </div>

        <div className="user-login__form-control">     
          <label htmlFor="number">CPF:</label>
          <input id="cpf" type="number" name="cpf" />
          </div>

        <div className="user-login__form-control">
          <label htmlFor="password">Senha:</label>
          <input id="password" type="password" name="password" /> 
        </div>

        <Link to='/RegisterPage'>
        <button> Acessar </button>
        </Link>
        </form>
        </main>
        </div>
    );
  };

