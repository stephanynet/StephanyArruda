import React from "react";
import { Link } from "react-router-dom";
import useForm from "../hooks/useForm";

const App = () => {
  const { form, onChange} = useForm({ email: "", password: "" });

  const fazerLogin = (event) => {
    event.preventDefault();
  };

  return (
<div>
  
      <h1>Login</h1>
      <form onSubmit={fazerLogin}>
        <input
          name="email"
          value={form.email}
          onChange={onChange}
          placeholder={"E-mail"}
          required
          type="email"
        />
        <input
          name="password"
          value={form.password}
          onChange={onChange}
          placeholder={"Senha"}
          required
        />

        <button>Fazer Login</button>
      </form>
      <div className="flex justify-center items-center mt-4">
        <Link to="/">
          <button
            type="submit"
            className="w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-black shadow-md hover:text-black hover:bg-white focus:outline-none focus:ring-2 mr-4"
          >
            <span className="w-full">Voltar</span>
          </button>
        </Link>
       </div>
    </div>
  );
}
export default App;
