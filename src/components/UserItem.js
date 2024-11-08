import React from "react";

const UserItem = ({ user, onEdit, onDelete }) => {
  return (
    <div>
      <span>{user.name} - {user.email} - {user.phone}</span>
      <button onClick={() => onEdit(user)}>Editar</button>
      <button onClick={() => onDelete(user.id)}>Excluir</button>
    </div>
  );
};

export default UserItem;