import React from "react";
import "./sidebar.css";
import aboutme from './pexels-irina-iriser-1408221.jpg'

function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">About Me</span>
        <img src={aboutme} alt="" height="150px" width="250px" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dolore
          laudantium maxime in illum voluptatem?
        </p>
      </div>

      <div className="sidebarItem">
        <span className="sidebarTitle">Categories</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Sports</li>
          <li className="sidebarListItem">Cinema</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Tech</li>
        </ul>
      </div>

      <div className="sidebarItem">
        <span className="sidebarTitle">Follow Us</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-square-facebook"></i>
          <i className="sidebarIcon fa-brands fa-square-twitter"></i>
          <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
          <i className="sidebarIcon fa-brands fa-square-instagram"></i>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
