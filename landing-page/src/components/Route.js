import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Nav from "./Nav";
import Benefits from "./Benefits";
import Form from "./Form";
import Footer from "./Footer";
import GlobalStyles from "./GlobalStyles";
import Hero from "./Hero";
import Locations from "./Locations";

const RouteManager = () => {
  return (
      <BrowserRouter>
      <Switch>
      <Route>
      <Nav />
      <Hero />
      <Locations />
      <Benefits />
      <Form />
      <Footer />
      <GlobalStyles />
      </Route>
      </Switch>
      </BrowserRouter>
  );
};
export default RouteManager;

