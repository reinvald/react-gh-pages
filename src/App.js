import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Fun from "./Fun";
import About from "./About";
import Technical from "./Technical";
import "bootstrap/dist/css/bootstrap.min.css";
import Landing from "./Landing";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" render={() => <Landing />} />
          <Route exact path="/about" render={() => <About />} />
          <Route exact path="/technical" render={() => <Technical />} />
          <Route exact path="/fun" render={() => <Fun />} />
          <Route path="*" render={() => <About />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
