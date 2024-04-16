import React from "react";
import Img from "./Images/logo";


 export const Header = () => {
    return (
        <>
            <div className="header">
                <img src={Img} alt="logo" width='90' height='80' />
                <p>AniPragya Keep</p>
            </div>
        </>
    )
}
