import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isAuthenticated } from 'utils/cookie';
import AppRoutes from './AppRoutes';

export default class Application extends Component {
  static contextTypes = {
    router: PropTypes.InstanceOf(Object),
  };

  static propTypes = {
    route: PropTypes.InstanceOf(Object).isRequired,
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
