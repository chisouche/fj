// utils/authService.js

import axios from 'axios';

const signup = async (userData) => {
  try {
    const response = await axios.post('http://localhost:5000/api/auth/signup', userData);
    return response.data; // Assuming your backend sends back data upon successful signup
  } catch (error) {
    throw new Error(error.response.data.message); // Assuming your backend sends back error messages
  }
};

const authService = {
  signup,
};

export default authService;
