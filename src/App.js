import React, { Component } from "react";
import { Switch, Route, NavLink } from "react-router-dom";

import "./App.css";
import HomePage from "./components/HomePage";
import NotFound from "./components/NotFound";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Ironphones</h1>

          <nav>
            {/* NavLink to the home page should ALWAYS have exact on it */}
            <NavLink exact to="/">
              Home
            </NavLink>
          </nav>
        </header>

        <Switch>
          {/* home page route should ALWAYS have exact on it */}
          <Route exact path="/" component={HomePage} />

          {/* 404 route should go LAST */}
          <Route component={NotFound} />
        </Switch>

        <footer>
          <p>Made with 📱 at Ironhack</p>
        </footer>
      </div>
    );
  }
}

export default App;
