import axiosInstance from './axiosInstance';

// Function to onboard a lawyer
const onboardLawyer = async (data) => {
  try {
    const response = await axiosInstance.post('/onboarding/onboard', data);
    return response.data;
  } catch (error) {
    throw error.response?.data || 'Error onboarding lawyer';
  }
};

export default onboardLawyer;
