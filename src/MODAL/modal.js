import React from 'react';
import './modal.css';

const Modal = ({ message, closeModal }) => {
    return (
        <div className="modal-overlay">
            <div className="modal">
                <h2>{message}</h2>
                <button onClick={closeModal}>Close</button>
            </div>
        </div>
    );
};
export default Modal;
