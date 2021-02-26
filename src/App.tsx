import React from "react";
import { Route, Router, Switch, Link, NavLink } from "react-router-dom";
import { History } from "history";
import { Index, City } from "./pages";

export interface IAppProps {
  history: History;
}

const App: React.SFC<IAppProps> = ({ history }) => (
  <div className="App">
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Index} />
        <Route path="/selectCity" component={City} />
        {/* <Route path="/order" component={Order} /> */}
      </Switch>
    </Router>
  </div>
);

export default App;
