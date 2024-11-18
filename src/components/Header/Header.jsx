import useUserStore from "../../store/useUserStore";

const Header = () => {
  const user = useUserStore((state) => state.user);

  return (
    <header className="bg-zinc-400 shadow">
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
          {user.email ? (<a href="/team/" className="text-sm/6 font-semibold text-gray-900">
            Mi equipo
          </a>) :null}
        </div>
        {user.email ? (
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="/team/me"
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
