import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

export const getUsers = async () => {
  const response = await axios.get(`${apiUrl}/user`);
  return response.data;
};

export const createUser = async (user) => {
  const response = await axios.post(`${apiUrl}/user`, user);
  return response.data;
};

export const updateUser = async (id, user) => {
  const response = await axios.put(`${apiUrl}/user/${id}`, user);
  return response.data;
};

export const deleteUser = async (id) => {
  await axios.delete(`${apiUrl}/user/${id}`);
};