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

export { userInitialState, validRoles };