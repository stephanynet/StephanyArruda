import React from "react";
import { Link } from "react-router-dom";

function ListTripsPage() {
  return (
    <div className="mt-10 lg:mt-32 mx-auto container">
      <center>
        <h1 className="lg:text-5xl text-2xl text-center f-m-w font-bold">
        LISTA DE VIAGENS
        <br></br>
      </h1>
      </center>
      <div>
            <h2>
              Marte
            </h2>
            <p>O quarto planeta a partir do Sol, o segundo menor do Sistema Solar. Batizado em homenagem ao deus romano da guerra, 
            como o "Planeta Vermelho".
            </p>
            <h2>
              Jupter
            </h2>
            <p>O maior planeta do Sistema Solar, tanto em diâmetro quanto em massa, e é o quinto mais próximo do Sol.
            </p>
            <h2>
              Saturno
            </h2>
            <p>O segundo maior planeta do nosso sistema solar, tem um diâmetro nove vezes maior que o da Terra e é composto, em maior parte, por hidrogênio.
            </p>
            <h2>
              Urano
            </h2>
            <p>Terceiro maior planeta do sistema solar e sétimo planeta a partir do sol, ele é gasoso que apresenta médias de temperatura de -185°C
            </p>
            <h2>
              Netuno
            </h2>
            <p> O mais distante do sol e o quarto maior em tamanho,um planeta gasoso, formado por hidrogênio, hélio, amônio, metano e água.
            </p>
            
      <div>
        <center>
          <Link to="/">
          <button>
            <span className="w-full">Voltar</span>
          </button>
        </Link>
        <Link to="/viagens/inscrever">
          <button>
            <span className="w-full">Inscrever-se</span>
          </button>
        </Link>
        </center>
     </div>
    </div>
   </div>

  );
}
export default ListTripsPage;
