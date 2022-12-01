import React from 'react';

function Straightroad({ prop, setNextSlide }) {
  return (
    <div className="message">
      <div className="message_phrase">{prop.messageInfo}</div>

      <div className="answer_block">
        <div className="next">
          <button>NEXT !</button>
        </div>
      </div>
    </div>
  );
}

export default Straightroad;
