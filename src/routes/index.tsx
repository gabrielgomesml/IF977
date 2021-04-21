import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Login, Home } from '../pages';


const Routes: React.FC = () => (
  <Switch>
    <Route path="/login" component={Login} />
    <Route path="/home" component={Home} />
  </Switch>

);

export default Routes;