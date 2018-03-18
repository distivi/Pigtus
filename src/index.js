import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import store from './store';

import './styles/index.css';
import 'bootstrap/dist/css/bootstrap.css';

import AppContainer from './appContainer';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <AppContainer loaded={true}/>
    </Router>
  </Provider>, document.getElementById('root'));

registerServiceWorker();
