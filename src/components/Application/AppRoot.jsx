import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import configureStore from 'config/store';
import { history } from 'config/routes';
import AppRoutes from './AppRoutes';

export default function AppRoot({ routes }) {
  const rootStore = () => {
    return configureStore({}, history);
  };

  return (
    <Provider store={rootStore()}>
      <ConnectedRouter history={history}>
        <AppRoutes routes={routes} />
      </ConnectedRouter>
    </Provider>
  );
}

AppRoot.propTypes = {
  routes: PropTypes.oneOfType([PropTypes.array]).isRequired,
};
