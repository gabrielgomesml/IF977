import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Login } from '../pages/index'

const Routes = () => {
    <Router>
        <Suspense fallback={<div></div>}>
            <Switch>
                <Route path={'./login'} component={Login} />
            </Switch>
        </Suspense>
    </Router>
}