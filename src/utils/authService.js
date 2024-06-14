// src/utils/authService.js
const signup = async (userData) => {
  try {
    const response = await fetch('http://localhost:5000/api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to sign up');
    }

    return await response.json();
  } catch (error) {
    console.error('Error during signup:', error);
    throw error;
  }
};

export default signup;

