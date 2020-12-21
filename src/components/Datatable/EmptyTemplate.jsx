import React from 'react';
import { Translate } from 'react-i18nify';
import * as Styled from './styled';

export default function EmptyTemplate() {
  return (
    <Styled.EmptyData>
      <Styled.EmptyIcon size="2x" icon="exclamation-triangle" />
      <Styled.EmptyText>
        <Translate value="data_not_found" />
      </Styled.EmptyText>
    </Styled.EmptyData>
  );
}
