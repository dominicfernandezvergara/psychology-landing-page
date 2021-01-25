import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/header";

import Home from "./pages/home";
import Services from "./pages/services";
import ContactUs from "./pages/contact-us";
import About from "./pages/about/about";
import { appDataText } from "./appDataText/appDataText";
import Team from "./pages/team/team";

function App() {
  // console.log("hola", appDataText.espanol.header.contactUs.path);
  return (
    <Fragment>
      <Router>
        <Header />
        <Switch>
          <Route path={appDataText.espanol.header.home.path}>
            <Home />
          </Route>
          <Route path={appDataText.espanol.header.services.path}>
            <Services />
          </Route>
          <Route path={appDataText.espanol.header.contactUs.path}>
            <ContactUs />
          </Route>
          <Route path={appDataText.espanol.header.aboutUs.path}>
            <About />
          </Route>
          <Route path={appDataText.espanol.header.aboutUs.subcategories.path}>
            <Team />
          </Route>
          <Route path="*">
            <Home />
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
