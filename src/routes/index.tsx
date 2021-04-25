import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Login, Home, Template } from '../pages';
import PrivateRoute from './PrivateRoutes';



const Routes: React.FC = () => (
  <Switch>
    <Route path="/login" component={Login} />
    <PrivateRoute path="/home" component={Home} isPrivate />
    <Route path="/template" component={Template} />
  </Switch>

);

export default Routes;