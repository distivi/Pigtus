import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { StaticRouter } from 'react-router-dom';

it('renders App without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <StaticRouter location="/" context={{}}>
      <App />
    </StaticRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
