import React from "react"
// import {Button} from '@material-ui/core';
// import AddIcon from "@material-ui/icon/Add"


const CreateNote = () => {
    return (
        <>
            <div className="main_note">
                <form>
                    <input type="text" placeholder="Tittle" autoComplete="off"/>
                    <textarea placeholder="Write A Note" rows='' column=''></textarea>
                 <button>+</button>
                </form>
            </div>


        </>
    )
}

export default CreateNote