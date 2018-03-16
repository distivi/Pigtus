import React from 'react';
import { withRouter } from 'react-router-dom';
import App from './components/App/App';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

class AppContainer extends React.Component {
  renderLoader = () => {
    return (<div> Loading app </div>);
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
  return {
    loaded: state.loaded
  };
};

export default withRouter(connect(mapStateToProps)(AppContainer));
