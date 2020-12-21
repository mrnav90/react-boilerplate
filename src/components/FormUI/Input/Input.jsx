import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { head, last, isNaN, flatten } from 'lodash';
import { useForm } from 'react-hook-form';
import * as Styled from './styled';

export default function Input({
  type,
  name,
  value,
  placeholder,
  className,
  readOnly,
  required,
  disabled,
  showStateIcon,
  messageErrors,
  onChange,
  validate,
  pattern,
  maxLength,
  size,
}) {
  const { register } = useForm();
  const registerInput = () => {
    return register({
      required,
      maxLength,
      pattern,
      validate,
    });
  }

  return (
    <Styled.FormGroup width={width}>
      <Styled.InputControl
        success={isValid && value !== '' && !isPristine}
        error={!isValid && !isPristine}
        showStateIcon={showStateIcon}
      >
        <Styled.Input
          type={type}
          className={className}
          placeholder={placeholder}
          name={name}
          autoComplete="off"
          onChange={onChange}
          disabled={disabled}
          value={value || ''}
          required={required}
          size={size}
          maxLength={maxLength}
          ref={registerInput}
          readOnly={readOnly}
        />

        {showStateIcon && isValid && value !== '' && !isPristine && (
          <Styled.RightIcon className="success" name="o" color="blue" />
        )}

        {showStateIcon && !isValid && !isPristine && (
          <Styled.RightIcon className="error" name="close" color="red" />
        )}
      </Styled.InputControl>

      {renderError()}
      {renderServerError()}
    </Styled.FormGroup>
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.oneOfType([PropTypes.string]),
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  size: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  showStateIcon: PropTypes.bool,
  readOnly: PropTypes.bool,
  required: PropTypes.bool,
  pattern: PropTypes.instanceOf(RegExp),
  validate: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  messageErrors: PropTypes.oneOfType([PropTypes.object]),
  maxLength: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Input.defaultProps = {
  placeholder: '',
  className: '',
  disabled: false,
  showStateIcon: true,
  readOnly: false,
  required: false,
  maxLength: 255,
  pattern: null,
  validate: {},
  size: '',
  messageErrors: {},
  onChange: () => {},
};
