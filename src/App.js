import './App.css';
import React from 'react';
import Header from './components/Header';
import Screen from './components/Screen';
import db from './queries/database.js';
import { collection, getDocs } from 'firebase/firestore/lite';
import { useState } from 'react';
import data from './mock/dataMocked.json';
//import { Routes, Route } from 'react-router-dom';

function App() {
  const [screen, setScreen] = useState(
    data.filter(screen => screen.id === 998)[0]
  );
  const [dbId, setDbId] = useState();

  const getData = async () => {
    const storyCollection = collection(db, 'story');
    const firstColl = await getDocs(storyCollection);
    const docList = firstColl.docs.map(doc => doc.data());
    return docList;
  };

  const initDataBaseId = async () => {
    const data = await db.collection('story').doc().set({
      name: 'testName',
      country: 'TestCountry',
    });

    console.log(data);
  };
  console.log(initDataBaseId);

  const setNewData = newSlide => {
    const newScreen = data.filter(screen => screen.id == newSlide)[0];
    setScreen(newScreen);
  };
  return (
    <div className="App">
      <Header></Header>

      <main>
        <Screen
          screen={screen}
          setNextSlide={setNewData}
          initDataBaseId={initDataBaseId}
        />
      </main>
    </div>
  );
}

export default App;
