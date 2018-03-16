import React from 'react';
import PropTypes from 'prop-types';
import { ProgressBar } from 'react-bootstrap';

import { connect } from 'react-redux';

class LoadingScreen extends React.Component {
  constructor() {
    super();

    this.appName = 'PIGTUS';
  }

  render() {
    return (<div className='loading-screen'>
      <div className='loading-container'>
        <div className='app-name'> {this.appName} </div>
        <div className='loading-progress'>
          <ProgressBar min={ 0 } max={ 100 } now={ this.props.loadingPercent }/>
        </div>
      </div>
    </div>);
  }
}

LoadingScreen.propTypes = {
  loadingPercent: PropTypes.number
};

const mapStateToProps = (state) => {
  return {
    loadingPercent: state.loading.loadingPercent
  };
};

export default connect(mapStateToProps)(LoadingScreen);
