import React from 'react';
import logo from '../images/journee-mondiale-sida.png';

function Straightroad({ prop, setNextSlide }) {
  const handleClick = event => {
    console.log('click');
    console.log(event.target.value);
    setNextSlide(event.target.value);
  };
  const handleClickReset = () => {
    console.log('click reset');
    window.location.reload();
  };
  return (
    <div className="straightroad">
      <div className="header">
        <div className="header__logo">
          <img
            className="header__logo-resize"
            src={logo}
            aria-label="ruban_rouge"
            alt="ruban_rouge"
          />
        </div>
      </div>

      <div className="straightroad__content">
        <div className="information__content">
          <div className="straightroad__navbar">
            <div className="question__navbar-reduce" />
            <div className="question__navbar-resize-blue" />
            <div className="question__navbar-cross" />
          </div>
          <div className="finish">
            <div className="finish__text"><p>{prop.messageInfo}</p></div>
          </div>
          <div className="next">
            <button
              className="next__button"
              value={prop.refSuivant}
              onClick={handleClick}>
              {prop.btn0}
            </button>
          </div>
        </div>
      </div>

      <div className="footer">
        <button className="footer__button-blue" onClick={handleClickReset}>
          réinitialiser
        </button>
      </div>
    </div>
  );
}

export default Straightroad;
