import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Categories from './components/categories/Categories'
import Category from './components/category/Category'
import Recipe from './components/recipe/Recipe'

function App() {
  return (
    <Router>
        <Switch>
        <Route path="/recipe">
            <Recipe/>
          </Route>
          <Route path="/category">
            <Category/>
          </Route>
          <Route path="/">
            <Categories/>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
