import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ShowIf } from 'components/Utils';
import * as Styled from './styled';

export default function SwitchButton({
  leftLabel,
  rightLabel,
  defaultChecked,
  onChange,
  checked,
  disabled,
}) {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (defaultChecked || checked) {
      setIsChecked(true);
    }
  }, [checked]);

  const handleOnChange = () => {
    if (onChange) {
      onChange(!isChecked);
    }
    setIsChecked(!isChecked);
  };

  return (
    <Styled.Wrapper disabled={disabled} active={isChecked}>
      <ShowIf condition={leftLabel}>
        <span className="left-label">{leftLabel}</span>
      </ShowIf>
      <Styled.Input
        type="checkbox"
        onChange={handleOnChange}
        value={isChecked}
        disabled={disabled}
      />
      <ShowIf condition={rightLabel}>
        <span className="right-label">{rightLabel}</span>
      </ShowIf>
      <Styled.Slider />
    </Styled.Wrapper>
  );
}

SwitchButton.propTypes = {
  checked: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  disabled: PropTypes.bool,
  leftLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  onChange: PropTypes.func,
  rightLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

SwitchButton.defaultProps = {
  checked: false,
  defaultChecked: false,
  disabled: false,
  leftLabel: '',
  onChange: () => {},
  rightLabel: '',
};
