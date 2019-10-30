import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/nav/navItems/home/Home";
import Characters from "./components/nav/navItems/characters/Characters";
import Character from "./components/characters/character/Character";
import NewCharacter from "./components/characters/NewCharacter";
import Navigation from "./components/nav/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/characters" component={Characters} />
        <Route exact path="/characters/new" component={NewCharacter} />
        <Route exact path="/characters/:id" component={Character} />
      </Switch>
    </div>
  );
}

export default App;
