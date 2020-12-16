import { Route, Redirect, Switch } from "react-router-dom";
import React, { Component } from "react";
import MainNav from "./components/common/mainNav";
import Covid from "./components/covid";
import NotFound from "./components/notFound";
import Symptoms from "./components/symptoms";
import ExistingConditions from "./components/common/existingConditions";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <MainNav />
        <main className="container">
          <Switch>
            <Route path="/symptoms" component={Symptoms} />
            <Route path="/existingConditions" component={ExistingConditions} />
            <Route path="/covid" component={Covid} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/covid" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
