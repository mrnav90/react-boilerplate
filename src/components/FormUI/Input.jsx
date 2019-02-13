import React, { Component } from 'react';
import { withFormsy } from 'formsy-react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import SVG from 'react-inlinesvg';
import { FormGroup, Input as InputForm } from 'reactstrap';

export default @withFormsy class Input extends Component {
  static propTypes = {
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    name: PropTypes.string.isRequired,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    setValue: PropTypes.func,
    getErrorMessage: PropTypes.func,
    getValue: PropTypes.func,
    onChange: PropTypes.func,
    showError: PropTypes.func,
    required: PropTypes.bool,
    isPristine: PropTypes.func,
    isValid: PropTypes.func,
    showRequired: PropTypes.func,
    messageRequired: PropTypes.string,
  };

  static defaultProps = {
    placeholder: '',
    className: '',
    required: false,
    messageRequired: '',
    disabled: false,
    setValue: () => {},
    getErrorMessage: () => {},
    getValue: () => {},
    onChange: () => {},
    showError: () => {},
    isPristine: () => {},
    isValid: () => {},
    showRequired: () => {},
  }

  constructor(props, context) {
    super(props, context);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    const { setValue, onChange } = this.props;
    setValue(e.target.value);
    if (onChange) {
      onChange();
    }
  }

  render() {
    const {
      isPristine,
      isValid,
      showRequired,
      showError,
      getValue,
      getErrorMessage,
    } = this.props;
    const {
      type,
      className,
      placeholder,
      name,
      onChange,
      disabled,
      required,
      messageRequired,
    } = this.props;
    const isRequired = !isPristine() && !isValid() && showRequired();
    return (
      <FormGroup className={classnames({
        'auth__validate-valid': isValid(),
        'auth__validate-invalid': showError() || isRequired,
      })}
      >
        <InputForm
          type={type}
          className={className}
          placeholder={placeholder}
          name={name}
          autoComplete="off"
          onChange={onChange}
          disabled={disabled}
          value={getValue() || ''}
          required={required}
        />
        {isValid() && <SVG src={null} className="auth__icon-valid" />}
        {isRequired && <small className="form-text text-danger auth__error-message">{messageRequired}</small>}
        {getErrorMessage() && <small className="form-text text-danger auth__error-message">{getErrorMessage()}</small>}
      </FormGroup>
    );
  }
}
