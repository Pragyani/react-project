/**internal dependencies */
import React from "react";
import Img from "../Images/logo";
import './header.css';

/** External Dependencies. */
import { IoMdSettings } from "react-icons/io";
import { FaUserLarge } from "react-icons/fa6";
import { RiResetRightFill } from "react-icons/ri";
import { MdDarkMode } from "react-icons/md";
import { TfiViewList } from "react-icons/tfi";

export const Header = ({ toggleTheme, isDarkMode }) => {
    return (
        <div className={`header ${isDarkMode ? 'dark' : 'light'}`}>
            <img src={Img} alt="logo" width="90" height="80" />
            <p>AniPragya Keep</p>
            <ul>
                <li className="icon-item">
                    <IoMdSettings />
                    <span className="tooltip">Settings</span>
                </li>
                <li className="icon-item">
                    <RiResetRightFill />
                    <span className="tooltip">Reset</span>
                </li>
                <li className="icon-item">
                    <FaUserLarge />
                    <span className="tooltip">User</span>
                </li>
                <li className="icon-item">
                    <TfiViewList />
                    <span className="tooltip">View List</span>
                </li>
                <li className="icon-item">
                    {/* Dark Mode Toggle */}
                    <MdDarkMode
                        onClick={toggleTheme}
                        style={{ cursor: 'pointer' }}
                        title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
                    />
                    <span className="tooltip">{isDarkMode ? "Light Mode" : "Dark Mode"}</span>
                </li>
            </ul>
        </div>
    );
};