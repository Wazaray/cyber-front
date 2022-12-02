import React from 'react';
import { useState } from 'react';
import '../styles/badIndex.css';

function BadCrossroad({ prop, setNextSlide, setBadScreen }) {
  const [buttonYes, setButtonYes] = useState(prop.yesChoice.btn1);
  const [buttonNo, setButtonNo] = useState(prop.noChoice.btn2);
  const handleClick = event => {
    if (buttonYes === prop.yesChoice.btn1) {
      setButtonYes(prop.noChoice.btn2);
      setButtonNo(prop.yesChoice.btn1);
    } else {
      setButtonYes(prop.yesChoice.btn1);
      setButtonNo(prop.noChoice.btn2);
    }
  };

  const handleClickBadScreen = event => {
    setBadScreen(false);
  };
  const handleClickCross = event => {
    alert('No ! You stay Here');
  };

  return (
    <div className="crossroad badcrossroad">
      <div className="question__rod">
        <div className="question__rod-text question__rod-text__bad" onClick="">
          <span>
            <a href="/">Cliquez ici</a>
          </span>
        </div>
      </div>
      <div className="question__content">
        <div className="question__navbar bad__navbar">
          <div className="question__navbar-reduce" />
          <div
            className="question__navbar-resize"
            onClick={handleClickBadScreen}
          />
          <div className="question__navbar-cross image-clignote" onClick={handleClickCross} />
        </div>
        <div className="question__grid">
          <div className="question__phrase">{prop.question}</div>
          <div className="question__phrase-answer">
            <div className="answer_yes">
              <button value={prop.yesChoice.refSuivant} onClick={handleClick}>
                {buttonYes}
              </button>
            </div>
            <div className="answer_no">
              <button value={prop.noChoice.refSuivant} onClick={handleClick}>
                {buttonNo}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="question__rod">
        <div className="question__rod-text-right">
          <span>Click Here ! </span>
        </div>
      </div>
    </div>
  );
}

export default BadCrossroad;
