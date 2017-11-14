import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
import NoMatch from "./pages/NoMatch";
import NewTech from "./pages/NewTech";
import LoggedIn from "./pages/LoggedIn";


const App = () =>
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/NewTech" component={NewTech} />
        <Route exact path="/loggedin" component={LoggedIn} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>;

export default App;
