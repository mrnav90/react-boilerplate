import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './styled';
import icons from './icons';

export default function CallingIcon({ name, className, ...otherProps }) {
  const getIcon = () => {
    let iconName = null;
    Object.keys(icons).forEach(key => {
      if (key === name) {
        iconName = name;
      }
    });
    return icons[iconName] ? icons[iconName] : iconName;
  };

  return (
    <Styled.FontIcon
      className={`font-icon ${className}`}
      content={getIcon()}
      {...otherProps}
    />
  );
}

CallingIcon.propTypes = {
  className: PropTypes.string,
  name: PropTypes.oneOf(Object.keys(icons)).isRequired,
};

CallingIcon.defaultProps = {
  className: '',
};
