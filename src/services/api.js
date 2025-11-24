const API_BASE_URL = 'http://127.0.0.1:8000';

export const fetchAttackInsights = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/attack_insights`, {
      method: 'GET',
      headers: {
        'accept': 'application/json',
      },
    });
    console.log('Response status:', response.status);
    const text = await response.text();
    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }
    let data = {};
    try {
      data = text ? JSON.parse(text) : {};
    } catch (e) {
      console.error('Failed to parse JSON:', e);
    }
    return data;
  } catch (error) {
    console.error('Error fetching attack insights:', error);
    throw error;
  }
};

// Function to fetch user details (summary and next_steps) for a specific user
export const fetchUserDetails = async (userId, userName) => {
  try {
    console.log('Making request to:', `${API_BASE_URL}/attack_insights`);
    const response = await fetch(`${API_BASE_URL}/attack_insights`, {
      method: 'GET',
      headers: {
        'accept': 'application/json',
      },
    });
    console.log('Fetch response object:', response);
    console.log('Response status:', response.status);
    const text = await response.text();
    console.log('Raw response text:', text);
    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }
    let data = {};
    try {
      data = text ? JSON.parse(text) : {};
    } catch (e) {
      console.error('Failed to parse JSON:', e);
    }
    // Handle next_steps as string with embedded JSON
    let nextSteps = [];
    if (typeof data.next_steps === 'string') {
      // Try to extract JSON array from string
      const match = data.next_steps.match(/```json\s*({[\s\S]*?})\s*```/);
      if (match && match[1]) {
        try {
          const embedded = JSON.parse(match[1]);
          if (embedded.next_steps && Array.isArray(embedded.next_steps)) {
            nextSteps = embedded.next_steps;
          }
        } catch (e) {
          console.error('Failed to parse embedded next_steps JSON:', e);
        }
      }
    } else if (Array.isArray(data.next_steps)) {
      nextSteps = data.next_steps;
    }
    return {
      summary: data.summary || `# User Analysis Summary\n\nAnalysis for user: ${userName}`,
      next_steps: nextSteps
    };
  } catch (error) {
    console.error('Error fetching user details:', error);
    throw error;
  }
};

