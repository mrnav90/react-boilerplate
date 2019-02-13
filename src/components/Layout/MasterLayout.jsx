import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class MasterLayout extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  constructor(props) {
    super(props);
  }

  render() {
    const { children } = this.props;
    const childrenWithProps = React.Children.map(children, child => React.cloneElement(child, {}));
    return (
      <div className="main-layout">
        {childrenWithProps}
      </div>
    );
  }
}
