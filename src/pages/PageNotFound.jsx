import React, { Component } from 'react';
import { MasterLayout } from 'components/Layout';

export default class PageNotFound extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MasterLayout>
        <h2>Page not found</h2>
      </MasterLayout>
    );
  }
}
