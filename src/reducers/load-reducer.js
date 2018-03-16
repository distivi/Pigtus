import { APP_LOADED } from '../actions/load';
import { UPDATE_LOADING_PERCENT } from '../actions/load';

const initialSate = {
  loaded: false,
  loadingPercent: 0
};

export function loadReducer(state = initialSate, action) {
  switch (action.type) {
    case APP_LOADED:
      return {
        loaded: true
      };
    case UPDATE_LOADING_PERCENT:
      return {
        loadingPercent: action.payload
      };
    default:
      return state;
  }
}
