import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import globalReducer from './globalReducer';
import {filterShrimpPrice} from './ShrimpPriceReducer';

const reducer = combineReducers({
  globalReducer,
  filterShrimpPrice,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
