import { useState } from "react";
import axiosInstance from "../../api/axiosInstance";
import useUserStore from "../../store/useUserStore";
import Input from "../Input/Input";
import { Button } from "../Button/Button";

const Login = () => {
  const { setUser } = useUserStore();

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handelOnChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post("/login", login);
      if (response.status === 200) {
        // Handle successful response

        const data = response.data.data;
        setUser(data.user);
        localStorage.setItem("token", data.token);
      } else {
        // Handle error response
        console.error("Failed to create user");
      }
    } catch (error) {
      console.error("Failed to create user", error);
    }
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-3xl/9 font-bold tracking-tight text-gray-900">
          Esport Wise App
        </h2>
        <h3 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
          Ingresa en tu cuenta
        </h3>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <Input
              id="email"
              type="email"
              label="Ingrese su correo electronico"
              value={login.email}
              handleOnChange={handelOnChange}
            />
          </div>

          <div>
            <Input
              id="password"
              type="password"
              label="Ingrese su contraseña"
              value={login.password}
              handleOnChange={handelOnChange}
            />
          </div>

          <div>
            <Button label="Iniciar Sesion" />
          </div>
        </form>

        <p className="mt-10 text-center text-sm/6 text-gray-500">
          No tienes una cuenta?{" "}
          <a
            href="/create-user"
            className="font-semibold text-indigo-600 hover:text-indigo-500"
          >
            Crea una cuenta aqui
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
