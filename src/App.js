import './App.css';
import React from 'react';
import Header from './components/Header';
import Screen from './components/Screen';

import { useState, useEffect } from 'react';
import data from './mock/dataMocked.json';
//import { Routes, Route } from 'react-router-dom';

function App() {
  const [slide, setSlide] = useState(1);
  const [screen, setScreen] = useState(
    data.filter(screen => screen.id === 1)[0]
  );

  const setNewData = newSlide => {
    setSlide(newSlide);
    setScreen(data.filter(screen => screen.id === newSlide)[0]);
  };
  return (
    <div className="App">
      <Header></Header>

      <main>
        <Screen screen={screen} setNextSlide={setNewData} />
      </main>
    </div>
  );
}

export default App;
