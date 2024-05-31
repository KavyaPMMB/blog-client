import React from "react";
import "./topbar.css";
import img1 from './pexels-sandhy-prasetyo-463405.jpg'
import { Link } from "react-router-dom";

function TopBar() {
  const user=false;
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fa-brands fa-square-facebook"></i>
        <i className="topIcon fa-brands fa-square-twitter"></i>
        <i className="topIcon fa-brands fa-square-pinterest"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
      </div>

      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/" >Home</Link></li>
          <li className="topListItem"><Link className="link" to="/" >About</Link></li>
          <li className="topListItem">Contacts</li>
          <li className="topListItem"><Link className="link" to="/write" >Write</Link></li>
          <li className="topListItem">{user && "LogOut"}</li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (         <img className="topImage" src={img1} alt="" />


        ) : 
        (
          <>
                  <ul className="topList">

                  <li className="topListItem">  <Link className="link" to="/login" >Login</Link></li>
                  <li className="topListItem"> <Link className="link" to="/register" >Register</Link></li>
        </ul>
          </>

        )}
        <i className="searchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}

export default TopBar;
