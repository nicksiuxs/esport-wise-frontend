import { useState, useEffect } from 'react'
import {axiosUser} from '../../api/axiosInstance';
import { videogames } from '../../utils/constants';

const Home = () => {
    const [teams, setTeams] = useState([]);

    const getAllTeams = async () => {
        try {
            const response = await axiosUser.get("/team");
            if (response.status === 200) {
                setTeams(response.data.data);
            }
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        getAllTeams();
    }, []);

    return (
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Equipos:</h1>
            <div className="mx-auto max-w-2xl  sm:px-6 sm:py-24 lg:max-w-7xl ">
                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {
                        teams?.map((team) => (
                            <div className="group relative" key={team.id}>
                                <img src={team.logo_url} alt="Front of men&#039;s Basic Tee in black." className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80" />
                                <div className="mt-4 flex justify-between">
                                    <div>
                                        <h3 className="text-sm text-gray-700">
                                            <a href="#">
                                                <span aria-hidden="true" className="absolute inset-0"></span>
                                                {team.name}
                                            </a>
                                        </h3>
                                        <p className="mt-1 text-sm text-gray-500">{videogames[team.game_id].name}</p>
                                    </div>
                                </div>
                            </div>

                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Home