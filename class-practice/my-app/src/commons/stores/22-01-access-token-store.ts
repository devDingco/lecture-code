import { create } from "zustand";

export const useAccessTokenStore = create((set) => ({
  accessToken: "",
  setAccessToken: (newAccessToken) =>
    set(() => ({ accessToken: newAccessToken })),
}));
