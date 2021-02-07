import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './plugins/i18n';
import { BrowserRouter } from 'react-router-dom';
import { Route, Redirect } from 'react-router-dom'

import {Home} from './views/home'
import {About} from './views/about'

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Redirect to='/' />
      </BrowserRouter>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);
