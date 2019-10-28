import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Nav from "./components/nav/Nav";
import Home from "./components/nav/navItems/Home";
import Characters from "./components/nav/navItems/Characters";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/characters" component={Characters} />
      </Switch>
    </div>
  );
}

export default App;
