import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { GOOGLE_WEB_FONT_STATUS } from 'config/constants';

/* eslint-disable global-require */
export default function WebFontLoader({ config, children, onStatus }) {
  const childrenWithProps = React.Children.map(children, child =>
    React.cloneElement(child, {}),
  );

  const WebFont = require('webfontloader');

  const [status, setStatus] = useState(null);

  const handleLoading = () => {
    setStatus(GOOGLE_WEB_FONT_STATUS.loading);
  };

  const handleActive = () => {
    setStatus(GOOGLE_WEB_FONT_STATUS.active);
  };

  const handleInactive = () => {
    setStatus(GOOGLE_WEB_FONT_STATUS.inactive);
  };

  const loadFonts = useCallback(() => {
    if (typeof window !== 'undefined') {
      WebFont.load({
        ...config,
        loading: handleLoading,
        active: handleActive,
        inactive: handleInactive,
      });
    }
  }, [WebFont, config]);

  useEffect(() => {
    loadFonts();
  }, [config, loadFonts]);

  useEffect(() => {
    if (status) {
      onStatus(status);
    }
  }, [status, onStatus]);

  return childrenWithProps;
}

WebFontLoader.propTypes = {
  config: PropTypes.oneOfType([PropTypes.object]).isRequired,
  children: PropTypes.element,
  onStatus: PropTypes.func.isRequired,
};

WebFontLoader.defaultProps = {
  children: null,
};
