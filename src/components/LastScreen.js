import React from 'react';
import logo from '../images/journee-mondiale-sida.png';

function LastScreen({ prop, setNextSlide }) {
  const handleClickReset = () => {
    console.log('click reset');
    window.location.reload();
  };
  return (
    <div className="lastscreen">
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

      <div className="lastscreen__content">
        <div className="question__content">
          <div className="question__navbar">
            <div className="question__navbar-reduce" />
            <div className="question__navbar-resize" />
            <div className="question__navbar-cross" />
          </div>
          <div className="finish">
            <p className="finish__text">C'est fini !!!!</p>
          </div>
        </div>
      </div>

      <div className="footer">
        <button className="footer__button" onClick={handleClickReset}>réinitialiser</button>
      </div>
    </div>
  );
}

export default LastScreen;
