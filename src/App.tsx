import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from "./routes/Home/Home";


class App extends React.Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={Home} />
        {/*<Route path="/about/" component={About} />*/}
        {/*<Route path="/users/" component={Users} />*/}
      </Router>
    );
  }
}

export default App;
