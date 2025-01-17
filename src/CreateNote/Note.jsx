/**Internal Dependencied */
import React, { useState } from "react";
import './createNote.css';
import EditModal from "../MODAL/EditModal/editModal";

/**External dependencies */
import { AiOutlineDelete } from "react-icons/ai";
import { MdEdit } from "react-icons/md";

export const Note = (props) => {
    const [editbox, setEditbox] = useState(false);
    const [noteContent, setNoteContent] = useState({ title: props.title, content: props.contet });

    const deletedNote = () => { props.deletItem(props.id); };

    const openEditbox = () => { setEditbox(true); };

    const closeEditbox = () => { setEditbox(false); };

    const handleSaveEdit = (newTitle, newContent) => {
        setNoteContent({ title: newTitle, content: newContent });
    };

    return (
        <>
            <div className="note-container">
                <div className="note">
                    <div className="notes-icon">
                        <button className="del-btn" onClick={deletedNote}>
                            <AiOutlineDelete className="deleted" />
                        </button>
                        <button className="E-btn" onClick={openEditbox}>
                            <MdEdit className="edit-btn" />
                        </button>
                    </div>
                    <h1>{noteContent.title}</h1>
                    <p>{noteContent.content}</p>
                </div>
            </div>

            {editbox && (
                <EditModal
                    title={noteContent.title}
                    content={noteContent.content}
                    onClose={closeEditbox}
                    onSave={handleSaveEdit}
                />
            )}
        </>
    );
};