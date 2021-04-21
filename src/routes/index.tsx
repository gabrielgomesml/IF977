import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Login } from '../pages';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/login" component={Login} />
  </Switch>
);

export default Routes;
