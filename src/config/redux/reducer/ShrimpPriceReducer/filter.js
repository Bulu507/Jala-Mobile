const initialState = {
  size: 20,
  location: '',
};

const filterShrimpPrice = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FILTER_SHRIMP_PRICE':
      return {
        ...state,
        [action.key]: action.value,
      };
    case 'REPLACE_FILTER_SHRIMP_PRICE':
      return {
        ...state,
        ...action.value,
      };
    case 'RESET_FILTER_SHRIMP_PRICE':
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default filterShrimpPrice;
