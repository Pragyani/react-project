import React, { useState } from "react";
import './editmodal.css';

const EditModal = ({ title, content, onClose, onSave }) => {
    const [newTitle, setNewTitle] = useState(title);
    const [newContent, setNewContent] = useState(content);

    const handleClickOutside = (e) => {
        if (e.target.className === 'edit-overlay') {
            onSave(newTitle, newContent); // Save the edited content
            onClose(); // Close the modal
        }
    }

    return (
        <div className="edit-overlay" onClick={handleClickOutside}>
            <div className="edit-modal" onClick={(e) => e.stopPropagation()}>
                <input
                    type="text"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    placeholder="Edit title"
                />
                <textarea
                    value={newContent}
                    onChange={(e) => setNewContent(e.target.value)}
                    placeholder="Edit content"
                />
            </div>
        </div>
    );
};
export default EditModal;