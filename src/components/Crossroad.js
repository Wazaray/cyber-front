import React from 'react';

function Crossroad({ prop, setNextSlide }) {
  const handleClick = event => {
    console.log('click');
    setNextSlide(event.target.value);
  };
  return (
    <div className="crossroad">
      <div className="question__rod">
        <div className="question__rod-text">test</div>
      </div>
      <div className="question__content">

        <div className="question__navbar">
          <div className="question__navbar-reduce" />
          <div className="question__navbar-resize" />
          <div className="question__navbar-cross" />
        </div>
        <div className="question__grid">
          <div className="question__phrase">{prop.question}</div>
          <div className="question__phrase-answer">
            <div className="answer_yes">
              <button value={prop.yesChoice.refSuivant} onClick={handleClick}>
                {prop.yesChoice.btn1}
              </button>
            </div>
            <div className="answer_no">
              <button value={prop.noChoice.refSuivant} onClick={handleClick}>
                {prop.noChoice.btn2}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="question__rod">test</div>
    </div>
  );
}

export default Crossroad;
