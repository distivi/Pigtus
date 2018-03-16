import { createStore } from 'redux';
import rootReducer from './reducers';

const initialState = {
  loading: {
    loaded: false,
    loadingPercent: 0
  }
};

export default createStore(rootReducer, initialState);
