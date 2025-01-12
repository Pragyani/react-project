import React from "react";
import Img from "../Images/logo";
import './header.css';

export const Header = ({ toggleTheme, isDarkMode }) => {
    return (
        <div className="header">
            <img src={Img} alt="logo" width="90" height="80" />
            <p>AniPragya Keep</p>

            <ul>
                <li>about us</li>
                <li>dashboard</li>
                <li>user</li>
                <div className="theme-toggle">
                    <label>
                        <input type="checkbox" checked={isDarkMode} onChange={toggleTheme}  className="chckbox"/>
                        Dark Mode
                    </label>
                </div>
            </ul>

        </div>
    );
};
