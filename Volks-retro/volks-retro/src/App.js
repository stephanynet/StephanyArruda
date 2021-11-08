import Home from "./components/Home";
import Sobre from "./components/Sobre";
import Contato from "./components/Contato";
import Route from "./components/Route";
import { BrowserRouter, Switch} from "react-router-dom";

const App = () => {
  return (
    
    <div className="App">
      <BrowserRouter>
     <Switch>
        <Route path='/' component={Home} />
        <Route path='/Contato' component={Contato} />
        <Route path='/Home' component={Home} />
        <Route path='/Sobre' component={Sobre} /> 
      </Switch>
      </BrowserRouter>
 
    </div>
  );
};

export default App;
