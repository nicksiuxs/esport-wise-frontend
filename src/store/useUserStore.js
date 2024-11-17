import { create } from 'zustand';

const initialState = {
    id: null,
    full_name: "",
    birthdate: "",
    username: "",
    email: "",
    role: "",
}

const useUserStore = create((set) => ({
    user: initialState,
    setUser: (user) => set({ user }),
    clearUser: () => set({ user: initialState }),
}));

export default useUserStore;