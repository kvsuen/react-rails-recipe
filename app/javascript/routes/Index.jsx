import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home/home.component";
import Recipes from "../components/Recipes/recipes.component";
import Recipe from "../components/Recipes/Recipe/recipe.component";
import NewRecipe from "../components/NewRecipe/new-recipe.component";

export default (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/recipes" exact component={Recipes} />
      <Route path="/recipe/:id" exact component={Recipe} />
      <Route path="/recipe" exact component={NewRecipe} />
    </Switch>
  </Router>
);