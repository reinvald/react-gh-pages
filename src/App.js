import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
          <Route
            exact
            path={process.env.PUBLIC_URL + "/"}
            render={() => <About />}
          />
          <Route
            exact
            path={process.env.PUBLIC_URL + "/about"}
            render={() => <About />}
          />
          <Route
            exact
            path={process.env.PUBLIC_URL + "/technical"}
            render={() => <Technical />}
          />
          <Route
            exact
            path={process.env.PUBLIC_URL + "/fun"}
            render={() => <Fun />}
          />
          <Route path={process.env.PUBLIC_URL + "*"} render={() => <About />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
