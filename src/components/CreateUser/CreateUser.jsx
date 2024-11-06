import { useState } from "react";
import axiosInstance from "../../axiosInstance";

import "./CreateUser.css";

const initalState = {
  name: "",
  lastname: "",
  birthdate: "",
  username: "",
  email: "",
  password: "",
  role: "",
};

const roles = [
  { id: "admin", value: "admin" },
  { id: "manager", value: "manager" },
  { id: "player", value: "player" },
  { id: "coach", value: "coach" },
  { id: "staff", value: "staff" },
];

const CreateUser = () => {
  const [user, setUser] = useState(initalState);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axiosInstance.post("/user", user);
      if (response.status === 200) {
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

  const handleOnChangeDate = (e) => {
    setUser({ ...user, birthdate: e.target.value });
  };

  return (
    <div>
      <h1>Crea tu usuario</h1>
      <form onSubmit={handleSubmit} className="create-user">
        <input
          type="text"
          placeholder="Nombre"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Apellido"
          value={user.lastname}
          onChange={(e) => setUser({ ...user, lastname: e.target.value })}
        />
        <input
          type="date"
          placeholder="Fecha de nacimiento"
          value={user.birthdate}
          onChange={handleOnChangeDate}
        />
        <input
          type="text"
          placeholder="Nombre de usuario"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        />
        <input
          type="email"
          placeholder="Correo electrónico"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <select
          value={user.role}
          onChange={(e) => setUser({ ...user, role: e.target.value })}
        >
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
