import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import * as Styled from './styled';

export default function InputWithAddon({ children }) {
  const [hasPrepend, setHasPrepend] = useState(false);
  const [hasAppend, setHasAppend] = useState(false);

  useEffect(() => {
    const isHasPrepend = !!React.Children.toArray(children).find(
      child => child.type === Styled.InputGroupPrepend,
    );

    setHasPrepend(isHasPrepend);

    const isHasAppend = !!React.Children.toArray(children).find(
      child => child.type === Styled.InputGroupAppend,
    );

    setHasAppend(isHasAppend);
  }, []);

  return (
    <Styled.InputGroup hasPrepend={hasPrepend} hasAppend={hasAppend}>
      {children}
    </Styled.InputGroup>
  );
}

InputWithAddon.propTypes = {
  children: PropTypes.node.isRequired,
};

InputWithAddon.Prepend = Styled.InputGroupPrepend;
InputWithAddon.Append = Styled.InputGroupAppend;
