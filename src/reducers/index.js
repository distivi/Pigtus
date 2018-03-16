import { combineReducers } from 'redux';
import { loadReducer } from './load-reducer';

export default combineReducers({
  loaded: loadReducer
});
