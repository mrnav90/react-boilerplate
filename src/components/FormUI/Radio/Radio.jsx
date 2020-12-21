import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './styled';

export default function Radio({ text, name, checked, value, onChange }) {
  return (
    <Styled.Label>
      <Styled.Text>{text}</Styled.Text>
      <Styled.Input
        name={name}
        onChange={onChange}
        value={value}
        checked={checked}
      />
      <Styled.Checkmark />
    </Styled.Label>
  );
}

Radio.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  name: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Radio.defaultProps = {
  text: '',
  name: 'radio',
  checked: false,
  value: '',
  onChange: () => null,
};
