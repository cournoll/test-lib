import React, { lazy } from "react";
import { Switch, Route } from "react-router-dom";

const Home = lazy(() => import("./Home"));
const ExampleComponent = lazy(() => import("./ExampleComponent"));

const Routing = (props) => {
  return (
    <Switch>
      <Route exact path={"/"} component={Home} />
      <Route exact path={"/example"} component={ExampleComponent} />
    </Switch>
  );
};

export default Routing;
