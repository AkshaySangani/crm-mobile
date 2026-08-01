import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Dashboard from "@/screens/Dashboard/Dashboard";
import { AppStackParamList } from "./types";

const Stack = createNativeStackNavigator<AppStackParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Dashboard" component={Dashboard} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
