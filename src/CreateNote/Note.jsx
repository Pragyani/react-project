/**Internal Dependencies */

import React from "react";
import './createNote.css';

/**External Dependencies */
import { IoClose } from "react-icons/io5";



export const Note = (props) => {

    const deletedNote=()=>{
        props.deletItem(props.id)
    }

    return (
        <>
            <div className="note">
                <h1>{props.title}</h1>
                <br />
                <p>{props.contet}</p>
                <button className="del-btn" onClick={deletedNote}><IoClose className="deleted"/></button>
            </div>
        </>
    )
}
