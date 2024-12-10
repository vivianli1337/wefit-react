import axios from "axios";

// Axios instance with credentials and base URL
const axiosWithCredentials = axios.create({
  withCredentials: true,
  baseURL: process.env.REACT_APP_REMOTE_SERVER || "http://localhost:4000/api",
});

const USERS_API = `${axiosWithCredentials.defaults.baseURL}/users`;

// Create a new user
export const createUser = async (user: any) => {
  const response = await axiosWithCredentials.post(USERS_API, user);
  return response.data;
};

// Get all users
export const getAllUsers = async () => {
  const response = await axiosWithCredentials.get(USERS_API);
  return response.data;
};

// Get the current user's profile
export const getProfile = async () => {
  const response = await axiosWithCredentials.get(`${USERS_API}/profile`);
  return response.data;
};

// Get a user by ID
export const getUserById = async (id: string) => {
  const response = await axiosWithCredentials.get(`${USERS_API}/${id}`);
  return response.data;
};

// Search users by partial name or email
export const searchUsersByPartialNameOrEmail = async (query: string) => {
  const response = await axiosWithCredentials.get(`${USERS_API}/search/${query}`);
  return response.data;
};

// Update a user
export const updateUser = async (id: string, user: any) => {
  const response = await axiosWithCredentials.put(`${USERS_API}/${id}`, user);
  return response.data;
};

// Delete a user
export const deleteUser = async (id: string) => {
  const response = await axiosWithCredentials.delete(`${USERS_API}/${id}`);
  return response.data;
};

// Signup a user
export const signup = async (user: any) => {
  const response = await axiosWithCredentials.post(`${USERS_API}/signup`, user);
  console.log("User payload:", user);
  return response.data;
};

// Login a user
export const login = async (credentials: { username: string; password: string }) => {
  const response = await axiosWithCredentials.post(`${USERS_API}/login`, credentials);
  return response.data;
};

// Logout a user
export const logout = async () => {
    const response = await axiosWithCredentials.post(`${USERS_API}/logout`);
    return response.data;
  };
  
