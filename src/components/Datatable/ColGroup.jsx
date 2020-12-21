import React from 'react';
import PropTypes from 'prop-types';
import { get } from 'lodash';

export default function ColGroup({ renderColumn }) {
  const getStyles = field => {
    const width = get(field, 'width', null);

    return width ? { width, minWidth: width } : null;
  };

  const { fields, hasAction } = renderColumn;
  const cols = hasAction ? [...fields, {}] : fields;

  return (
    <colgroup>
      {cols.map((field, i) => (
        <col key={i.toString()} style={getStyles(field)} />
      ))}
    </colgroup>
  );
}

ColGroup.propTypes = {
  renderColumn: PropTypes.shape({
    fields: PropTypes.oneOfType([PropTypes.array]).isRequired,
    sortDefault: PropTypes.string,
    sortKeyDefault: PropTypes.string,
    onSortColumn: PropTypes.func,
    hasAction: PropTypes.bool,
    align: PropTypes.string,
  }).isRequired,
};
