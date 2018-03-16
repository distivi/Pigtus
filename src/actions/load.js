export const APP_LOADED = 'APP_LOADED';
export const UPDATE_LOADING_PERCENT = 'UPDATE_LOADING_PERCENT';

export const appLoaded = () => {
  return {
    type: APP_LOADED,
    payload: true
  };
};

export const updateLoadingPercent = (percent) => {
  return {
    type: UPDATE_LOADING_PERCENT,
    payload: percent
  };
};
