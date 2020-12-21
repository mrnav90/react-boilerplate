import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import * as Styled from './styled';

export default function Checkbox({
  readOnly,
  disabled,
  onClick,
  label,
  inline,
  width,
  checked,
  defaultChecked,
  onChange,
}) {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (defaultChecked || checked) {
      setIsChecked(true);
    }
  }, [checked]);

  const handleOnChange = () => {
    setIsChecked(!isChecked);
    if (onChange) {
      onChange(isChecked);
    }
  };

  return (
    <Styled.Wrapper width={width} inline={inline} active={isChecked}>
      <Styled.Input
        disabled={disabled}
        onChange={handleOnChange}
        onClick={onClick}
        checked={isChecked}
        readOnly={readOnly}
      />
      <Styled.Cell />
      <Styled.Label>{label}</Styled.Label>
    </Styled.Wrapper>
  );
}

Checkbox.propTypes = {
  checked: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  onChange: PropTypes.func,
  readOnly: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  inline: PropTypes.bool,
  width: PropTypes.string,
};

Checkbox.defaultProps = {
  checked: null,
  defaultChecked: false,
  onChange: () => {},
  onClick: () => {},
  readOnly: false,
  disabled: false,
  label: '',
  inline: false,
  width: null,
};
