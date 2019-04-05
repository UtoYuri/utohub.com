import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from "./routes/Home/Home";
import ErrorPage from "./routes/ErrorPage/ErrorPage";


class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route component={ErrorPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
