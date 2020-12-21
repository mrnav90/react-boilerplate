import React from 'react';
import PropTypes from 'prop-types';
import WebFontLoader from 'components/WebFontLoader';
import { GOOGLE_WEB_FONT } from 'config/constants';
import AppRoutes from './AppRoutes';

export default function Application({ route }) {
  return (
    <>
      <AppRoutes routes={route.routes} />
      <WebFontLoader config={GOOGLE_WEB_FONT} onStatus={() => null} />
    </>
  );
}

Application.propTypes = {
  route: PropTypes.oneOfType([PropTypes.object]).isRequired,
};
