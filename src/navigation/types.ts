import { NativeStackNavigationProp } from "@react-navigation/native-stack";


export type AuthStackParamList = {
  Login: undefined;
  ForgotPassword: undefined;
};

export type AuthNavigationProp =
  NativeStackNavigationProp<AuthStackParamList>;

export type AppStackParamList = {
  Dashboard: undefined;
};