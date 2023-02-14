export const setFilterShrimPrice = (key, value) => (dispatch) => {
  dispatch({type: 'SET_FILTER_SHRIMP_PRICE', key: key, value: value});
};

export const replaceFilterShrimPrice = (params) => (dispatch) => {
  dispatch({type: 'REPLACE_FILTER_SHRIMP_PRICE', value: params});
};

export const resetFilterShrimPrice = () => (dispatch) => {
  dispatch({type: 'RESET_FILTER_SHRIMP_PRICE'});
};
