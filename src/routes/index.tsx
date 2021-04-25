import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Login, Home, Modal } from '../pages';


const Routes: React.FC = () => (
  <Switch>
    <Route path="/login" component={Login} />
    <Route path="/Modal" component = {Modal}/>
    <Route path="/home" component={Home} />
  </Switch>

);

export default Routes;