import React from 'react';
import ReactDOM from 'react-dom';
import "../../styles/Modal.css"


const Modal = ({ children, onClose }) => {
    return ReactDOM.createPortal(
      <div className="modal-overlay">
        <div className="modal-content">
          {children}
          <button className="modal-close-button" onClick={onClose}>
            Cerrar Modal
          </button>
        </div>
      </div>,
      document.getElementById('portal-root')
    );
  };

export default Modal;
