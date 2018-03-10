import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

import './styles/index.css';
import 'bootstrap/dist/css/bootstrap.css';

import AppContainer from './appContainer';

ReactDOM.render(
	<Router>
		<AppContainer />
	</Router>, document.getElementById('root'));

registerServiceWorker();
