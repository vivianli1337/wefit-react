import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_REMOTE_SERVER,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

// Add interceptors
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default apiClient;
