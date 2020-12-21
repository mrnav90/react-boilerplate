import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import Pagination from 'components/Pagination';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import ColGroup from './ColGroup';
import * as Styled from './styled';

export default function Datatable({
  pageOnChange,
  renderItem,
  renderColumn,
  pagination,
  isLoading,
  numberRowLoading,
  emptyTemplate,
  fixedLayout,
  isDisableHeading,
  scroll,
}) {
  const countColumn =
    renderColumn.fields.length + (renderColumn.hasAction ? 1 : 0);

  const getStyles = () => {
    if (scroll.x || scroll.y) {
      return {
        width: scroll.x,
        height: scroll.y,
      };
    }

    return null;
  };

  const renderColGroup = useMemo(
    () => <ColGroup renderColumn={renderColumn} />,
    [],
  );

  const renderTableHeader = useMemo(
    () => (
      <TableHeader
        isDisableHeading={isDisableHeading}
        renderColumn={renderColumn}
      />
    ),
    [],
  );

  return (
    <Styled.TableWrapper>
      <Styled.TableScrollable>
        <Styled.Table fixedLayout={fixedLayout} style={getStyles()}>
          {renderColGroup}
          {renderTableHeader}
          <TableBody
            renderItem={renderItem}
            numberRowLoading={numberRowLoading}
            column={countColumn}
            align={renderColumn.align}
            isLoading={isLoading}
            emptyTemplate={emptyTemplate}
          />
        </Styled.Table>
      </Styled.TableScrollable>
      {pagination && pagination.total_page > 1 && (
        <Pagination
          pagination={pagination}
          pageOnChange={pageOnChange}
          disabled={isLoading}
        />
      )}
    </Styled.TableWrapper>
  );
}

Datatable.propTypes = {
  pageOnChange: PropTypes.func,
  pagination: PropTypes.oneOfType([PropTypes.object]),
  renderColumn: PropTypes.shape({
    fields: PropTypes.oneOfType([PropTypes.array]).isRequired,
    sortDefault: PropTypes.string,
    sortKeyDefault: PropTypes.string,
    onSortColumn: PropTypes.func,
    hasAction: PropTypes.bool,
    align: PropTypes.string,
  }).isRequired,
  isDisableHeading: PropTypes.bool,
  renderItem: PropTypes.oneOfType([PropTypes.array]).isRequired,
  isLoading: PropTypes.bool.isRequired,
  numberRowLoading: PropTypes.number,
  emptyTemplate: PropTypes.node,
  fixedLayout: PropTypes.bool,
  scroll: PropTypes.shape({
    x: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    y: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }),
};

Datatable.defaultProps = {
  pageOnChange: () => {},
  pagination: {},
  numberRowLoading: 10,
  emptyTemplate: null,
  fixedLayout: false,
  isDisableHeading: false,
  scroll: {},
};
