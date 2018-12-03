// react library
import React from 'react';

// third party library
import { Switch, Route, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

// components
import Landing from './landing/Landing';

const history = createBrowserHistory();

/**
 *@desc handles routing
 @returns {object} routes
 */
const AppRouter = () => (
  <Router history={history}>
    <Switch>
      <Route exact path='/' component={Landing} />
    </Switch>
  </Router>
);

export default AppRouter;
