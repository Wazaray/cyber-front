import React from 'react';

function Crossroad({ prop, setNextSlide }) {
  const handleClick = event => {
    console.log('click');
    setNextSlide(event.target.value);
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
          <div className="question__navbar-resize" />
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
              OUI !
            </button>

            <button value={prop.noChoice.refSuivant} onClick={handleClick}>
              NON !
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
