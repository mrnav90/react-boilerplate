import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { customStyles } from './constant';

export default function SelectOptions({
  listOptions,
  value,
  classNamePrefix,
  isDisabled,
  isLoading,
  variant,
  className,
  onChange: propOnChange,
}) {
  const onChange = (v, payload) => {
    switch (payload.action) {
      case 'remove-value':
      case 'pop-value':
        if (payload.removedValue.isFixed) {
          return;
        }
        break;
      default:
    }
    const selected = payload.action === 'clear' ? null : v;
    propOnChange(selected);
  };

  return (
    <Select
      className={className}
      variant={variant}
      closeMenuOnSelect={false}
      hideSelectedOptions={false}
      isSearchable={false}
      isLoading={isLoading}
      isDisabled={isDisabled}
      isClearable={false}
      classNamePrefix={classNamePrefix}
      value={value}
      styles={customStyles}
      options={listOptions}
      onChange={onChange}
    />
  );
}

SelectOptions.propTypes = {
  listOptions: PropTypes.arrayOf(PropTypes.object),
  value: PropTypes.oneOfType([PropTypes.object]),
  onChange: PropTypes.func,
  classNamePrefix: PropTypes.string,
  isDisabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  variant: PropTypes.string,
  className: PropTypes.string,
};

SelectOptions.defaultProps = {
  listOptions: [],
  value: null,
  onChange: () => {},
  classNamePrefix: '',
  isDisabled: false,
  isLoading: false,
  variant: '',
  className: '',
};
