import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/header";

import Home from "./pages/home";
import Services from "./pages/services";
import Contact from "./pages/contact-us";

function App() {
  return (
    <Fragment>
      <Router>
        <Header />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/contact-us">
            <Contact />
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
