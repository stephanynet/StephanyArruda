import TelaInicial from "./Components/TelaInicial";
import "./styles.css";

export default function App() {
  const testar = () => {
    console.log("ok")
  }
  return (
    <div className="App">
      <TelaInicial
      
      funcao = {testar}
      />
    </div>
  );
}
