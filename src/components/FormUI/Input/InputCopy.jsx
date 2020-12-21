import React, { useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Input, InputWithAddon } from 'components/FormUI';
import FontIcon from 'components/FontIcon';
import { notification } from 'utils/index';
import { translate, Translate } from 'react-i18nify';
import * as Styled from './styled';

export default function InputCopy({ name, value, placeholder }) {
  const $input = useRef(null);

  const handleCopy = useCallback(() => {
    if ($input.current.value) {
      $input.current.disabled = false;
      $input.current.select();
      document.execCommand('copy');
      $input.current.disabled = true;
      notification(translate(`${$input.current.name}_copied`), 'success');
    }
  }, []);

  return (
    <InputWithAddon>
      <Input
        size="large"
        type="text"
        name={name}
        value={value}
        placeholder={placeholder}
        disabled
        showStateIcon={false}
        inputRef={$input}
      />
      <InputWithAddon.Append>
        <Styled.ButtonCopy transparent onClick={handleCopy}>
          <FontIcon name="copy" />
          <span>
            <Translate value="copy" />
          </span>
        </Styled.ButtonCopy>
      </InputWithAddon.Append>
    </InputWithAddon>
  );
}

InputCopy.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  placeholder: PropTypes.string,
};

InputCopy.defaultProps = {
  value: '',
  placeholder: '',
};
