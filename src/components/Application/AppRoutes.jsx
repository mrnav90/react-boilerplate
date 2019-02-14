import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';

export default class AppRoutes extends Component {
  static propTypes = {
    routes: PropTypes.oneOfType([PropTypes.array]).isRequired,
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { routes } = this.props;
    return (
      <Switch>
        {routes.map(route => (
          <Route
            key={route.toString()}
            path={route.path}
            exact={route.exact}
            render={props => (
              <route.component {...props} route={route} routes={route.routes} />
            )}
          />
        ))}
      </Switch>
    );
  }
}
