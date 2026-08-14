import { RoleEnum } from "@/utils/enums";
import { storageKeys } from "@/utils/storage";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export interface IUserCompany {
  _id: string;
  companyName?: string;
  companyLogo?: string;
}

export interface IUser {
  _id: string;
  company: IUserCompany;
  email: string;
  firstName: string;
  lastName: string;
  profileImage: string;
  role: RoleEnum;
}

export interface ILoginResponse {
  accessToken: string;
  refreshToken: string;
  user: IUser;
}

interface AuthState {
  isAuthenticated: boolean;

  accessToken: string | null;
  refreshToken: string | null;

  role: RoleEnum;
  user: IUser | null;

  login: (data: ILoginResponse) => void;
  logout: () => void;
}

const initialState = {
  isAuthenticated: false,
  accessToken: null,
  refreshToken: null,
  role: RoleEnum.EMPLOYEE,
  user: null,
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      ...initialState,

      login: ({ accessToken, refreshToken, user }) =>
        set({
          isAuthenticated: true,
          accessToken,
          refreshToken,
          user,
          role: user.role,
        }),

      logout: () =>
        set({
          ...initialState,
        }),
    }),
    {
      name: storageKeys.authStorage,
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);