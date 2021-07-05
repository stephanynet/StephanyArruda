import React from "react";
import Logo from "../images/logo.png";
import { Link } from "react-router-dom";

function ApplicationFormPage() {
  return (
    <div>
    <center>
      <div>
   <img src={Logo} alt="logo-labex" />
        </div>
      <div>
        <div>
          <div>
            <h2>
              INSCREVA-SE PARA UMA VIAGEM
            </h2>
            <form>
              <select>
                <option value="">Escolha uma viagem aqui </option>
                <option value="Marte">Marte</option>
                <option value="Jupter">Jupter</option>
                <option value="Saturno">Saturno</option>
                <option value="Urano">Urano</option>
                <option value="Netuno">Netuno</option>
              </select>
              <br></br>
              <div>
                <label
                  for="nome"
                >
                </label>
                <input
                  id="nome"
                  type="nome"
                  placeholder="Nome"
                />
              </div>
              <div >
                <div >
                  <label
                    for="idade"
                  >
                  </label>
                  <input
                    type="number"
                    name="idade"
                    required
                    min="18"
                    placeholder="Sua idade"
                  />
                </div>
              </div>
              <div >
                <label
                  for="texto"
                >
                </label>
                <input
                  type="texto"
                  placeholder="Escreva a sua motivação"
                />
              </div>
              <div >
                <label
                 for="profissao"
                >
                </label>
                <input
                  type="text"
                  placeholder="Profissão"
                />
              </div>
              <div >
              <br></br>
                <Link to="/viagens">
                  <button
                    type="submit"
                   >
                    <span>Voltar</span>
                  </button>
                </Link>
                <button
                  type="submit"
                  >
                  <span >Enviar</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      </center>
    </div>
  );
}
export default ApplicationFormPage;
