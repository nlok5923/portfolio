import React from "react";
import "./Header.scss";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="flex__container">
        <div className="flex__container__logo">
          <NavLink exact activeClassName="current" to="/">
            <img src="images/logo.png" alt="logo" />
          </NavLink>
        </div>
        <div className="flex__container__links">
          <NavLink
            exact
            activeClassName="current"
            to="/project"
            className="nav__format"
          >
            <div className="element">Projects</div>
          </NavLink>
          <NavLink
            exact
            activeClassName="current"
            to="/achievement"
            className="nav__format"
          >
            <div className="element">Achievement</div>
          </NavLink>
          <NavLink
            exact
            activeClassName="current"
            to="/tool"
            className="nav__format"
          >
            <div className="element">Tools</div>
          </NavLink>
          <NavLink
            exact
            activeClassName="current"
            to="/about"
            className="nav__format"
          >
            <div className="element">About Me</div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
