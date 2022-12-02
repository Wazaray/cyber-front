import React from 'react';
import Header from './components/Header';
import Screen from './components/Screen';

import { useState } from 'react';
import data from './mock/dataMocked.json';
//import { Routes, Route } from 'react-router-dom';

function App() {
  const [screen, setScreen] = useState(
    data.filter(screen => screen.id === 998)[0]
  );

  const setNewData = newSlide => {
    const newScreen = data.filter(screen => screen.id == newSlide)[0];
    setScreen(newScreen);
  };
  return (
    <div>
      <Header />
      <main>
        <Screen screen={screen} setNextSlide={setNewData}/>
      </main>
    </div>
  );
}

export default App;
