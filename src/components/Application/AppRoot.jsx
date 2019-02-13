import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'mobx-react';
import AppRoutes from './AppRoutes';

export default class AppRoot extends Component {
  static propTypes = {
    stores: PropTypes.InstanceOf(Object).isRequired,
    routes: PropTypes.InstanceOf(Array).isRequired,
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { stores, routes } = this.props;
    return (
      <Provider {...stores}>
        <Router>
          <AppRoutes routes={routes} />
        </Router>
      </Provider>
    );
  }
}
