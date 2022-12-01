import React from 'react';

function Crossroad({ prop, setNextSlide }) {
  const handleClick = event => {
    console.log('click');
    setNextSlide(event.target.value);
  };
  return (
    <div className="question">
      <div className="question_phrase">{prop.question}</div>

      <div className="answer_block">
        <div className="answer_yes">
          <button value={prop.yesChoice.refSuivant} onClick={handleClick}>
            OUI !
          </button>
        </div>
        <div className="answer_no">
          <button onClick={handleClick}>NON !</button>
        </div>
      </div>
    </div>
  );
}

export default Crossroad;
