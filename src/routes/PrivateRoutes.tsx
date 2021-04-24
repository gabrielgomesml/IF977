import React from 'react';
import {
  Route as ReactDOMRoute,
  RouteProps as ReactRouteProps,
  Redirect,
} from 'react-router-dom';

interface RouteProps extends ReactRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}
const PrivateRoute: React.FC<RouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const token = localStorage.getItem('access_token');

  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        return isPrivate === !!token ? (
          <>
            <Component />
          </>
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default PrivateRoute;