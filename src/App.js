import React from 'react';
import Screen from './components/Screen';
import BadScreen from './components/BadScreen';

import { useState } from 'react';
import data from './mock/dataMocked.json';

function App() {
  const [screen, setScreen] = useState(
    data.filter(screen => screen.id === 998)[0]
  );

  const [badScreen, setBadScreen] = useState(false);

  const setNewData = newSlide => {
    const newScreen = data.filter(screen => screen.id == newSlide)[0];
    setScreen(newScreen);
  };
  return (
    <div>
      <main>
        {badScreen ? (
          <BadScreen
            screen={screen}
            setNextSlide={setNewData}
            setBadScreen={setBadScreen}
          />
        ) : (
          <Screen
            screen={screen}
            setNextSlide={setNewData}
            setBadScreen={setBadScreen}
          />
        )}
      </main>
    </div>
  );
}

export default App;
