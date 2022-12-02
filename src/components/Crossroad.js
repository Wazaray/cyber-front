import React from 'react';

function Crossroad({ prop, setNextSlide, setBadScreen }) {
  const handleClick = event => {
    setNextSlide(event.target.value);
  };

  const handleClickBadScreen = event => {
    console.log('click');
    setBadScreen(true);
  };

  return (
    <div className="crossroad">
      <div className="question__rod">
        <div className="question__rod-text">
          <span>Le vih c'est surfait, mais l'attraper c'est vite fait </span>
        </div>
      </div>

      <div className="question__content">
        <div className="question__navbar">
          <div className="question__navbar-reduce" />
          <div
            className="question__navbar-resize image-clignote"
            onClick={handleClickBadScreen}
          />
          <div className="question__navbar-cross" />
        </div>
        <div className="question__grid">
          <div className="question__phrase">
            <div className="question__phrase-content">
              <h1>{prop.question}</h1>
            </div>
          </div>
          <div className="question__phrase-answer">
            <button value={prop.yesChoice.refSuivant} onClick={handleClick}>
              {prop.yesChoice.btn1}
            </button>
            <button value={prop.noChoice.refSuivant} onClick={handleClick}>
              {prop.noChoice.btn2}
            </button>
          </div>
        </div>
      </div>
      <div className="question__rod">
        <div className="question__rod-text-right">
          <span>Le vih c'est surfait, mais l'attraper c'est vite fait </span>
        </div>
      </div>
    </div>
  );
}

export default Crossroad;
