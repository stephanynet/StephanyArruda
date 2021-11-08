import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Nav from "./Nav";
import Contato from "./Contato";
import Home from "./Home";
import Sobre from "./Sobre";

const RouteManager = () => {
  return (
      <BrowserRouter>
      <Switch>
      <Route>
      <Nav />
      <Home />
      <Sobre />
      <Contato />
      </Route>
      </Switch>
      </BrowserRouter>
  );
};
export default RouteManager;

