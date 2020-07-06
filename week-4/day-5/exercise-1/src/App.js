import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "components/Header/Header";

import Home from "pages/Home/Home";
import BMICalculator from "pages/BMICalculator/BMICal";
import CatCal from "pages/CatCalculator/CatCal";
import TextTransform from "pages/TextTransform/TextTransform";
import NotMatch from "pages/NotMatch/NotMatch";

import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/bmical">
          <BMICalculator />
        </Route>
        <Route exact path="/catcal">
          <CatCal />
        </Route>
        <Route exact path="/text-trans">
          <TextTransform />
        </Route>
        <Route path="*">
          <NotMatch />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
