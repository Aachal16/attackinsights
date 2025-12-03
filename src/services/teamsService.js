/**
 * Microsoft Teams Integration Service
 * Sends messages to Microsoft Teams via Incoming Webhook
 */

// Get Teams webhook URL from environment variable or use a default
// In production, set REACT_APP_TEAMS_WEBHOOK_URL in your .env file
const TEAMS_WEBHOOK_URL = process.env.REACT_APP_TEAMS_WEBHOOK_URL || '';

/**
 * Sends a notification message to Microsoft Teams
 * @param {Object} notification - The notification object
 * @param {string} notification.title - Notification title
 * @param {string} notification.message - Notification message
 * @param {string} notification.alertType - Alert type (critical, warning, okay)
 * @returns {Promise<boolean>} - Returns true if message was sent successfully
 */
export const sendTeamsMessage = async (notification) => {
  // If no webhook URL is configured, skip sending
  if (!TEAMS_WEBHOOK_URL) {
    console.log('Teams webhook URL not configured. Skipping Teams notification.');
    return false;
  }

  try {
    // Determine color based on alert type
    const getColor = (alertType) => {
      switch (alertType?.toLowerCase()) {
        case 'critical':
          return '#dc3545'; // Red
        case 'warning':
          return '#ffc107'; // Orange/Yellow
        case 'okay':
          return '#28a745'; // Green
        default:
          return '#6c757d'; // Gray
      }
    };

    // Format the message for Teams
    const teamsMessage = {
      '@type': 'MessageCard',
      '@context': 'https://schema.org/extensions',
      summary: notification.title || 'Security Alert',
      themeColor: getColor(notification.alertType),
      title: notification.title || 'Security Alert',
      text: notification.message || '',
      sections: [
        {
          activityTitle: notification.title || 'Security Alert',
          activitySubtitle: notification.message || '',
          facts: [
            {
              name: 'Alert Type:',
              value: notification.alertType?.toUpperCase() || 'UNKNOWN'
            },
            {
              name: 'Time:',
              value: new Date().toLocaleString()
            }
          ],
          markdown: true
        }
      ]
    };

    // Send the message to Teams
    const response = await fetch(TEAMS_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(teamsMessage),
    });

    if (response.ok) {
      console.log('Teams message sent successfully');
      return true;
    } else {
      console.error('Failed to send Teams message:', response.status, response.statusText);
      return false;
    }
  } catch (error) {
    console.error('Error sending Teams message:', error);
    return false;
  }
};

/**
 * Check if Teams integration is configured
 * @returns {boolean} - Returns true if webhook URL is configured
 */
export const isTeamsConfigured = () => {
  return !!TEAMS_WEBHOOK_URL;
};

