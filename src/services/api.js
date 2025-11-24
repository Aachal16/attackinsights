const API_BASE_URL = 'https://127.0.0.1:8000';

export const fetchAttackInsights = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/attack_insights`, {
      method: 'GET',
      headers: {
        'accept': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching attack insights:', error);
    throw error;
  }
};

// Function to fetch user details (summary and next_steps) for a specific user
export const fetchUserDetails = async (userId, userName) => {
  try {
    // You can modify this endpoint based on your actual API
    const response = await fetch(`${API_BASE_URL}/attack_insights`, {
      method: 'GET',
      headers: {
        'accept': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    
    // Return the summary and next_steps from API response
    // Adjust this based on your actual API response structure
    return {
      summary: data.summary || `# User Analysis Summary\n\nAnalysis for user: ${userName}`,
      next_steps: data.next_steps || []
    };
  } catch (error) {
    console.error('Error fetching user details:', error);
    throw error;
  }
};

