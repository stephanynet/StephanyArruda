import React from "react";
import Logo from "../images/logo.png";
import { Link } from "react-router-dom";

function HomePage() {
  return (
             <div>
               <center>
              <img src={Logo} />
            <center> <Link to="/viagens">
                <button>Ver Viagens</button>
              </Link>
              <Link to="/login">
                <button>Área de Admin</button>
              </Link>
              </center>
              </center>
          </div>
          
  );
}
export default HomePage;
