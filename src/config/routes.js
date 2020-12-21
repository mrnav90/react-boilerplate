import React, { lazy, Suspense } from 'react';
import { createBrowserHistory, createMemoryHistory } from 'history';
import PreLoader from 'components/PreLoader';

const lazyload = (component = () => {}) => {
  const LazyComponent = lazy(component);

  return props => (
    <Suspense fallback={<PreLoader />}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

const history = SSR === 'yes' ? createMemoryHistory() : createBrowserHistory();

const Application = lazyload(() =>
  import('components/Application/Application'),
);
const PageNotFound = lazyload(() => import('pages/PageNotFound'));
const DashboardPage = lazyload(() => import('pages/DashboardPage'));
const BotListPage = lazyload(() => import('pages/BotListPage'));
const MessageDeliveryPage = lazyload(() => import('pages/MessageDeliveryPage'));
const SettingPage = lazyload(() => import('pages/SettingPage'));
const UserListPage = lazyload(() => import('pages/UserListPage'));
const BotPage = lazyload(() => import('pages/BotPage'));
const MessagePage = lazyload(() => import('pages/MessagePage'));
const ChatBoxPage = lazyload(() => import('pages/ChatBoxPage'));

export { history };

export default [
  {
    component: Application,
    routes: [
      { path: '/', exact: true, component: DashboardPage },
      { path: '/bots', exact: true, component: BotListPage },
      { path: '/bots/:type', exact: true, component: BotPage },
      { path: '/broadcasts', exact: true, component: MessageDeliveryPage },
      {
        path: '/broadcasts/:id',
        exact: true,
        component: MessagePage,
      },
      {
        path: '/broadcasts/create',
        exact: true,
        component: MessagePage,
      },
      { path: '/setting', exact: true, component: SettingPage },
      { path: '/users', exact: true, component: UserListPage },
      { path: '/:type/:key', exact: true, component: ChatBoxPage },
      { path: '/404', component: PageNotFound },
      { path: '*', component: PageNotFound },
    ],
  },
];
