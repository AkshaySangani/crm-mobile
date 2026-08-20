import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "@/screens/Auth/Login/Login";
import { AuthStackParamList } from "./types";
import { pathNames } from "@/utils/path-names";
import ForgotPassword from "@/screens/Auth/ForgotPassword/ForgotPassword";
import OtpVerify from "@/screens/Auth/OtpVerify/OtpVerify";
import ResetPassword from "@/screens/Auth/ResetPassword/ResetPassword";

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={pathNames.auth.LOGIN} component={Login} />
      <Stack.Screen name={pathNames.auth.FORGOT_PASSWORD} component={ForgotPassword} />
      <Stack.Screen name={pathNames.auth.OTP_VERIFY} component={OtpVerify} />
      <Stack.Screen name={pathNames.auth.RESET_PASSWORD} component={ResetPassword} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
