import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import './components/Weather/Weather'
import Weather from './components/Weather/Weather';
import SendEmail from './components/SendEmail/SendEmail';
import Likes from './components/Likes/Likes';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Map from './components/Map/Map'

function App() {

  return (
    <div className="app">
      <Header />
      <section id="weather"><Weather /></section>
      <section id="likes"><Likes /></section>
      <section id="sendEmail"><SendEmail /></section>
      <section id="map"><Map /></section>
      <section id="about"><Footer /></section>
    </div>
  );
}

export default App;
