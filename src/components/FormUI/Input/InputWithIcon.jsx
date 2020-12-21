import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './styled';

export default function InputWithIcon({
  icon,
  placeholder,
  disabled,
  color,
  ...otherProps
}) {
  return (
    <Styled.InputIconWrap>
      <Styled.LeftIcon name={icon} color={color} />
      <Styled.InputIcon
        disabled={disabled}
        type="text"
        placeholder={placeholder}
        autoComplete="off"
        {...otherProps}
      />
    </Styled.InputIconWrap>
  );
}

InputWithIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  color: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
};

InputWithIcon.defaultProps = {
  placeholder: '',
  color: '#333',
  disabled: false,
};
