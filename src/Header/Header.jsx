/**internal dependencies */
import React from "react";
import Img from "../Images/logo";
import './header.css';
import { useDispatch, useSelector } from "react-redux";
import { setInput } from "../reducer";

/** External Dependencies. */
import { IoMdSettings } from "react-icons/io";
import { FaUserLarge } from "react-icons/fa6";
import { RiResetRightFill } from "react-icons/ri";
import { MdDarkMode } from "react-icons/md";
import { TfiViewList } from "react-icons/tfi";

export const Header = ({ toggleTheme, isDarkMode,toggleView  }) => {

    const inputValue = useSelector((state) => {
        console.log('ani', state)
        return state.inputSlice});


    const dispatch = useDispatch();

    const handleInputChange = (e) => {
        console.log("Input changed:", e.target.value);
        dispatch(setInput(e.target.value));
    };
    return (
        <div className={`header ${isDarkMode ? 'dark' : 'light'}`}>
            <div className="header-logo">
              <img src={Img} alt="keep-imh" />
                <span className="logo-text">Keep</span>
            </div>

            <div className="serach-field">
                <input type="text" placeholder="Search Your Note..." className="input-searcfield" onChange={handleInputChange} value={inputValue} />
            </div>

            <ul>
                <li className="icon-item">
                    <IoMdSettings />
                    <span className="tooltip">Settings</span>
                </li>
                <li className="icon-item">
                    <RiResetRightFill />
                    <span className="tooltip">Reset</span>
                </li>
                <li className="icon-item" onClick={toggleView}>
                    <TfiViewList />
                    <span className="tooltip">List View</span>
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