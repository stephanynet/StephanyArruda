import React from 'react'

import { Link } from 'react-router-dom';
import logo2 from '../img/logo2.png'

export default function HomePage() {

    return (
      <>
      <nav>

      </nav>
      <main>
        <div className="container" >
          <img src={logo2} />
        <h2> Selecione seu perfil abaixo </h2>
        <Link to='/LoginPage'>
        <button> Médico(a) </button> 
        <button> Enfermeiro(a) </button>
        </Link>
        </div>
        
      </main>
      </>
    );
  };

