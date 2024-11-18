const userInitialState = {
    full_name: "",
    birthdate: "",
    username: "",
    email: "",
    password: "",
    role: "",
}

const roles = [
    { id: "admin", value: "admin" },
    { id: "manager", value: "manager" },
    { id: "player", value: "player" },
    { id: "coach", value: "coach" },
    { id: "staff", value: "staff" },
];

const validRoles = roles.filter((role) => role.id !== "admin");

const videogames = {
    1: {
        name: 'Valorant',
        description: 'Valorant es un videojuego de disparos táctico en primera persona multijugador desarrollado y publicado por Riot Games. El juego fue anunciado con el nombre en clave Project A en octubre de 2019 y fue lanzado el 2 de junio de 2020.',
        logo: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRxom5eYMgVyCIyXEBJhKtcC8AazuZR1PKTHw5gytioeNQ38HCT',
    },
    2: {
        name: 'League of Legends',
        description: 'League of Legends es un videojuego de estrategia en tiempo real en línea desarrollado y publicado por Riot Games. Inspirado en el mod de Warcraft III: The Frozen Throne Defense of the Ancients, el juego sigue un modelo de negocio freemium y es compatible con microtransacciones.',
        logo: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT6lRZjtAudQIxG3nc5IngdTvfzU8Ito11MpFxOwz5X4PB9COnM',
    }
}

const rolesSpanish = {
    admin: 'Administrador',
    manager: 'Manager',
    player: 'Jugador',
    coach: 'Entrenador',
    staff: 'Staff',
}

export { userInitialState, validRoles, videogames, rolesSpanish };