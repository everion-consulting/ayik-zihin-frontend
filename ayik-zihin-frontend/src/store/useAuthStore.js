import { create } from "zustand";

export const useAuthStore = create((set) => ({
  isLoggedIn: false,
  user: null,

  login: (email) =>
    set({
      isLoggedIn: true,
      user: { email },
    }),

  logout: () =>
    set({
      isLoggedIn: false,
      user: null,
    }),
}));
