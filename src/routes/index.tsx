import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Login, Modal } from '../pages';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/login" component={Login} />
    <Route path="/Modal" component = {Modal}/>
  </Switch>
);

export default Routes;
