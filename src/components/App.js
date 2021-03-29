import React from "react";
import "./App.css";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Nav from "./Nav";
import About from "./About";
import Home from "./Home";

function App() {
  return (
    <div className="  vh-100 d-flex flex-column">
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
