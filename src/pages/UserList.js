import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import UserCard from '../components/UserCard';
import Toast from '../components/Toast';
import Header from '../components/Header';
import './UserList.css';

// Mock user data from the provided structure
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
  ],
  "paging": {
    "resultsUID": "",
    "createdDateTime": "2025-11-19 21:17:17",
    "resultsSkipCount": 0,
    "resultsCount": 21,
    "pageSize": 21
  }
};

// Generate random alert types
const alertTypes = ['critical', 'warning', 'okay', null];
const getRandomAlertType = () => alertTypes[Math.floor(Math.random() * alertTypes.length)];

// Add some random entries
const additionalUsers = [
  {
    "IndexID": 0,
    "CatalogIndex": 24,
    "userName": "Sysadmin",
    "fromDevice": {
      "deviceName": "server-prod-01.example.com",
      "deviceAddress": "192.168.1.100"
    },
    "lastMessageDateTime": "2025/11/19 22:30:15",
    "todayCount": 45,
    "historyCount": 1250
  },
  {
    "IndexID": 0,
    "CatalogIndex": 25,
    "userName": "TestUser",
    "fromDevice": {
      "deviceName": "test-server.example.com",
      "deviceAddress": "10.0.0.50"
    },
    "lastMessageDateTime": "2025/11/19 20:15:30",
    "todayCount": 12,
    "historyCount": 89
  },
  {
    "IndexID": 0,
    "CatalogIndex": 26,
    "userName": "DevUser",
    "fromDevice": {
      "deviceName": "dev-server.example.com",
      "deviceAddress": "172.16.0.25"
    },
    "lastMessageDateTime": "2025/11/19 18:45:22",
    "todayCount": 78,
    "historyCount": 456
  },
  {
    "IndexID": 0,
    "CatalogIndex": 27,
    "userName": "MonitorUser",
    "fromDevice": {
      "deviceName": "monitoring.example.com",
      "deviceAddress": "10.20.30.40"
    },
    "lastMessageDateTime": "2025/11/19 23:10:05",
    "todayCount": 234,
    "historyCount": 5678
  },
  {
    "IndexID": 0,
    "CatalogIndex": 28,
    "userName": "BackupUser",
    "fromDevice": {
      "deviceName": "backup-server.example.com",
      "deviceAddress": "192.168.2.200"
    },
    "lastMessageDateTime": "2025/11/19 19:20:10",
    "todayCount": 5,
    "historyCount": 123
  }
];

// Combine original and additional users
const allUsersCollection = [...mockUsersCollection.usersCollection, ...additionalUsers];

// Convert to format used by the app (with id for routing) and add random alertType
const mockUsers = allUsersCollection.map((user, index) => ({
  id: index + 1,
  userName: user.userName,
  deviceName: user.fromDevice.deviceName,
  deviceAddress: user.fromDevice.deviceAddress,
  lastMessageDateTime: user.lastMessageDateTime,
  todayCount: user.todayCount,
  historyCount: user.historyCount,
  alertType: getRandomAlertType(),
  // Keep original data for reference
  originalData: user
}));

// Mock API function to fetch user status
const fetchUserStatus = async (userId) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300));
  
  // Randomly assign status for demo purposes
  const statuses = ['critical', 'warning', 'okay'];
  const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
  
  return { userId, status: randomStatus };
};

// Mock API function to fetch user details with summary and next steps
const fetchUserDetails = async (userId) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300));
  
  // Mock response matching the specified format
  return {
    summary: `# User Analysis Summary

## Current Status
This user account requires **immediate attention** due to recent activity patterns.

### Key Findings
- Account has been **active** in the last 24 hours
- Multiple login attempts detected
- Access level: **Standard User**

### Recommendations
1. Review recent activity logs
2. Verify account permissions
3. Consider security audit if suspicious activity continues`,
    next_steps: [
      {
        action: "Search knowledge base",
        impact: "High",
        warning: "This action will invoke this ID and may affect system performance",
        info: "Invoke racf ID to search knowledge base for related information and documentation."
      },
      {
        action: "Delete ID",
        impact: "High",
        warning: "This action will delete this ID permanently. This cannot be undone.",
        info: "Delete racf ID from the system. All associated data will be removed."
      },
      {
        action: "Revoke ID",
        impact: "Medium",
        warning: "This action will revoke this ID.",
        info: "Revoke racf ID from the system. All associated data will be removed."
      },
       {
        action: "Notify User",
        impact: "Low",
        warning: "This action will notigy user.",
        info: " Notify the user about the malicious activity."
      }
    ]
  };
};

const UserList = () => {
  // Load cached users from sessionStorage if available
  const loadCachedUsers = () => {
    try {
      const cached = sessionStorage.getItem('cachedUsers');
      if (cached) {
        const parsed = JSON.parse(cached);
        // Validate that cached data has proper structure
        const hasValidData = parsed.length > 0 && parsed[0].userName && parsed[0].userName !== 'Unknown User';
        
        if (hasValidData) {
          // Ensure all user data is properly structured
          return parsed.map(user => ({
            ...user,
            userName: user.userName || user.originalData?.userName || 'Unknown User',
            deviceName: user.deviceName || user.originalData?.fromDevice?.deviceName || '',
            deviceAddress: user.deviceAddress || user.originalData?.fromDevice?.deviceAddress || '',
            lastMessageDateTime: user.lastMessageDateTime || user.originalData?.lastMessageDateTime || '',
            todayCount: user.todayCount !== undefined ? user.todayCount : (user.originalData?.todayCount || 0),
            historyCount: user.historyCount !== undefined ? user.historyCount : (user.originalData?.historyCount || 0),
            status: user.alertType || user.status || 'okay',
            alertType: user.alertType,
            originalData: user.originalData || user
          }));
        } else {
          // Clear invalid cache
          sessionStorage.removeItem('cachedUsers');
        }
      }
    } catch (e) {
      console.error('Error loading cached users:', e);
      sessionStorage.removeItem('cachedUsers');
    }
    // For new users, ensure status is set from alertType and all data is present
    return mockUsers.map(user => ({
      ...user,
      userName: user.userName || 'Unknown User',
      deviceName: user.deviceName || '',
      deviceAddress: user.deviceAddress || '',
      lastMessageDateTime: user.lastMessageDateTime || '',
      todayCount: user.todayCount || 0,
      historyCount: user.historyCount || 0,
      status: user.alertType || user.status || 'okay',
      originalData: user.originalData || user
    }));
  };

  const [users, setUsers] = useState(loadCachedUsers);
  const [loading, setLoading] = useState(false);
  const [statusesFetched, setStatusesFetched] = useState(false);
  const [lastFetchedTime, setLastFetchedTime] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const [filterType, setFilterType] = useState('priority'); // 'priority' or 'username'
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(9);
  const [usernameFilter, setUsernameFilter] = useState('');
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const navigate = useNavigate();

  const handleFetchStatuses = async () => {
    setLoading(true);
    setStatusesFetched(false);
    
    try {
      // Fetch status for all users
      const statusPromises = users.map(user => fetchUserStatus(user.id));
      const statusResults = await Promise.all(statusPromises);
      
      // Fetch user details (summary and next_steps) for all users
      const detailsPromises = users.map(user => fetchUserDetails(user.id));
      const detailsResults = await Promise.all(detailsPromises);
      
      // Update users with their statuses and details
        const updatedUsers = users.map((user, index) => {
        const statusResult = statusResults.find(result => result.userId === user.id);
        const detailsResult = detailsResults[index];
        // Get original data from user or originalData
        const originalData = user.originalData || user;
        return {
          ...user,
          // Preserve all original user data - prioritize existing data, then originalData
          id: user.id,
          userName: user.userName || originalData.userName || 'Unknown User',
          deviceName: user.deviceName !== undefined ? user.deviceName : (originalData.deviceName || originalData.fromDevice?.deviceName || ''),
          deviceAddress: user.deviceAddress || originalData.deviceAddress || originalData.fromDevice?.deviceAddress || '',
          lastMessageDateTime: user.lastMessageDateTime || originalData.lastMessageDateTime || '',
          todayCount: user.todayCount !== undefined ? user.todayCount : (originalData.todayCount || 0),
          historyCount: user.historyCount !== undefined ? user.historyCount : (originalData.historyCount || 0),
          // Use alertType if available, otherwise use fetched status, otherwise use 'okay'
          status: user.alertType || (statusResult ? statusResult.status : (user.status || 'okay')),
          alertType: user.alertType,
          userData: detailsResult, // Store the API response data
          originalData: originalData // Preserve original data
        };
      });
      
      setUsers(updatedUsers);
      //setStatusesFetched(true);
      //setLastFetchedTime(new Date());
      setShowToast(true);
      
      // Cache users data in sessionStorage
      try {
        sessionStorage.setItem('cachedUsers', JSON.stringify(updatedUsers));
      } catch (e) {
        console.error('Error caching users:', e);
      }
    } catch (error) {
      console.error('Error fetching statuses:', error);
    } finally {
      setLoading(false);
    }
  };

  // Filter users by username search (works independently of filter type)
  const filteredUsers = useMemo(() => {
    // If username search has text, filter by userName
    if (usernameFilter.trim()) {
      return users.filter(user => 
        user.userName.toLowerCase().includes(usernameFilter.toLowerCase())
      );
    }
    // If no search text, return all users
    return users;
  }, [users, usernameFilter]);

  // Sort users: critical first, then warning, then okay, then undefined (only when filter type is priority)
  const sortedUsers = useMemo(() => {
    if (filterType === 'priority') {
      return [...filteredUsers].sort((a, b) => {
        if (!a.status && !b.status) return 0;
        if (!a.status) return 1;
        if (!b.status) return -1;
        const statusOrder = { critical: 0, warning: 1, okay: 2 };
        const aOrder = statusOrder[a.status] ?? 3;
        const bOrder = statusOrder[b.status] ?? 3;
        return aOrder - bOrder;
      });
    }
    // For username filter type, return as is (already filtered by search)
    return filteredUsers;
  }, [filteredUsers, filterType]);

  // Pagination logic
  const totalPages = Math.ceil(sortedUsers.length / recordsPerPage);
  const startIndex = (currentPage - 1) * recordsPerPage;
  const endIndex = startIndex + recordsPerPage;
  const paginatedUsers = showAll ? sortedUsers : sortedUsers.slice(startIndex, endIndex);

  // Reset to page 1 when filter or records per page changes
  useEffect(() => {
    setCurrentPage(1);
  }, [filterType, usernameFilter, recordsPerPage]);

  // Fetch status on component mount only if users don't have status data yet
  useEffect(() => {
    // Check if any user already has status data
    const hasStatusData = users.some(user => user.status);
    // Check if any user already has userData (summary/next_steps)
    const hasUserData = users.some(user => user.userData);
    
    // Only fetch if we don't have status data yet (first time load)
    if (!hasStatusData || !hasUserData) {
      handleFetchStatuses();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Close filter dropdown when clicking outside
  useEffect(() => {
    if (!showFilterDropdown) return;

    const handleClickOutside = (event) => {
      if (!event.target.closest('.filter-icon-wrapper')) {
        setShowFilterDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showFilterDropdown]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="user-list-wrapper">
      <Header />
      <div className="user-list-container">
        <Toast 
          message="User data fetched and updated successfully"
          show={showToast}
          onClose={() => setShowToast(false)}
        />

        <div className="parent-card">
          <div className="card-header">
            <h2>User monitoring panel</h2>
            <div className="top-actions">
              <div className="search-input-wrapper">
                <svg className="search-icon-inline" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.35-4.35"></path>
                </svg>
                <input
                  type="text"
                  className="username-input"
                  placeholder="Search username..."
                  value={usernameFilter}
                  onChange={(e) => setUsernameFilter(e.target.value)}
                />
              </div>
              
              <div className="filter-icon-wrapper">
                <button 
                  className="filter-icon-button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowFilterDropdown(!showFilterDropdown);
                  }}
                  type="button"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
                  </svg>
                </button>
                {showFilterDropdown && (
                  <div 
                    className="filter-dropdown-menu"
                    onMouseDown={(e) => e.preventDefault()}
                  >
                    <div 
                      className={`filter-option ${filterType === 'priority' ? 'active' : ''}`}
                      onClick={() => {
                        setFilterType('priority');
                        setShowFilterDropdown(false);
                      }}
                    >
                      Filter by Priority
                    </div>
                    <div 
                      className={`filter-option ${filterType === 'username' ? 'active' : ''}`}
                      onClick={() => {
                        setFilterType('username');
                        setShowFilterDropdown(false);
                      }}
                    >
                      Filter by Username
                    </div>
                  </div>
                )}
              </div>
              
              <button 
                className="fetch-button-with-label" 
                onClick={handleFetchStatuses}
                disabled={loading}
              >
                {loading ? (
                  <>
                    <svg className="refresh-icon spinning" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M23 4v6h-6M1 20v-6h6M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>
                    </svg>
                    <span>Fetching...</span>
                  </>
                ) : (
                  <>
                    <svg className="refresh-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M23 4v6h-6M1 20v-6h6M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>
                    </svg>
                    <span>Fetch Status</span>
                  </>
                )}
              </button>
            </div>
          </div>

          <div className="user-cards-grid">
            {paginatedUsers.length > 0 ? (
              paginatedUsers.map(user => (
                <UserCard 
                  key={user.id} 
                  user={user}
                  onClick={() => {
                    navigate(`/user/${user.id}`, { 
                      state: { 
                        user,
                        userData: user.userData 
                      } 
                    });
                  }}
                />
              ))
            ) : (
              <div className="no-results">No users found for the selected filter.</div>
            )}
          </div>

          <div className="card-bottom-bar">
            <div className="bottom-actions">
              <div className="results-count-bottom">
                {showAll 
                  ? `Showing all ${sortedUsers.length} users`
                  : `Showing ${startIndex + 1}-${Math.min(endIndex, sortedUsers.length)} of ${sortedUsers.length} users`
                }
              </div>
              
              <div className="pagination-controls">
                <label className="show-all-checkbox-label">
                  <input
                    type="checkbox"
                    checked={showAll}
                    onChange={(e) => {
                      setShowAll(e.target.checked);
                      if (!e.target.checked) {
                        setCurrentPage(1);
                      }
                    }}
                    className="show-all-checkbox"
                  />
                  <span>Show All</span>
                </label>
                
                {!showAll && totalPages > 1 && (
                  <div className="pagination-bottom">
                    <button
                      className="pagination-button-small"
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                    >
                      &lt;
                    </button>
                    
                    <div className="pagination-numbers-small">
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                        if (
                          page === 1 ||
                          page === totalPages ||
                          (page >= currentPage - 1 && page <= currentPage + 1)
                        ) {
                          return (
                            <button
                              key={page}
                              className={`pagination-number-small ${currentPage === page ? 'active' : ''}`}
                              onClick={() => handlePageChange(page)}
                            >
                              {page}
                            </button>
                          );
                        } else if (page === currentPage - 2 || page === currentPage + 2) {
                          return <span key={page} className="pagination-ellipsis-small">...</span>;
                        }
                        return null;
                      })}
                    </div>

                    <button
                      className="pagination-button-small"
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                    >
                      &gt;
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <footer className="app-footer">
        <div className="footer-content">
          <div className="footer-left">
            <img src="/bmc-logo.svg" alt="BMC Software" className="footer-logo" />
            <p>BMC Software</p>
          </div>
          <p className="footer-right">© 2025 All rights reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default UserList;

