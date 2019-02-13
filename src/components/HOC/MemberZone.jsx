import React, { Component } from 'react';
import { isAuthenticated } from 'utils/cookie';

export default function (WrappedComponent) {
  return class MemberZone extends Component {
    constructor(props) {
      super(props);
    }

    componentDidMount() {
      this.redirectUrl();
    }

    UNSAFE_componentWillReceiveProps() {
      this.redirectUrl();
    }

    redirectUrl() {
      if (!isAuthenticated()) {
        // do something
      }
    }

    render() {
      if (isAuthenticated()) {
        return <WrappedComponent {...this.props} />;
      }
      return null;
    }
  };
}
