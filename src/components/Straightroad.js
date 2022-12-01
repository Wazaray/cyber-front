import React from 'react';

function Straightroad({ prop, setNextSlide }) {
  const handleClick = event => {
    console.log('click');
    console.log(event.target.value);
    setNextSlide(event.target.value);
  };
  return (
    <div className="message">
      <div className="message_phrase">{prop.messageInfo}</div>

      <div className="answer_block">
        <div className="next">
          <button value={prop.refSuivant} onClick={handleClick}>
            NEXT !
          </button>
        </div>
      </div>
    </div>
  );
}

export default Straightroad;
