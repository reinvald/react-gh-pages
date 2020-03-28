import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Fun from "./Fun";
import About from "./About";
import Technical from "./Technical";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" render={() => <About />} />
          <Route exact path="/technical" render={() => <Technical />} />
          <Route exact path="/fun" render={() => <Fun />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
