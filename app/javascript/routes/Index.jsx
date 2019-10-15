import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home/home.component";
import Recipes from "../components/Recipes/recipes.component";

export default (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/recipes" exact component={Recipes} />
    </Switch>
  </Router>
);