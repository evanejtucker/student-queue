import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Queue from "./pages/Queue";
import Profile from "./pages/Profile";
import Auth from "./pages/Auth";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Queue} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/login" component={() => <Auth action="login" />} />
        <Route exact path="/signup" component={() => <Auth action="signup" />} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
