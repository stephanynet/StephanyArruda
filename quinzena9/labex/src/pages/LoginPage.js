import React from "react";
import { Link } from "react-router-dom";
import useForm from "../hooks/useForm";
import Logo from "../images/logo.png";

const App = () => {
  const { form, onChange} = useForm({ email: "", password: "" });

  const fazerLogin = (event) => {
    event.preventDefault();
  };

  return (
  <div>
    <center>
    <img src={Logo} />
      <h1>LOGIN</h1>
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
        <button>Fazer Login</button>
      </form>
      </center>
      <div>
         <center>
           <Link to="/">
             <br></br>
          <button>
            <span>Voltar</span>
          </button>
        </Link>
        </center>
       </div>
    </div>
  );
}
export default App;
