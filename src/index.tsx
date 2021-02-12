import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './scss/styles.scss'
import './plugins/i18n';

import AppRouter from './router/'

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <AppRouter />
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);
