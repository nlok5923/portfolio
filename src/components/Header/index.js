import React from "react"
import "./Header.scss"
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div className="header">
            <div className="flex__container">
                <div className="flex__container__logo">
                <img src="images/logo.png" alt="logo" />
                </div>
                <div className="flex__container__links">
                <NavLink exact activeClassName="current" to='/Project'  className="nav__format" ><div className="element">Projects</div></NavLink>
                <NavLink exact activeClassName="current" to='/Achievements'  className="nav__format" ><div className="element">Achievements</div></NavLink>
                <NavLink exact activeClassName="current" to='/Tools'  className="nav__format" ><div className="element">Tools</div></NavLink>
                <NavLink exact activeClassName="current" to='/About' className="nav__format" ><div className="element">About Me</div></NavLink>
                </div>
            </div>
        </div>
    )
}

export default Header;