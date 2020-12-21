import React from 'react';
import PropTypes from 'prop-types';
import ShowIf from 'components/Utils/ShowIf';
import EmptyTemplate from './EmptyTemplate';
import * as Styled from './styled';

export default function TableBody({
  renderItem,
  isLoading,
  column,
  emptyTemplate,
  align,
  numberRowLoading,
}) {
  const renderLoading = () => {
    return Array(numberRowLoading)
      .fill()
      .map((_, idx) => (
        <Styled.TR key={idx.toString()}>
          <Styled.TD colSpan={column}>
            <Styled.IconLoading />
            <Styled.LineLoading />
          </Styled.TD>
        </Styled.TR>
      ));
  };

  return (
    <Styled.TBody
      align={align}
      isLoading={isLoading}
      isEmpty={!isLoading && !renderItem.length && !!emptyTemplate}
    >
      {isLoading && renderLoading()}
      <ShowIf condition={!isLoading && !!renderItem.length}>
        {renderItem}
      </ShowIf>
      <ShowIf condition={!isLoading && !renderItem.length}>
        <Styled.TR>
          <Styled.TD colSpan={column}>
            {emptyTemplate || <EmptyTemplate />}
          </Styled.TD>
        </Styled.TR>
      </ShowIf>
    </Styled.TBody>
  );
}

TableBody.propTypes = {
  renderItem: PropTypes.oneOfType([PropTypes.array]).isRequired,
  isLoading: PropTypes.bool.isRequired,
  column: PropTypes.number.isRequired,
  numberRowLoading: PropTypes.number.isRequired,
  emptyTemplate: PropTypes.node,
  align: PropTypes.string,
};

TableBody.defaultProps = {
  emptyTemplate: null,
  align: 'left',
};
