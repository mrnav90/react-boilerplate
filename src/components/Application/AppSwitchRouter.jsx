import React from 'react';
import { useSelector } from 'react-redux';
import { Switch } from 'react-router-dom';

const AppSwitchRouter = props => {
  const location = useSelector(state => state.router.location);
  return <Switch location={location} {...props} />;
};

export default AppSwitchRouter;
