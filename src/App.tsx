import React from 'react';
import logo from './logo.svg';
import './App.scss';

function App() {
  const appName: String  = 'NaM-App'
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>{appName}</code>
        </p>
      </header>
    </div>
  );
}

export default App;
