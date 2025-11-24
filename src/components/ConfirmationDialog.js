import React from 'react';
import './ConfirmationDialog.css';

const ConfirmationDialog = ({ isOpen, warning, onConfirm, onCancel, actionLabel, isLoading }) => {
  if (!isOpen) return null;

  return (
    <div className="confirmation-overlay" onClick={isLoading ? undefined : onCancel}>
      <div className="confirmation-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="confirmation-header">
          <h3>Confirm Action</h3>
        </div>
        <div className="confirmation-body">
          <p className="confirmation-warning">{warning}</p>
          <p className="confirmation-question">Are you sure to proceed?</p>
        </div>
        <div className="confirmation-actions">
          <button
            className="confirmation-button confirm-button"
            onClick={onConfirm}
            disabled={isLoading}
            style={{ position: 'relative', minWidth: '80px' }}
          >
            {isLoading ? (
              <>
                <svg
                  className="spinner"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  style={{ animation: 'spin 1s linear infinite' }}
                >
                  <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                </svg>
                <style>{`
                  @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                  }
                `}</style>
              </>
            ) : (
              'Yes'
            )}
          </button>
          <button
            className="confirmation-button cancel-button"
            onClick={onCancel}
            disabled={isLoading}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationDialog;

