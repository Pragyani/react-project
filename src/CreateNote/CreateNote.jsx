/*
*Internal Dependencies
 */
import React, { useState } from "react";
import './createNote.css';
import Modal from "../MODAL/modal";

const CreateNote = (props) => {
    const [note, setNote] = useState({
        title: "",
        content: "",
    })
    const [expand, setExpand] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [message, setMessage] = useState('');


    const inputEvent = (e) => {

        const { name, value } = e.target;

        setNote((preVal) => {
            return { ...preVal, [name]: value, };
        });
    }

    const addEvent = () => {
        if (note.title === "", note.content === "") {
            setShowModal(true);
            setMessage('Please Create your note , then it will added in keep')
        } else {
            (props.passNote(note))
            setNote({ title: "", content: "", })
        }
    }
    const CloseModal = () => {
        setShowModal(false);
    }

    const fromField = (eventfrom) => (eventfrom.preventDefault());
    const expandIt = () => { setExpand(true) }
    const backToNormal = () => setExpand();

    return (
        <>
            <div className="main_note">
                <form onClick={fromField} onDoubleClick={backToNormal}>
                    {expand ?
                        <input type="text" placeholder="Tittle :"
                            autoComplete="off" value={note.title} onChange={inputEvent} name="title" /> : null}

                    <textarea placeholder="Write your note:" rows=''
                        column='' value={note.content} onChange={inputEvent}
                        name="content" onClick={expandIt}></textarea>

                    {expand ? <button onClick={addEvent} className="add-btn">+ Add to Note </button> : null}

                </form>
            </div>
            {
                showModal && <Modal message={message} closeModal={CloseModal} />
            }
        </>
    )
}
export default CreateNote