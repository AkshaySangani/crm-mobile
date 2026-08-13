import { storageKeys } from "@/utils/storage";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type Role = "creator" | "vendor" | null;

interface ISignUpData {
  name: string;
  email: string;
  password: string;
  terms: string;
}
interface AuthState {
  isAuthenticated: boolean;
  role: Role;
  user: null;
  login: (role: Role) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      role: null,
      user: null,
      login: (role) => set({ isAuthenticated: true, role }),
      logout: () => set({ isAuthenticated: false, role: null, user: null }),
    }),
    {
      name: storageKeys.authStorage,
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
