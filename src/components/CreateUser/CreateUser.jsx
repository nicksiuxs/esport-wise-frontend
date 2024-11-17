import { useState } from "react";
import axiosInstance from "../../api/axiosInstance";

import {
  userInitialState as initalState,
  validRoles as roles,
} from "../../utils/constants";

import "./CreateUser.css";

const CreateUser = () => {
  const [user, setUser] = useState(initalState);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axiosInstance.post("/user", user);
      if (response.status === 201) {
        // Handle successful response
        console.log("User created successfully");
      } else {
        // Handle error response
        console.error("Failed to create user");
      }
    } catch (error) {
      // Handle error response
      console.error("Failed to create user", error);
    } finally {
      setUser(initalState);
    }
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <div>
      <h1>Crea tu usuario</h1>
      <form onSubmit={handleSubmit} className="create-user">
        <input
          type="text"
          placeholder="Nombre completo"
          name="full_name"
          value={user.full_name}
          onChange={handleOnChange}
        />
        <input
          type="date"
          placeholder="Fecha de nacimiento"
          value={user.birthdate}
          name="birthdate"
          onChange={handleOnChange}
        />
        <input
          type="text"
          placeholder="Nombre de usuario"
          value={user.username}
          name="username"
          onChange={handleOnChange}
        />
        <input
          type="email"
          placeholder="Correo electrónico"
          value={user.email}
          name="email"
          onChange={handleOnChange}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={user.password}
          name="password"
          onChange={handleOnChange}
        />
        <select value={user.role} name="role" onChange={handleOnChange}>
          <option value="" hidden>
            Selecciona un rol
          </option>
          {roles.map((role) => (
            <option key={role.id} value={role.id}>
              {role.value}
            </option>
          ))}
        </select>
        <button type="submit">Crear usuario</button>
      </form>
    </div>
  );
};

export default CreateUser;
