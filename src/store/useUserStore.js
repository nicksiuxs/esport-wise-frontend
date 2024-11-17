import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { userInitialState as initialState } from '../utils/constants';

const useUserStore = create(
    persist(
        (set) => ({
            user: initialState,
            setUser: (user) => set({ user }),
            clearUser: () => set({ user: initialState }),
        }),
        {
            name: 'user-storage', // Nombre del almacenamiento en localStorage
            getStorage: () => localStorage, // Usa localStorage para persistir el estado
        }
    )
);

export default useUserStore;