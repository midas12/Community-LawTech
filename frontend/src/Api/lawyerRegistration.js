import axiosInstance from './axiosInstance';

// Function to register a lawyer
const registerLawyer = async (data) => {
  try {
    const response = await axiosInstance.post('/registration/register', data);
    return response.data;
  } catch (error) {
    throw error.response?.data || 'Error registering lawyer';
  }
};

export default registerLawyer;
