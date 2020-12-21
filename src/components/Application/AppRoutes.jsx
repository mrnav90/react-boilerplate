import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import AppSwitchRouter from './AppSwitchRouter';

export default function AppRoutes({ routes }) {
  return (
    <AppSwitchRouter>
      {routes.map((route, idx) => (
        <Route
          key={idx.toString()}
          path={route.path}
          exact={route.exact}
          render={props => (
            <route.component {...props} route={route} routes={route.routes} />
          )}
        />
      ))}
    </AppSwitchRouter>
  );
}

AppRoutes.propTypes = {
  routes: PropTypes.oneOfType([PropTypes.array]).isRequired,
};
