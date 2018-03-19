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
        ...state,
        loaded: true
      };
    case UPDATE_LOADING_PERCENT:
      return {
        ...state,
        loadingPercent: action.payload
      };
    default:
      return state;
  }
}
