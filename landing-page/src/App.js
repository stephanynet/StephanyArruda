import Hero from "./components/Hero";
import Locations from "./components/Locations";
import Benefits from "./components/Benefits";
import Form from "./components/Form";
import Route from "./components/Route";
import { BrowserRouter, Switch} from "react-router-dom";

const App = () => {
  return (
    
    <div>
      <BrowserRouter>
     <Switch>
        <Route path='/' component={Hero} />
        <Route path='/Form' component={Form} />
        <Route path='/Benefits' component={Benefits} />
        <Route path='/Hero' component={Hero} />
        <Route path='/Locations' component={Locations} /> 
      </Switch>
      </BrowserRouter>
 
    </div>
  );
};

export default App;
