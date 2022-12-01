import React from 'react';

function Question() {
  return (
    <div className="question">
      <div className="question_phrase">Veux-tu la pillule bleue ?</div>

      <div className="answer_block">
        <div className="answer_yes">
          <button>OUI !</button>
        </div>
        <div className="answer_no">
          <button>NON !</button>
        </div>
      </div>
    </div>
  );
}

export default Question;
