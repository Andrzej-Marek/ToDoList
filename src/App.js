import React, { Component } from "react";
import Items from "./Components/layout/Items";
import EditItem from "./Components/layout/EditItem";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Switch>
            <Route exact path="/" component={Items} />
            <Route path="/:id" component={EditItem} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
