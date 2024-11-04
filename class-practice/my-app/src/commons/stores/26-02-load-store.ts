import { create } from "zustand";

export const useLoadStore = create((set) => ({
  isLoaded: false,
  setIsLoaded: () => set(() => ({ isLoaded: true })),
}));
