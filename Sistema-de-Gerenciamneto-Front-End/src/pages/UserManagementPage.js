import React, { useState } from "react";
import { useUsers } from "../hooks/useUsers";
import UserList from "../components/UserList";
import UserForm from "../components/UserForm";

const UserManagementPage = () => {
  const { users, loading, addUser, editUser, removeUser } = useUsers();
  const [editingUser, setEditingUser] = useState(null);

  const handleEdit = (user) => {
    setEditingUser(user);
  };

  const handleDelete = (id) => {
    removeUser(id);
  };

  const handleFormSubmit = (user) => {
    if (editingUser) {
      editUser(editingUser.id, user);
      setEditingUser(null);
    } else {
      addUser(user);
    }
  };

  return (
    <div>
      <UserForm onSubmit={handleFormSubmit} initialUser={editingUser || {}} />
      {loading ? <p>Carregando usuários...</p> : <UserList users={users} onEdit={handleEdit} onDelete={handleDelete} />}
    </div>
  );
};

export default UserManagementPage;