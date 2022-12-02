import React from 'react';

function Crossroad({ prop, setNextSlide }) {
  const handleClick = event => {
    console.log('click');
    setNextSlide(event.target.value);
  };
  return (
    <div className="container question">
      <div className="question__rod"></div>
      <div className="question__content">
        <div className="question_phrase">{prop.question}</div>

        <div className="answer_block">
          <div className="answer_yes">
            <button value={prop.yesChoice.refSuivant} onClick={handleClick}>
              OUI !
            </button>
          </div>
          <div className="answer_no">
            <button value={prop.noChoice.refSuivant} onClick={handleClick}>
              NON !
            </button>
          </div>
        </div>
      </div>
      <div className="question__rod"></div>
    </div>
  );
}

export default Crossroad;
