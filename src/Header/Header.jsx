/**Internal Dependencies */
import React from "react";
import Img from "../Images/logo";
import './header.css';

/** External Deendencies.*/
import { BiSolidDashboard } from "react-icons/bi";
import { FaUserLarge } from "react-icons/fa6";
import { IoMdRefreshCircle } from "react-icons/io";
import { MdDarkMode } from "react-icons/md";

export const Header = ({ toggleTheme, isDarkMode }) => {
    return (
        <div className="header">
            <img src={Img} alt="logo" width="90" height="80" />
            <p>AniPragya Keep</p>

            <ul>
                <li> <IoMdRefreshCircle/></li>
                <li><BiSolidDashboard/></li>
                <li><FaUserLarge/></li>
                <div className="theme-toggle">
                    <label>
                        <input type="checkbox" checked={isDarkMode} onChange={toggleTheme}  className="chckbox"/>
                      <li><MdDarkMode/></li>
                    </label>
                </div>
            </ul>

        </div>
    );
};
