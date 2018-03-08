import React from 'react';
import ReactDOM from 'react-dom';
import HeaderNotification from './HeaderNotification';

it('renders HeaderNotification without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<HeaderNotification />, div);
	ReactDOM.unmountComponentAtNode(div);
});
