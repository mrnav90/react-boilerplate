import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isAuthenticated } from 'utils/cookie';
import AppRoutes from './AppRoutes';

export default class Application extends Component {
  static contextTypes = {
    router: PropTypes.oneOfType([PropTypes.object]),
  };

  static propTypes = {
    route: PropTypes.oneOfType([PropTypes.object]).isRequired,
  };

  constructor(props) {
    super(props);
    if (isAuthenticated()) {
      // do something
    }
  }

  render() {
    const { route } = this.props;
    return (
      <AppRoutes routes={route.routes} />
    );
  }
}
