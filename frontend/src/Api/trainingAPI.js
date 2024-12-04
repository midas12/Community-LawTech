import axiosInstance from "./axiosInstance";

// Fetch trainings for a specific user
export const fetchTrainings = async (userId) => {
  const response = await axiosInstance.get(`/api/trainings/${userId}`);
  return response.data;
};

// Submit a new training request
export const submitTrainingRequest = async (requestData) => {
  const response = await axiosInstance.post("/api/trainings/request", requestData);
  return response.data;
};
