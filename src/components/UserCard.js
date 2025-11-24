import React from 'react';
import './UserCard.css';

const UserCard = ({ user, onClick }) => {

  const getStatusColor = (status) => {
    switch (status) {
      case 'critical':
        return '#dc3545'; // Red
      case 'warning':
        return '#ffc107'; // Yellow
      case 'okay':
        return '#28a745'; // Green
      default:
        return '#6c757d'; // Gray
    }
  };

  const getStatusLabel = (status) => {
    switch (status) {
      case 'critical':
        return 'Critical';
      case 'warning':
        return 'Warning';
      case 'okay':
        return 'All Good';
      default:
        return 'Unknown';
    }
  };

  const getStatusBackgroundColor = (status) => {
    switch (status) {
      case 'critical':
        return 'rgba(220, 53, 69, 0.1)'; // Light red
      case 'warning':
        return 'rgba(255, 193, 7, 0.1)'; // Light yellow
      case 'okay':
        return 'rgba(40, 167, 69, 0.1)'; // Light green
      default:
        return 'rgba(108, 117, 125, 0.1)'; // Light gray
    }
  };

  const cardStyle = {
    borderLeft: `4px solid ${getStatusColor(user.status)}`,
    backgroundColor: getStatusBackgroundColor(user.status),
  };

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  const status = user.status || 'unknown';

  return (
    <div className="user-card" style={cardStyle} onClick={handleClick}>
      <div className="user-card-header">
        <h3>{user.userName || 'Unknown User'}</h3>
        {user.status && (
          <span className={`status-badge status-${status}`}>
            {getStatusLabel(user.status)}
          </span>
        )}
      </div>
      <div className="user-card-body">
        <p><strong>Device Name:</strong> {user.deviceName || 'N/A'}</p>
        <p><strong>Device Address:</strong> {user.deviceAddress || 'N/A'}</p>
        <p><strong>Today's Count:</strong> {user.todayCount || 0}</p>
        <p><strong>History Count:</strong> {user.historyCount || 0}</p>
        <p><strong>Last Message Timestamp:</strong> {user.lastMessageDateTime || 'N/A'}</p>
      </div>
    </div>
  );
};

export default UserCard;

