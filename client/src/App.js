import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
import NoMatch from "./pages/NoMatch";
import NewTech from "./pages/NewTech";
import LoggedIn from "./pages/LoggedIn";
import Complete from "./pages/Complete";
import NewCustomer from "./pages/NewCustomer";
import LogIn from "./pages/LogIn";
import NewTicket from "./pages/NewTicket";


const App = () =>
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/NewTech" component={NewTech} />
        <Route exact path="/NewCustomer" component={NewCustomer} />
        <Route exact path="/login" component={LogIn} />
        <Route exact path="/loggedin" component={LoggedIn} />
        <Route exact path="/newticket" component={NewTicket} />
        <Route exact path="/completedform" component={Complete} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>;

export default App;
