import { create } from 'zustand';
import { userInitialState as initialState } from '../utils/constants';

const useUserStore = create((set) => ({
    user: initialState,
    setUser: (user) => set({ user }),
    clearUser: () => set({ user: initialState }),
}));

export default useUserStore;