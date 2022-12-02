import React from 'react';
import Header from './components/Header';
import Screen from './components/Screen';
import BadScreen from './components/BadScreen';

import { useState } from 'react';
import data from './mock/dataMocked.json';
//import { Routes, Route } from 'react-router-dom';

function App() {
<<<<<<< HEAD
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
      <Header />
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
=======
    const [screen, setScreen] = useState(
        data.filter(screen => screen.id === 998)[0]
    );

    const [badScreen, setBadScreen] = useState(false);

    const setNewData = newSlide => {
        const newScreen = data.filter(screen => screen.id == newSlide)[0];
        setScreen(newScreen);
    };

    useEffect(() => {
        console.log(badScreen)
    }, [badScreen]);

    return (
        <div>
            <Header/>
            <main>
                {badScreen ? <BadScreen screen={screen} setNextSlide={setNewData} setBadScreen={setBadScreen}/>
                    : <Screen screen={screen} setNextSlide={setNewData} setBadScreen={setBadScreen}/>}
            </main>
        </div>
    );

>>>>>>> 10e2b479f20587f05ae041489d9cdb0d99143dd6
}

export default App;
