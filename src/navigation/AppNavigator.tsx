import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AppStackParamList } from "./types";
import TabNavigator from "@/screens/Employee/TabNavigator/TabNavigator";

const Stack = createNativeStackNavigator<AppStackParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* Main Application */}
      <Stack.Screen
        name="MainTabs"
        component={TabNavigator}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
