import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "@/screens/Auth/Login/Login";
import { AuthStackParamList } from "./types";

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
