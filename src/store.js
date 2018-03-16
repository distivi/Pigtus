import { createStore } from 'redux';
import rootReducer from './reducers';

const initialState = {
  loaded: true
};

export default createStore(rootReducer, initialState);
