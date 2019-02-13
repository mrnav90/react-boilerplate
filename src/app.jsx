import 'ladda/dist/ladda-themeless.min.css';
import 'toastr/toastr.scss';
import './styles/app.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { routes } from 'config';
import { AppRoot } from 'components/Application';
import stores from 'stores';

ReactDOM.render((
  <AppRoot stores={stores} routes={routes} />
), document.getElementById('app'));
