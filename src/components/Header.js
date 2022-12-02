import React from 'react';
import logo from '../images/journee-mondiale-sida.png';

function Header() {
  return (
    <div className="header">
        <img
          className="logo"
          src={logo}
          aria-label="ruban_rouge"
          alt="ruban_rouge"
        />
    </div>
  );
}

export default Header;
