import React, { Component } from 'react';
import { MasterLayout } from 'components/Layout';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';
import { translate } from 'utils';

export default
@inject('translation')
@observer
class PageNotFound extends Component {
  static propTypes = {
    translation: PropTypes.oneOfType([PropTypes.object]),
  };

  static defaultProps = {
    translation: {},
  }

  constructor(props) {
    super(props);
  }

  render() {
    const { translation } = this.props;
    return (
      <MasterLayout>
        <h2>{translate('react_boilerplate')}</h2>
        <button type="button" onClick={() => translation.changeLanguage()}>Change language</button>
      </MasterLayout>
    );
  }
}
