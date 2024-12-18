import axios from "axios";

const yourAuthToken = "your-token-here"; // Define yourAuthToken

const axiosInstance = axios.create({
  baseURL: "https://silver-space-broccoli-ppgr5r56xw6376wj-5000.app.github.dev/api",
  headers: {
    "Content-Type": "application/json",
    // Include an Authorization header if needed
    Authorization: `Bearer ${yourAuthToken}`,
  },
  withCredentials: true, // Include cookies if needed
});
const data = {}; // Define your data object here
axiosInstance.post('/lawyer-registration', data)
  .then(response => console.log(response.data))
  .catch(error => console.error("Error:", error));

  axiosInstance
  .post('/lawyer-registration', {
    name: "Test Lawyer",
    email: "test@example.com",
    password: "password123",
  })
  .then((response) => {
    console.log("Success:", response.data);
  })
  .catch((error) => {
    console.error("Error:", error.response ? error.response.data : error.message);
  });
export default axiosInstance;
