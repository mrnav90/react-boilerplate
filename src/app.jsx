import 'normalize.css';
import 'ladda/dist/ladda-themeless.min.css';
import 'toastr/build/toastr.css';
import 'react-tabs/style/react-tabs.css';
import 'react-datepicker/dist/react-datepicker.css';

import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React from 'react';
import ReactDOM from 'react-dom';
import routes from 'config/routes';
import { AppRoot } from 'components/Application';
import stores from 'stores';

ReactDOM.render(
  <AppRoot stores={stores} routes={routes} />,
  document.getElementById('app'),
);
