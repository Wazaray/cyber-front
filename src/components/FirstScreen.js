import React from 'react';

function FirstScreen({ initDataBaseId }) {
  return (
    <div className="firstScreen">
      <button onClick={initDataBaseId}>Let's begin</button>
    </div>
  );
}

export default FirstScreen;
