// react library
import React from 'react';

// third party library
import { Switch, Route, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

// components
import Landing from './landing/Landing';
import Login from './login/Login';
import Signup from './signup/Signup';
import Entries from './entries/Entries';

const history = createBrowserHistory();

/**
 *@desc handles routing
 @returns {object} routes
 */
const AppRouter = () => (
  <Router history={history}>
    <Switch>
      <Route exact path='/' component={Landing} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/signup' component={Signup} />
      <Route exact path='/entries' component={Entries} />
    </Switch>
  </Router>
);

export default AppRouter;
