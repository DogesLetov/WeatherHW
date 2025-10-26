import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import './components/Weather/Weather'
import Weather from './components/Weather/Weather';
import SendEmail from './components/SendEmail/SendEmail';

function App() {

  return (
    <div className="app">
      <Weather/>
      <SendEmail/>
    </div>
  );
}

export default App;
