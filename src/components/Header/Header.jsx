import React from "react";
import useUserStore from "../../store/useUserStore";

const Header = () => {
  const user = useUserStore((state) => state.user);
  console.log(user);
  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="text-sm/6 font-semibold text-gray-900">
              Esport Wise App
            </span>
          </a>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <a href="#" className="text-sm/6 font-semibold text-gray-900">
            Equipos
          </a>
          <a href="#" className="text-sm/6 font-semibold text-gray-900">
            Jugadores
          </a>
          <a href="#" className="text-sm/6 font-semibold text-gray-900">
            Torneos
          </a>
        </div>
        {user.email ? (
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="/login/"
              className="text-sm/6 font-semibold text-gray-900 flex flex-col"
            >
              <span>{user.full_name}</span>
              <span>{user.role}</span>
            </a>
          </div>
        ) : (
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="/login/" className="text-sm/6 font-semibold text-gray-900">
              Iniciar sesión
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
