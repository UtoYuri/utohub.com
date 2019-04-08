import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from "./routes/Home/Home";
import ErrorPage from "./routes/ErrorPage/ErrorPage";
import VideoPlayer from "./routes/VideoPlayer/VideoPlayer";


class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={ Home } />
          <Route path="/player" exact component={ VideoPlayer } />
          <Route component={ ErrorPage } />
        </Switch>
      </Router>
    );
  }
}

export default App;
