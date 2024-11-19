import { useState } from "react";
import {axiosUser} from "../../api/axiosInstance";
import Input from "../Input/Input";

import {
  userInitialState as initalState,
  validRoles as roles,
} from "../../utils/constants";

import { Button } from "../Button/Button";

const CreateUser = () => {
  const [user, setUser] = useState(initalState);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axiosUser.post("/user", user);
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
    <div className="isolate bg-white px-6 py-12 sm:py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-3xl/9 font-bold tracking-tight text-gray-900">
          Esport Wise App
        </h2>
        <h3 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
          Crea tu cuenta
        </h3>
      </div>
      <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <Input
              id="full_name"
              label="Nombre completo"
              handleOnChange={handleOnChange}
              value={user.full_name}
            />
          </div>
          <div className="sm:col-span-2">
            <Input
              id="username"
              label="Nombre de usuario"
              handleOnChange={handleOnChange}
              value={user.username}
            />
          </div>
          <div className="sm:col-span-2">
            <Input
              id="email"
              label="Correo electrónico"
              handleOnChange={handleOnChange}
              type="email"
              value={user.email}
            />
          </div>
          <div className="sm:col-span-2">
            <Input
              type="password"
              label="Contraseña"
              value={user.password}
              id="password"
              handleOnChange={handleOnChange}
            />
          </div>
          <div className="sm:col-span-2">
            <Input
              id="birthdate"
              label="Fecha de nacimiento"
              handleOnChange={handleOnChange}
              type="date"
              value={user.birthdate}
            />
          </div>
          <div className="sm:col-span-2">
            <Input
              type="select"
              label="Selecciona un rol"
              id="role"
              handleOnChange={handleOnChange}
              options={roles}
              value={user.role}
            />
          </div>
        </div>
        <div className="mt-10">
          <Button label="Crea cuenta" />
        </div>
      </form>
    </div>
  );
};

export default CreateUser;
