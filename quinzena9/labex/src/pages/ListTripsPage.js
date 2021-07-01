import React from "react";
import { Link } from "react-router-dom";

function ListTripsPage() {
  return (
    <div className="mt-10 lg:mt-32 mx-auto container">
      <h1 className="lg:text-5xl text-2xl text-center f-m-w font-bold">
        Lista de Viagens
      </h1>
      <div className="flex justify-center items-center mt-4">
        <Link to="/">
          <button
            type="submit"
            className="w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-black shadow-md hover:text-black hover:bg-white focus:outline-none focus:ring-2 mr-4"
          >
            <span className="w-full">Voltar</span>
          </button>
        </Link>
        <Link to="/viagens/inscrever">
          <button
            type="submit"
            className="w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-black shadow-md hover:text-black hover:bg-white focus:outline-none focus:ring-2 ml-4"
          >
            <span className="w-full">Inscrever-se</span>
          </button>
        </Link>
      </div>
    </div>
  );
}
export default ListTripsPage;
