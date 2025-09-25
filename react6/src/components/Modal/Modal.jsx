import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

function Modal({ children, onClose }) {
  return ReactDOM.createPortal(
    <div className="model">
      <div className="modal-content">
        {children}
        <button className="modal-close-btn" onClick={onClose}>Close</button>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}

export default Modal;
