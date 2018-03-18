import React from 'react';
import { withRouter } from 'react-router-dom';
import App from './components/App/App';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import LoadingScreen from './components/LoadingScreen/LoadingScreen';

// just for test

import store from './store';
import { updateLoadingPercent, appLoaded } from './actions/load';

function mockAppPartLoad(percent) {
  return new Promise(resolve => setTimeout(() => {
    store.dispatch(updateLoadingPercent(percent));
    resolve();
  }, 1000));
}

async function mockLoadEntireApp() {
  await mockAppPartLoad(15);
  await mockAppPartLoad(32);
  await mockAppPartLoad(65);
  await mockAppPartLoad(99);
  await mockAppPartLoad(100);
  store.dispatch(appLoaded());
}

mockLoadEntireApp();

// end test

class AppContainer extends React.Component {
  renderLoader = () => {
    return <LoadingScreen/>;
  }

  renderApp = () => {
    return (<App {...this.props}/>);
  }

  render() {
    const view = this.props.loaded ?
      this.renderApp() :
      this.renderLoader();

    return (
      <div className="app-container">
          {view}
      </div>
    );
  }
}

AppContainer.propTypes = {
  loaded: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {
  console.log("state:", state.loading.loaded);
  return {
    loaded: state.loading.loaded
  };
};

export default withRouter(connect(mapStateToProps)(AppContainer));
