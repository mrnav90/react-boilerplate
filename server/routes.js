import { Application } from 'components/Application';

import {
  PageNotFound,
} from 'pages';

export default [
  {
    component: Application,
    routes: [
      { path: '/', exact: true, component: PageNotFound },
    ],
  },
];
