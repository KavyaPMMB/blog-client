import React from "react";
import flower from './pexels-sandhy-prasetyo-463405.jpg'
import './header.css';
function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Unleash Your Voice, Shape Your</span>
        <span className="headerTitleLg">KAHANI</span>
      </div>
      <img className="headerImg" src={flower} alt="" />
    </div>
  );
}

export default Header;
