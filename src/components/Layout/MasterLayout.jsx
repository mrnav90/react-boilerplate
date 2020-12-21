import React from 'react';
import PropTypes from 'prop-types';
import * as GlobalStyled from 'styles/GlobalStyled';
import * as Styled from './styled';

export default function MasterLayout({ children }) {
  const childrenWithProps = React.Children.map(children, child =>
    React.cloneElement(child, {}),
  );

  return (
    <Styled.MasterLayoutWrapper>
      {childrenWithProps}
      <GlobalStyled.AppStyle />
      <Styled.FontIconLoader />
    </Styled.MasterLayoutWrapper>
  );
}

MasterLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
