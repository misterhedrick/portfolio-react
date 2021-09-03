import React from "react";

const Header = () => {
  return (
    <header id="main-header" className="main-header whiteNav hide-mobile">
      <div className="main-header-title" id="main-header-title">
        Daniel
      </div>
      <nav className="main-header-nav">
        <ul className="main-header-nav-items">
          <li className="main-header-nav-item">Home</li>
          <li className="main-header-nav-item">Me</li>
          <li className="main-header-nav-item">Languages</li>
          <li className="main-header-nav-item">Achievements</li>
          <li className="main-header-nav-item">Experience</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
