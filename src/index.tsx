import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Route, Redirect } from 'react-router-dom'

import {Home} from './views/home'
import {About} from './views/about'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Redirect to='/' />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
