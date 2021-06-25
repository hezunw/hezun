import React, { Fragment } from "react";
import Login from "./pages/login";
import Home from "./pages/home";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <Fragment>
      <HashRouter>
        <Switch>
          <Route path="/login" component={Login}></Route>
          <Route path="/home" component={Home}></Route>
          <Route exact path="/" component={Home}></Route>
          <Redirect to={"/home"}></Redirect>
        </Switch>
      </HashRouter>
    </Fragment>
  );
}

export default App;
