import React from "react";
import Header from "./Header";
import "./App.css"
import  Footer  from "./Footer"
import CreateNote from "./CreateNote";
import {Note} from "./Note"


const App = () => {
    return (
        <>
        <div>
            <Header />
            <CreateNote/>
            <Note/>
            <Footer/>
            </div>   
        </>
    )
}

export default App;