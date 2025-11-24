import React from 'react';
import './ConfirmationDialog.css';

const ConfirmationDialog = ({ isOpen, warning, onConfirm, onCancel, actionLabel }) => {
  if (!isOpen) return null;

  return (
    <div className="confirmation-overlay" onClick={onCancel}>
      <div className="confirmation-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="confirmation-header">
          <h3>Confirm Action</h3>
        </div>
        <div className="confirmation-body">
          <p className="confirmation-warning">{warning}</p>
          <p className="confirmation-question">Are you sure to proceed?</p>
        </div>
        <div className="confirmation-actions">
          <button className="confirmation-button confirm-button" onClick={onConfirm}>
            Yes
          </button>
          <button className="confirmation-button cancel-button" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationDialog;

