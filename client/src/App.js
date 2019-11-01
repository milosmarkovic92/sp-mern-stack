import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/nav/navItems/home/Home";
import Characters from "./components/nav/navItems/characters/Characters";
import Character from "./components/characters/character/Character";
import NewCharacter from "./components/characters/newCharacter/NewCharacter";
import Navigation from "./components/nav/Navigation";
import EditCharacter from "./components/characters/editCharacter/EditCharacter";
import DeleteCharacter from "./components/characters/deleteCharacter/DeleteCharacter";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/characters" component={Characters} />
        <Route exact path="/characters/new" component={NewCharacter} />
        <Route exact path="/characters/:id" component={Character} />
        <Route exact path="/characters/:id/edit" component={EditCharacter} />
        <Route
          exact
          path="/characters/:id/delete"
          component={DeleteCharacter}
        />
      </Switch>
    </div>
  );
}

export default App;
