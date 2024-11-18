
import { useEffect, useState } from "react";
import { axiosTeam } from "../../api/axiosInstance";
import useUserStore from "../../store/useUserStore";
import { rolesSpanish, videogames } from "../../utils/constants";

const MyTeam = () => {
  const user = useUserStore((state) => state.user);

  const [team, setTeam] = useState({});

  const getMyTeamInformation = async () => {
    try {
      const response = await axiosTeam.get("/my-team/" + user.id);
      if (response.status === 200) {
        setTeam({...response.data.data.team, members: response.data.data.members});
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    getMyTeamInformation();
  }, []);

  return (
    <main>
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Mi equipo
          </h1>
        </div>
      </header>
      <div>
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="bg-white">
            <div className="pt-6">
              {/* <!-- Image gallery --> */}
              <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                <img src={team.logo_url} className="hidden aspect-[3/4] size-full rounded-lg object-cover lg:block max-h-96" />
                <div>
                  <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8 mb-4">
                    <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{team.name}</h1>
                  </div>
                  <div className="space-y-6">
                    <p className="text-base text-gray-900">{videogames[team.game_id]?.name}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Integrantes</h1>
          <div className="mx-auto max-w-2xl  sm:px-6 sm:py-24 lg:max-w-7xl ">
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">

              {
                team.members?.map((member) => (<div className="group relative">
                  <img src="https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png" alt="Front of men&#039;s Basic Tee in black." className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80" />
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <a href="#">
                          <span aria-hidden="true" className="absolute inset-0"></span>
                          {member.full_name}
                        </a>
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">{rolesSpanish[member.role] }</p>
                    </div>
                  </div>
                </div>))
              }

            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MyTeam;
