import axios from 'axios';

const local = 'localhost';
const prod = '172.18.0.2';
const portUser = 3002;
const portTeam = 3003;
const portTournament = 3004;

const baseUrl = import.meta.env.DEV ? local : prod;


const axiosInstance = (port) => {
    return axios.create({
        baseURL: `http://${baseUrl}:${port}`,
        headers: {
            'Content-Type': 'application/json',
        },
    });
};

const axiosUser = axiosInstance(portUser);
const axiosTeam = axiosInstance(portTeam);
const axiosTournament = axiosInstance(portTournament);

export {axiosUser, axiosTeam, axiosTournament};
export default axiosInstance;