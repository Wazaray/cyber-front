import React from 'react';
import logo from '../images/journee-mondiale-sida.png';

function Crossroad({ prop, setNextSlide, setBadScreen }) {
  const handleClick = event => {
    setNextSlide(event.target.value);
  };
  const handleClickReset = () => {
    console.log('click reset');
    window.location.reload();
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

      <div className="crossroad__middle">
        <div className="header">
          <div className="header__logo">
            <img
              className="header__logo-resize"
              src={logo}
              aria-label="ruban_rouge"
              alt="ruban_rouge"
            />
          </div>
      <div className="question__content">
        <div className="question__navbar">
          <div className="question__navbar-reduce" />
          <div
            className="question__navbar-resize"
            onClick={handleClickBadScreen}
          />
          <div className="question__navbar-cross" />
        </div>

        <div className="straightroad__content">
          <div className="question__content">
            <div className="question__navbar">
              <div className="question__navbar-reduce" />
              <div className="question__navbar-resize-pink" />
              <div className="question__navbar-cross" />
            </div>
            <div className="question__grid">
              <div className="question__phrase">
                <div className="question__phrase-content">{prop.question}</div>
              </div>
              <div className="question__phrase-answer">
                <button className="crossroad__button" value={prop.yesChoice.refSuivant} onClick={handleClick}>
                  {prop.yesChoice.btn1}
                </button>
                <button className="crossroad__button" value={prop.noChoice.refSuivant} onClick={handleClick}>
                  {prop.noChoice.btn2}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="footer">
          <button className="footer__button-pink" onClick={handleClickReset}>
            réinitialiser
          </button>
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
