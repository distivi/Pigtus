import React from 'react';
import { withRouter } from 'react-router-dom';
import App from './components/App/App';

class AppContainer extends React.Component {
  render() {
    return (
      <div className="app-container">
          <App {...this.props}/>
      </div>
    );
  }
}

export default withRouter(AppContainer);
