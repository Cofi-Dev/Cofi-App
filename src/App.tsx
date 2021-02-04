import React from 'react';
import { Route, Redirect } from 'react-router-dom'
import './App.scss';

import {Home} from './views/home'
import {About} from './views/about'

function App() {

  
  return (
    <div>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Redirect to='/' />
    </div>
  );
}

export default App;
