import React from 'react';
import ReactDOM from 'react-dom';
import { createServer } from 'miragejs';

import { App } from './App';

createServer({
  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'Salary',
          type: 'deposit',
          category: 'Job',
          createdAt: new Date(),
        },
        {
          id: 2,
          title: 'Breakfast',
          type: 'withdraw',
          category: 'Food',
          createdAt: new Date(),
        },
      ];
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.querySelector('#root')
);
