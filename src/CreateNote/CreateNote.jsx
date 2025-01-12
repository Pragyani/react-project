/*
*Internal Dependencies
 */
import React, { useState } from "react";
import './createNote.css';


const CreateNote = (props) => {
    const [note, setNote] = useState({
        title: "",
        content: "",
    })
    const [expand, setExpand] = useState(false)

    const inputEvent = (e) => {

        const { name, value } = e.target;

        setNote((preVal) => {
            return { ...preVal, [name]: value, };
        });
    }

    const addEvent = () => {
        (props.passNote(note))
        setNote({ title: "", content: "", })
    }

    const fromField = (eventfrom) => (eventfrom.preventDefault());
    const expandIt = () => { setExpand(true) }
    const backToNormal = () => setExpand();

    return (
        <>
            <div className="main_note">
                <form onClick={fromField} onDoubleClick={backToNormal}>
                    {expand ?
                        <input type="text" placeholder="Tittle"
                            autoComplete="off" value={note.title} onChange={inputEvent} name="title" /> : null}

                    <textarea placeholder="Write A Note" rows=''
                        column='' value={note.content} onChange={inputEvent}
                        name="content" onClick={expandIt}></textarea>

                    {expand ? <button onClick={addEvent} className="add-btn"> + </button> : null}

                </form>
            </div>
        </>
    )
}
export default CreateNote