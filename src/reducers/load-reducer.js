import { APP_LOADED } from '../actions/load';

const initialSate = { loaded: true };

export function loadReducer(state = initialSate, action) {
  switch (action.type) {
    case APP_LOADED:
      return {
        loaded: true
      };
    default:
      return state;
  }
}
