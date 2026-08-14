import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Dashboard from "@/screens/Dashboard/Dashboard";
import { AppStackParamList } from "./types";
import Services from "@/screens/Services/Services";
import Menu from "@/screens/Menu/Menu";

const Stack = createNativeStackNavigator<AppStackParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* <Stack.Screen name="Dashboard" component={Dashboard} /> */}
      <Stack.Screen name="Dashboard" component={Menu} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
