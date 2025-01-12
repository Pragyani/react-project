import React from "react";
import Img from "./Images/logo";

export const Header = ({ toggleTheme, isDarkMode }) => {
    return (
        <div className="header">
            <img src={Img} alt="logo" width="90" height="80" />
            <p>AniPragya Keep</p>

            {/* Theme toggle checkbox */}
            <div className="theme-toggle">
                <label>
                    <input
                        type="checkbox"
                        checked={isDarkMode}
                        onChange={toggleTheme}
                    />
                    Dark Mode
                </label>
            </div>
        </div>
    );
};
