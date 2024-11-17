import { useState } from "react";
import axiosInstance from "../../api/axiosInstance";
import useUserStore from "../../store/useUserStore";

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
    <div>
      <h1>Iniciar Sesion</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Usuario"
          value={login.email}
          name="email"
          onChange={handelOnChange}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={login.password}
          name="password"
          onChange={handelOnChange}
        />
        <button>Iniciar Sesion</button>
      </form>
    </div>
  );
};

export default Login;
