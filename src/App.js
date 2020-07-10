import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Fun from "./Fun";
import About from "./About";
import Technical from "./Technical";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" render={() => <About />} />
            <Route exact path="/about" render={() => <About />} />
            <Route exact path="/technical" render={() => <Technical />} />
            <Route exact path="/fun" render={() => <Fun />} />
            <Route path="*" render={() => <About />} />
          </Switch>
        </Router>
      </div>
    );
  } else {
    console.log("cruck");
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route
              exact
              path="https://reinvald.com/"
              render={() => <About />}
            />
            <Route
              exact
              path="https://reinvald.com/about"
              render={() => <About />}
            />
            <Route
              exact
              path="https://reinvald.com/technical"
              render={() => <Technical />}
            />
            <Route
              exact
              path="https://reinvald.com/fun"
              render={() => <Fun />}
            />
            <Route path="*" render={() => <About />} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
