import React from "react";

interface ModalProps {
  show: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ show, onClose, children }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-5 rounded shadow-lg w-1/3">
        <button onClick={onClose} className="btn btn-secondary btn-sm float-right">Close</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
