import { useState, useEffect } from "react";
import { getUsers, createUser, updateUser, deleteUser } from "../services/userService";

export const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setLoading(true);
    const data = await getUsers();
    setUsers(data);
    setLoading(false);
  };

  const addUser = async (user) => {
    await createUser(user);
    fetchUsers();
  };

  const editUser = async (id, user) => {
    await updateUser(id, user);
    fetchUsers();
  };

  const removeUser = async (id) => {
    await deleteUser(id);
    fetchUsers();
  };

  return { users, loading, addUser, editUser, removeUser };
};