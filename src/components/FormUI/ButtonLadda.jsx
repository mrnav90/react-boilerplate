import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LaddaButton, { EXPAND_LEFT, SLIDE_UP } from 'react-ladda';

export default class ButtonLadda extends Component {
  static propTypes = {
    isLoading: PropTypes.bool,
    type: PropTypes.string,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    text: PropTypes.string,
    buttonIcon: PropTypes.node,
    loadingType: PropTypes.string.isRequired,
    onClick: PropTypes.func,
  }

  static defaultProps = {
    isLoading: false,
    type: 'button',
    className: 'button button--small',
    disabled: false,
    text: '',
    buttonIcon: null,
    onClick: () => {},
  }

  constructor(props) {
    super(props);
    this.getLoadingType = this.getLoadingType.bind(this);
  }

  getLoadingType(type) {
    switch (type) {
      case 'slide_up':
        return SLIDE_UP;
      case 'expand_left':
        return EXPAND_LEFT;
      default: return EXPAND_LEFT;
    }
  }

  render() {
    const {
      type,
      onClick,
      className,
      isLoading,
      disabled,
      loadingType,
      buttonIcon,
      text,
    } = this.props;
    return (
      <LaddaButton
        type={type}
        onClick={onClick}
        className={className}
        loading={isLoading}
        disabled={disabled}
        data-style={this.getLoadingType(loadingType)}
        data-spinner-size={30}
        data-spinner-lines={12}
      >
        {buttonIcon}
        {text}
      </LaddaButton>
    );
  }
}
