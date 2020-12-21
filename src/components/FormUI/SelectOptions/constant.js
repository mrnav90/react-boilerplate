const customStyles = {
  indicatorSeparator: () => ({
    display: 'none',
  }),
  option: (base, state) => ({
    ...base,
    alignItems: 'center',
    color: '#010101',
    display: 'flex',
    background: state.isFocused ? '#DEECF9' : '#fff',
  }),
};

const orderOptions = values =>
  values.filter(v => v.isFixed).concat(values.filter(v => !v.isFixed));

export { customStyles, orderOptions };
