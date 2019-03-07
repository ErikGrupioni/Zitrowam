import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Login from './pages/Login';
import ztw from './pages/ztw';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/ztw" component={ztw} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
