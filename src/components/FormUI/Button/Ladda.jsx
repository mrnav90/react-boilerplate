import React from 'react';
import PropTypes from 'prop-types';
import { EXPAND_LEFT, SLIDE_UP } from '@zumper/react-ladda';
import { StyledLadda } from './styled';

export default function ButtonLadda({
  type,
  onClick,
  isLoading,
  disabled,
  loadingType,
  children,
  spinnerColor,
  variant,
  width,
  height,
  className,
}) {
  const getLoadingType = loading => {
    switch (loading) {
      case 'slide_up':
        return SLIDE_UP;
      case 'expand_left':
        return EXPAND_LEFT;
      default:
        return EXPAND_LEFT;
    }
  };

  return (
    <StyledLadda
      variant={variant}
      type={type}
      onClick={onClick}
      loading={isLoading}
      disabled={disabled}
      data-style={getLoadingType(loadingType)}
      data-spinner-size={30}
      data-spinner-lines={12}
      data-spinner-color={spinnerColor}
      width={width}
      height={height}
      className={className}
    >
      {children}
    </StyledLadda>
  );
}

ButtonLadda.propTypes = {
  children: PropTypes.node,
  isLoading: PropTypes.bool,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  loadingType: PropTypes.string,
  onClick: PropTypes.func,
  spinnerColor: PropTypes.string,
  variant: PropTypes.oneOf([
    'primary',
    'primaryReverse',
    'danger',
    'dangerReverse',
    'default',
    'defaultReverse',
    'orange',
    'warning',
  ]),
  width: PropTypes.string,
  height: PropTypes.string,
  className: PropTypes.string,
};

ButtonLadda.defaultProps = {
  children: null,
  isLoading: false,
  type: 'button',
  disabled: false,
  onClick: () => {},
  loadingType: 'expand_left',
  spinnerColor: '#fff',
  variant: 'orange',
  width: '',
  height: '',
  className: '',
};
