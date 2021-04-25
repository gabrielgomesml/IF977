import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Login, Home, Modal } from '../pages';
import PrivateRoute from './PrivateRoutes';



const Routes: React.FC = () => (
  <Switch>
    <Route path="/login" component={Login} />
    <PrivateRoute path="/home" component={Home} isPrivate />
  </Switch>

);

export default Routes;