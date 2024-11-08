import React, { useState, useEffect } from "react";

const UserForm = ({ onSubmit, initialUser = {} }) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    ...initialUser,
  });

  useEffect(() => {
    setUser(initialUser);
  }, [initialUser]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(user);
    setUser({ name: "", email: "", phone: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={user.name} onChange={handleChange} placeholder="Nome" required />
      <input name="email" value={user.email} onChange={handleChange} placeholder="Email" required />
      <input name="phone" value={user.phone} onChange={handleChange} placeholder="Telefone" required />
      <button type="submit">Salvar</button>
    </form>
  );
};

export default UserForm;