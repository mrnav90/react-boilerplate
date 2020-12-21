import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Translate } from 'react-i18nify';
import * as Styled from './styled';

export default function TableHeader({ renderColumn, isDisableHeading }) {
  const [sortKeyDefault, setSortKeyDefault] = useState(
    renderColumn.sortKeyDefault,
  );
  const [sortDefault, setSortDefault] = useState(renderColumn.sortDefault);
  const { onSortColumn } = renderColumn;

  const getCurrentSort = column => {
    if (column.sortable && onSortColumn) {
      if (sortKeyDefault === column.sortKey) {
        if (sortDefault === 'asc') {
          return 'asc';
        }
        return 'desc';
      }
    }
    return null;
  };

  const sortColumnOnChange = column => {
    if (column.sortable && onSortColumn) {
      const isSort =
        sortKeyDefault === column.sortKey && sortDefault === 'asc'
          ? 'desc'
          : 'asc';
      setSortDefault(isSort);
      setSortKeyDefault(column.sortKey);
      onSortColumn(isSort, sortKeyDefault);
    }
  };

  const getColumn = useCallback(() => {
    const columns = [];
    Object.keys(renderColumn.fields).forEach(idx => {
      if (Object.prototype.hasOwnProperty.call(renderColumn.fields, idx)) {
        const field = renderColumn.fields[idx];
        const value = Object.values(field);
        const key = Object.keys(field);
        columns.push({
          text: value.shift(),
          sortable: field.sortable,
          sortKey: key.shift(),
        });
      }
    });
    return columns;
  }, []);

  return (
    <thead>
      <Styled.TR>
        {getColumn().map((field, idx) => (
          <Styled.TH
            sortable={field.sortable}
            currentSort={getCurrentSort(field)}
            key={idx.toString()}
            align={renderColumn.align}
            isDisableHeading={isDisableHeading}
            onClick={() => sortColumnOnChange(field)}
          >
            <Translate value={field.text} />
          </Styled.TH>
        ))}
        {renderColumn.hasAction && (
          <Styled.TH align="center">
            <Translate value="operation" />
          </Styled.TH>
        )}
      </Styled.TR>
    </thead>
  );
}

TableHeader.propTypes = {
  renderColumn: PropTypes.shape({
    fields: PropTypes.oneOfType([PropTypes.array]).isRequired,
    sortDefault: PropTypes.string,
    sortKeyDefault: PropTypes.string,
    onSortColumn: PropTypes.func,
    hasAction: PropTypes.bool,
    align: PropTypes.string,
  }).isRequired,
  isDisableHeading: PropTypes.bool,
};

TableHeader.defaultProps = {
  isDisableHeading: false,
};
