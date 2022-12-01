import './App.css';
import React from 'react';
import Header from './components/Header';
import Question from './components/Question';
//import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header></Header>

      <main>
        <Question />
      </main>
    </div>
  );
}

export default App;
