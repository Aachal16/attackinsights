import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import ConfirmationDialog from '../components/ConfirmationDialog';
import Toast from '../components/Toast';
import Header from '../components/Header';
import { useNotifications } from '../context/NotificationContext';
import { fetchUserDetails } from '../services/api';
import './UserDetail.css';

// Mock user data (same as UserList)
const mockUsersCollection = {
  "usersCollection": [
    {
      "IndexID": 0,
      "CatalogIndex": 19,
      "userName": "Acmtpn6",
      "fromDevice": {
        "deviceName": "",
        "deviceAddress": "172.24.48.140"
      },
      "lastMessageDateTime": "2025/11/19 21:17:12",
      "todayCount": 147,
      "historyCount": 147
    },
    {
      "IndexID": 0,
      "CatalogIndex": 1,
      "userName": "Admin",
      "fromDevice": {
        "deviceName": "clm-aus-w39v00.clm-mgmt.clm.bmc.com",
        "deviceAddress": "10.17.165.138"
      },
      "lastMessageDateTime": "2025/11/01 04:59:05",
      "todayCount": 0,
      "historyCount": 84264
    },
    {
      "IndexID": 0,
      "CatalogIndex": 3,
      "userName": "Administrator",
      "fromDevice": {
        "deviceName": "clm-aus-w39v00.clm-mgmt.clm.bmc.com",
        "deviceAddress": "10.17.165.138"
      },
      "lastMessageDateTime": "2025/11/01 04:59:05",
      "todayCount": 0,
      "historyCount": 109018
    },
    {
      "IndexID": 0,
      "CatalogIndex": 4,
      "userName": "Bladelogicrscd",
      "fromDevice": {
        "deviceName": "clm-aus-w39v00.clm-mgmt.clm.bmc.com",
        "deviceAddress": "10.17.165.138"
      },
      "lastMessageDateTime": "2025/11/18 03:32:57",
      "todayCount": 0,
      "historyCount": 191
    },
    {
      "IndexID": 0,
      "CatalogIndex": 11,
      "userName": "Bmcadmin",
      "fromDevice": {
        "deviceName": "clm-aus-w39v00.clm-mgmt.clm.bmc.com",
        "deviceAddress": "10.17.165.138"
      },
      "lastMessageDateTime": "2025/11/19 19:48:05",
      "todayCount": 24,
      "historyCount": 21488
    },
    {
      "IndexID": 0,
      "CatalogIndex": 18,
      "userName": "Bmcdb2",
      "fromDevice": {
        "deviceName": "",
        "deviceAddress": "172.24.48.140"
      },
      "lastMessageDateTime": "2025/11/19 21:17:12",
      "todayCount": 1163,
      "historyCount": 1163
    },
    {
      "IndexID": 0,
      "CatalogIndex": 5,
      "userName": "Defaultaccount",
      "fromDevice": {
        "deviceName": "clm-aus-w39v00.clm-mgmt.clm.bmc.com",
        "deviceAddress": "10.17.165.138"
      },
      "lastMessageDateTime": "2025/11/01 04:59:05",
      "todayCount": 0,
      "historyCount": 71
    },
    {
      "IndexID": 0,
      "CatalogIndex": 6,
      "userName": "Dijoshi",
      "fromDevice": {
        "deviceName": "clm-aus-w39v00.clm-mgmt.clm.bmc.com",
        "deviceAddress": "10.17.165.138"
      },
      "lastMessageDateTime": "2025/11/01 04:59:05",
      "todayCount": 0,
      "historyCount": 101
    },
    {
      "IndexID": 0,
      "CatalogIndex": 7,
      "userName": "Guest",
      "fromDevice": {
        "deviceName": "clm-aus-w39v00.clm-mgmt.clm.bmc.com",
        "deviceAddress": "10.17.165.138"
      },
      "lastMessageDateTime": "2025/11/19 03:38:43",
      "todayCount": 1,
      "historyCount": 879
    },
    {
      "IndexID": 0,
      "CatalogIndex": 16,
      "userName": "Ioa",
      "fromDevice": {
        "deviceName": "",
        "deviceAddress": "172.24.48.140"
      },
      "lastMessageDateTime": "2025/11/19 21:17:12",
      "todayCount": 834,
      "historyCount": 834
    },
    {
      "IndexID": 0,
      "CatalogIndex": 23,
      "userName": "Ispwcm",
      "fromDevice": {
        "deviceName": "",
        "deviceAddress": "172.24.48.140"
      },
      "lastMessageDateTime": "2025/11/19 21:16:52",
      "todayCount": 4,
      "historyCount": 4
    },
    {
      "IndexID": 0,
      "CatalogIndex": 22,
      "userName": "Izusvr",
      "fromDevice": {
        "deviceName": "",
        "deviceAddress": "172.24.48.140"
      },
      "lastMessageDateTime": "2025/11/19 21:16:26",
      "todayCount": 6,
      "historyCount": 6
    },
    {
      "IndexID": 0,
      "CatalogIndex": 17,
      "userName": "Maint",
      "fromDevice": {
        "deviceName": "",
        "deviceAddress": "172.24.48.140"
      },
      "lastMessageDateTime": "2025/11/19 21:17:12",
      "todayCount": 1539,
      "historyCount": 1539
    },
    {
      "IndexID": 0,
      "CatalogIndex": 21,
      "userName": "Mvsrzg",
      "fromDevice": {
        "deviceName": "",
        "deviceAddress": "172.24.48.140"
      },
      "lastMessageDateTime": "2025/11/19 21:15:36",
      "todayCount": 1,
      "historyCount": 1
    },
    {
      "IndexID": 0,
      "CatalogIndex": 20,
      "userName": "Pinsxv0",
      "fromDevice": {
        "deviceName": "",
        "deviceAddress": "172.24.48.140"
      },
      "lastMessageDateTime": "2025/11/19 21:16:52",
      "todayCount": 5,
      "historyCount": 5
    },
    {
      "IndexID": 0,
      "CatalogIndex": 8,
      "userName": "Rdsmon",
      "fromDevice": {
        "deviceName": "clm-aus-w39v00.clm-mgmt.clm.bmc.com",
        "deviceAddress": "10.17.165.138"
      },
      "lastMessageDateTime": "2025/11/01 04:59:05",
      "todayCount": 0,
      "historyCount": 278
    },
    {
      "IndexID": 0,
      "CatalogIndex": 9,
      "userName": "Rdsroot",
      "fromDevice": {
        "deviceName": "clm-aus-w39v00.clm-mgmt.clm.bmc.com",
        "deviceAddress": "10.17.165.138"
      },
      "lastMessageDateTime": "2025/11/01 04:59:05",
      "todayCount": 0,
      "historyCount": 496
    },
    {
      "IndexID": 0,
      "CatalogIndex": 15,
      "userName": "Stcuser",
      "fromDevice": {
        "deviceName": "",
        "deviceAddress": "172.24.48.140"
      },
      "lastMessageDateTime": "2025/11/19 21:16:01",
      "todayCount": 21,
      "historyCount": 21
    },
    {
      "IndexID": 0,
      "CatalogIndex": 13,
      "userName": "Tdadmin",
      "fromDevice": {
        "deviceName": "clm-aus-w39v00.clm-mgmt.clm.bmc.com",
        "deviceAddress": "10.17.165.138"
      },
      "lastMessageDateTime": "2025/11/06 20:52:17",
      "todayCount": 0,
      "historyCount": 2518
    },
    {
      "IndexID": 0,
      "CatalogIndex": 14,
      "userName": "Undefined",
      "fromDevice": {
        "deviceName": "clm-aus-w39v00.clm-mgmt.clm.bmc.com",
        "deviceAddress": "10.17.165.138"
      },
      "lastMessageDateTime": "2025/11/18 13:48:21",
      "todayCount": 0,
      "historyCount": 2
    },
    {
      "IndexID": 0,
      "CatalogIndex": 10,
      "userName": "Wdagutilityaccount",
      "fromDevice": {
        "deviceName": "clm-aus-w39v00.clm-mgmt.clm.bmc.com",
        "deviceAddress": "10.17.165.138"
      },
      "lastMessageDateTime": "2025/11/01 04:59:05",
      "todayCount": 0,
      "historyCount": 71
    }
  ]
};

// Convert to format used by the app (with id for routing)
const mockUsers = mockUsersCollection.usersCollection.map((user, index) => ({
  id: index + 1,
  userName: user.userName,
  deviceName: user.fromDevice.deviceName,
  deviceAddress: user.fromDevice.deviceAddress,
  lastMessageDateTime: user.lastMessageDateTime,
  todayCount: user.todayCount,
  historyCount: user.historyCount,
  // Keep original data for reference
  originalData: user
}));

// Action enum definitions
const ACTIONS = {
  SEARCH_KNOWLEDGE_BASE: 'search_knowledge_base',
  DELETE_ID: 'Delete ID',
  // Add more actions as needed
};

// Impact values enum with colors
const IMPACT_VALUES = {
  HIGH: {
    value: 'High',
    color: '#b2001e', // Red
    fontcolor: '#fff'
  },
  MEDIUM: {
    value: 'Medium',
    color: '#ff6200', // Orange
    fontcolor: '#262626'

  },
  LOW: {
    value: 'Low',
    color: '#ffec3a', // Yellow
    fontcolor: '#262626'
  }
};

const UserDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [confirmationDialog, setConfirmationDialog] = useState({ isOpen: false, warning: '', action: null });
  const [confirmationLoading, setConfirmationLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [showKebabMenu, setShowKebabMenu] = useState(false);
  const [showFeedbackBox, setShowFeedbackBox] = useState(false);
  const [feedbackText, setFeedbackText] = useState('');
  const [feedbackRating, setFeedbackRating] = useState(0);
  const [showProgressBar, setShowProgressBar] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [loaderStep, setLoaderStep] = useState(0);
  const [isLeftCardCollapsed, setIsLeftCardCollapsed] = useState(false);
  const { addNotification } = useNotifications();
  const notificationSentRef = useRef(new Set());

  useEffect(() => {
    // First try to get user from navigation state
    if (location.state?.user) {
      setUser(location.state.user);
    } else {
      // Fallback to finding user from cached data
      try {
        const cached = sessionStorage.getItem('cachedUsers');
        if (cached) {
          const users = JSON.parse(cached);
          const foundUser = users.find(u => u.id === parseInt(id));
          if (foundUser) {
            setUser(foundUser);
          }
        }
      } catch (e) {
        console.error('Error loading user from cache:', e);
      }
    }
  }, [id, location.state]);

  // Fetch user data when user is loaded
  useEffect(() => {
    const loadUserData = async () => {
      if (!user || dataLoaded) return;

      // Always fetch from API with progress bar
      setShowProgressBar(true);
      setShowContent(false);
      setLoading(true);
      
      try {
        // Step 1: Fetching SMF data (1 second)
        setLoaderStep(0);
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Step 2: Fetching user data (1 second)
        setLoaderStep(1);
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Step 3: Generating response (until API responds)
        setLoaderStep(2);
        
        // Fetch user details from API
        const details = await fetchUserDetails(user.id, user.userName);
        setUserData(details);
        
        setLoaderStep(3);
        setDataLoaded(true); //Mark data as loaded
        
        // Hide progress bar and show content
        setShowProgressBar(false);
        setShowContent(true);
      } catch (error) {
        console.error('Error fetching user details:', error);
        setShowProgressBar(false);
        setShowContent(true);
        setToastMessage('Failed to fetch user details from API');
        setShowToast(true);
      } finally {
        setLoading(false);
      }
    };

    loadUserData();
  }, [user, dataLoaded]);

  // Close kebab menu when clicking outside
  useEffect(() => {
    if (!showKebabMenu) return;

    const handleClickOutside = (event) => {
      if (!event.target.closest('.kebab-menu-wrapper')) {
        setShowKebabMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showKebabMenu]);

  if (!user) {
    return (
      <div className="user-detail-container">
        <div className="user-detail-content">
          <p>User not found</p>
          <button onClick={() => navigate('/')} className="back-button">
            Back to List
          </button>
        </div>
      </div>
    );
  }

  const handleActionClick = (nextStep) => {
    setConfirmationDialog({
      isOpen: true,
      warning: nextStep.warning,
      action: nextStep
    });
  };

  const handleConfirmAction = async () => {
    // Show loader on the Yes button
    setConfirmationLoading(true);
   
    // Wait for 2 seconds
    await new Promise(resolve => setTimeout(resolve, 2000));
    // Perform the action here
    console.log('Action confirmed:', confirmationDialog.action);

     // Update the user's alert type back to 'okay'
    if (user) {
      const oldAlertType = user.alertType || user.status || 'okay';
      const newAlertType = 'okay';
      
      // Add notification if alertType changed and we haven't already notified for this change
      if (oldAlertType !== newAlertType) {
        const userName = (user.userName || 'Unknown User').toUpperCase();
        const notificationKey = `${userName}-${oldAlertType}-${newAlertType}`;
        if (!notificationSentRef.current.has(notificationKey)) {
          addNotification({
            title: `Alert Type Updated: ${userName}`,
            message: `User ${userName} alert type changed from ${oldAlertType} to ${newAlertType}`,
            alertType: newAlertType
          });
          notificationSentRef.current.add(notificationKey);
        }
      }
      
      const updatedUser = {
        ...user,
        status: 'okay',
        alertType: 'okay'
      };
      setUser(updatedUser);
     
      // Update the cached users in sessionStorage
      try {
        const cached = sessionStorage.getItem('cachedUsers');
        if (cached) {
          const users = JSON.parse(cached);
          const updatedUsers = users.map(u =>
            u.id === user.id ? updatedUser : u
          );
          sessionStorage.setItem('cachedUsers', JSON.stringify(updatedUsers));
        }
       
        // Also update nonCriticalUserStatus cache
        const nonCriticalCached = sessionStorage.getItem('nonCriticalUserStatus');
        if (nonCriticalCached) {
          const users = JSON.parse(nonCriticalCached);
          const updatedUsers = users.map(u =>
            u.id === user.id ? updatedUser : u
          );
          sessionStorage.setItem('nonCriticalUserStatus', JSON.stringify(updatedUsers));
        }
      } catch (e) {
        console.error('Error updating cached users:', e);
      }
    }

    //Hide loader
    setConfirmationLoading(false);
    // Close confirmation dialog
    setConfirmationDialog({ isOpen: false, warning: '', action: null });
    
    // Show toast with action success message
    setToastMessage('Request submitted successfully');
    setShowToast(true);
  };

  const handleCancelAction = () => {
    setConfirmationDialog({ isOpen: false, warning: '', action: null });
  };

  const handleSubmitFeedback = () => {
    // Handle feedback submission
    console.log('Feedback submitted:', { text: feedbackText, rating: feedbackRating });
    setShowFeedbackBox(false);
    setFeedbackText('');
    setFeedbackRating(0);
    setShowKebabMenu(false);
    setToastMessage('Feedback submitted');
    setShowToast(true);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'critical':
        return '#dc3545';
      case 'warning':
        return '#ffc107';
      case 'okay':
        return '#28a745';
      default:
        return '#6c757d';
    }
  };

  const getImpactColor = (impact) => {
    const impactUpper = impact?.toLowerCase();
    switch (impactUpper) {
      case 'high':
        return IMPACT_VALUES.HIGH.color;
      case 'medium':
        return IMPACT_VALUES.MEDIUM.color;
      case 'low':
        return IMPACT_VALUES.LOW.color;
      default:
        return '#6c757d';
    }
  };

  const getImpactFontColor = (impact) => {
    const impactUpper = impact?.toLowerCase();
    switch (impactUpper) {
      case 'high':
        return IMPACT_VALUES.HIGH.fontcolor;
      case 'medium':
        return IMPACT_VALUES.MEDIUM.fontcolor;
      case 'low':
        return IMPACT_VALUES.LOW.fontcolor;
      default:
        return '#fff';
    }
  };

  if (!showContent) {
    let loaderMsg = '';
    if (loaderStep === 0) loaderMsg = 'Fetching SMF data...';
    else if (loaderStep === 1) loaderMsg = 'Fetching user data...';
    else loaderMsg = 'Generating response...';
    return (
      <div className="user-detail-container">
        {showProgressBar && (
          <div className="progress-loader-fullscreen">
            <div className="progress-loader-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div className="ai-animated-loader" style={{ width: '120px', height: '120px', marginBottom: '8px' }}>
                <div className="ai-center-icon">
                  <svg className="ai-insights-icon" width="80" height="80" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M36.681 36.693l-1.26-4.76c-1.408-5.393-5.677-9.57-11.11-10.93l-4.755-1.167c-.63-.146-.63-1.069 0-1.263l2.572-.68C28.87 16.144 34.11 10.801 35.76 4.048l.63-2.575c.146-.631 1.068-.631 1.262 0l1.261 4.761c1.407 5.392 5.676 9.57 11.11 10.93l4.754 1.166c.63.146.63 1.069 0 1.263l-4.754 1.263c-5.385 1.41-9.558 5.684-10.916 11.076l-1.164 4.76c-.146.633-1.067.633-1.261.001M20.049 54.912l-.804-3.059a9.817 9.817 0 0 0-7.13-7.019l-3.064-.752c-.402-.1-.402-.701 0-.802l1.657-.45a12.383 12.383 0 0 0 8.788-8.875l.402-1.654c.1-.401.703-.401.803 0l.804 3.058a9.817 9.817 0 0 0 7.13 7.019l3.064.752c.401.1.401.702 0 .802l-3.063.802a9.816 9.816 0 0 0-7.03 7.12l-.754 3.058a.408.408 0 0 1-.803 0M40.89 62.81l-.455-1.668c-.505-1.921-2.022-3.387-3.943-3.893l-1.72-.404a.231.231 0 0 1 0-.455l.91-.253a6.877 6.877 0 0 0 4.854-4.954l.202-.91a.231.231 0 0 1 .455 0l.455 1.668c.506 1.921 2.022 3.387 3.943 3.893l1.72.404a.231.231 0 0 1 0 .455l-1.669.455c-1.921.506-3.387 2.023-3.893 3.944l-.404 1.718c-.05.253-.404.253-.455 0" fill="#ff5a4e"/>
                  </svg>
                </div>
              </div>
              <div className="progress-text-section">
                <h3>{loaderMsg}</h3>
                <div className="mini-progress-bar">
                  <div className="mini-progress-fill"></div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="user-detail-wrapper">
      <Header />
    <div className="user-detail-container">
      <div className="user-detail-content">
        <div className="parent-detail-card">
          <div className="back-button-wrapper">
            <button 
              onClick={() => navigate('/')} 
              className="back-icon-button"
              title="Users list"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
            </button>
            <span className="ai-insights-text">User List</span>
          </div>

          <div className="parent-card-header-actions">
            <div className="kebab-menu-wrapper">
              <button 
                className="kebab-menu-button"
                onClick={() => setShowKebabMenu(!showKebabMenu)}
                type="button"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="1"/>
                  <circle cx="12" cy="5" r="1"/>
                  <circle cx="12" cy="19" r="1"/>
                </svg>
              </button>
              {showKebabMenu && (
                <div className="kebab-menu-dropdown">
                  <div 
                    className="kebab-menu-item"
                    onClick={() => {
                      setShowFeedbackBox(true);
                      setShowKebabMenu(false);
                    }}
                  >
                    Submit Feedback
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="detail-layout">
            <div className={`left-panel ${isLeftCardCollapsed ? 'collapsed' : ''}`}>
              <div className="user-detail-card">
                {isLeftCardCollapsed && (
                  <button 
                    className="expand-card-button"
                    onClick={() => setIsLeftCardCollapsed(!isLeftCardCollapsed)}
                    title="User Data"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 18l6-6-6-6"/>
                    </svg>
                  </button>
                )}
                {!isLeftCardCollapsed && (
                  <>
                    <div className="user-avatar-section">
                      <button 
                        className="collapse-card-button"
                        onClick={() => setIsLeftCardCollapsed(!isLeftCardCollapsed)}
                        title="Collapse"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M15 18l-6-6 6-6"/>
                        </svg>
                      </button>
                      <div className="user-avatar">
                        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="avatar-icon">
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                          <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                      </div>
                      <div className="user-name-section">
                        <h2 className="user-name">{(user.userName || 'Unknown User').toUpperCase()}</h2>
                        {user.deviceAddress && <p className="user-email">{user.deviceAddress}</p>}
                      </div>
                    </div>
                    
                    <div className="user-detail-fields">
                      <div className="detail-field">
                        <label>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                            <line x1="8" y1="21" x2="16" y2="21"></line>
                            <line x1="12" y1="17" x2="12" y2="21"></line>
                          </svg>
                          Device Name
                        </label>
                        <div className="field-value">{user.deviceName || 'N/A'}</div>
                      </div>
                      <div className="detail-field">
                        <label>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="2" y1="12" x2="22" y2="12"></line>
                            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                          </svg>
                          Device Address
                        </label>
                        <div className="field-value">{user.deviceAddress || 'N/A'}</div>
                      </div>
                      <div className="detail-field">
                        <label>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                          </svg>
                          Today's Count
                        </label>
                        <div className="field-value">{user.todayCount || 0}</div>
                      </div>
                      <div className="detail-field">
                        <label>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                            <polyline points="9 22 9 12 15 12 15 22"></polyline>
                          </svg>
                          History Count
                        </label>
                        <div className="field-value">{user.historyCount || 0}</div>
                      </div>
                      <div className="detail-field">
                        <label>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12 6 12 12 16 14"></polyline>
                          </svg>
                          Last Message Timestamp
                        </label>
                        <div className="field-value">{user.lastMessageDateTime || 'N/A'}</div>
                      </div>
                      {user.status && (
                        <div className="detail-field">
                          <label>
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                              <polyline points="22 4 12 14.01 9 11.01"></polyline>
                            </svg>
                            Status
                          </label>
                          <div className="field-value-text">
                            <span className={`status-badge status-${user.status}`}>
                              {user.status === 'okay' ? 'All Good' : user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className="right-panel">
              {userData && (
                <>
                  {userData.summary && (
                    <div className="summary-section">
                      <div className="ai-insights-header">
                        <svg className="ai-insights-icon" width="20" height="20" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M36.681 36.693l-1.26-4.76c-1.408-5.393-5.677-9.57-11.11-10.93l-4.755-1.167c-.63-.146-.63-1.069 0-1.263l2.572-.68C28.87 16.144 34.11 10.801 35.76 4.048l.63-2.575c.146-.631 1.068-.631 1.262 0l1.261 4.761c1.407 5.392 5.676 9.57 11.11 10.93l4.754 1.166c.63.146.63 1.069 0 1.263l-4.754 1.263c-5.385 1.41-9.558 5.684-10.916 11.076l-1.164 4.76c-.146.633-1.067.633-1.261.001M20.049 54.912l-.804-3.059a9.817 9.817 0 0 0-7.13-7.019l-3.064-.752c-.402-.1-.402-.701 0-.802l1.657-.45a12.383 12.383 0 0 0 8.788-8.875l.402-1.654c.1-.401.703-.401.803 0l.804 3.058a9.817 9.817 0 0 0 7.13 7.019l3.064.752c.401.1.401.702 0 .802l-3.063.802a9.816 9.816 0 0 0-7.03 7.12l-.754 3.058a.408.408 0 0 1-.803 0M40.89 62.81l-.455-1.668c-.505-1.921-2.022-3.387-3.943-3.893l-1.72-.404a.231.231 0 0 1 0-.455l.91-.253a6.877 6.877 0 0 0 4.854-4.954l.202-.91a.231.231 0 0 1 .455 0l.455 1.668c.506 1.921 2.022 3.387 3.943 3.893l1.72.404a.231.231 0 0 1 0 .455l-1.669.455c-1.921.506-3.387 2.023-3.893 3.944l-.404 1.718c-.05.253-.404.253-.455 0" fill="#ff5a4e"/>
                        </svg>
                        <h3 className="ai-insights-title">AI Insights</h3>
                      </div>
                      <div className="markdown-content summary-markdown">
                        <ReactMarkdown>{userData.summary}</ReactMarkdown>
                      </div>
                    </div>
                  )}

                  {userData.next_steps && userData.next_steps.length > 0 && (
                    <div className="next-steps-section">
                      <h2>Recommended Actions</h2>
                      <table className="next-steps-table">
                        <tbody>
                          {userData.next_steps.map((step, index) => (
                            <tr key={index} className="next-step-row">
                              <td className="next-step-entry-cell">
                                <span className="next-step-entry-bullet">•</span>
                              </td>
                              <td className="next-step-info-cell">
                                <div className="next-step-info-content">
                                  <ReactMarkdown>{step.info}</ReactMarkdown>
                                </div>
                              </td>
                              <td className="next-step-impact-cell">
                                {step.impact && (
                                  <span 
                                    className="impact-badge"
                                    style={{ 
                                      backgroundColor: getImpactColor(step.impact),
                                      color: getImpactFontColor(step.impact)
                                    }}
                                  >
                                    {step.impact} Impact
                                  </span>
                                )}
                              </td>
                              <td className="next-step-action-cell">
                                <button
                                  className="action-button"
                                  style={{
                                    maxWidth: '220px',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    whiteSpace: 'nowrap',
                                    display: 'inline-block',
                                    verticalAlign: 'middle'
                                  }}
                                  title={step.action}
                                  onClick={() => handleActionClick(step)}
                                >
                                  {step.action}
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </>
              )}

              {loading && (
                <div className="loading-message">Loading user data...</div>
              )}
            </div>
          </div>
        </div>
      </div>

      <ConfirmationDialog
        isOpen={confirmationDialog.isOpen}
        warning={confirmationDialog.warning}
        onConfirm={handleConfirmAction}
        onCancel={handleCancelAction}
        isLoading={confirmationLoading}
      />

      <Toast
        message={toastMessage}
        show={showToast}
        onClose={() => {
          setShowToast(false);
          setToastMessage('');
        }}
      />

      {showFeedbackBox && (
        <div className="feedback-modal-overlay" onClick={() => {
          setShowFeedbackBox(false);
          setFeedbackText('');
          setFeedbackRating(0);
        }}>
          <div className="feedback-modal" onClick={(e) => e.stopPropagation()}>
            <div className="feedback-modal-header">
              <h3>Submit Feedback</h3>
              <button 
                className="close-feedback-button"
                onClick={() => {
                  setShowFeedbackBox(false);
                  setFeedbackText('');
                  setFeedbackRating(0);
                }}
              >
                ×
              </button>
            </div>
            <div className="feedback-modal-body">
              <div className="feedback-rating-section">
                <label className="rating-label">Rating:</label>
                <div className="rating-stars">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      className={`star-button ${feedbackRating >= star ? 'active' : ''}`}
                      onClick={() => setFeedbackRating(star)}
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    </button>
                  ))}
                </div>
              </div>
              <textarea
                className="feedback-textarea"
                placeholder="Enter your feedback here..."
                value={feedbackText}
                onChange={(e) => setFeedbackText(e.target.value)}
                rows={6}
              />
            </div>
            <div className="feedback-modal-footer">
              <button 
                className="cancel-feedback-button"
                onClick={() => {
                  setShowFeedbackBox(false);
                  setFeedbackText('');
                  setFeedbackRating(0);
                }}
              >
                Cancel
              </button>
              <button 
                className="submit-feedback-button"
                onClick={handleSubmitFeedback}
                disabled={feedbackRating === 0}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>

    <footer className="app-footer">
      <div className="footer-content">
        <div className="footer-left">
          <img src="/bmc-logo-reversed.svg" alt="BMC Software" className="footer-logo" />
          <p>BMC Software</p>
        </div>
        <p className="footer-right">© 2025 All rights reserved</p>
      </div>
    </footer>
    </div>
  );
};

export { ACTIONS, IMPACT_VALUES };
export default UserDetail;
