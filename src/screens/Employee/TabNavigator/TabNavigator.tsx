import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Dashboard from "@/screens/Dashboard/Dashboard";
import Tab from "@/components/ui/Tab/Tab";
import Menu from "@/screens/Menu/Menu";
import Services from "@/screens/Services/Services";

export type TabParamList = {
  Dashboard: undefined;
  Menu: undefined;
  Services: undefined;
  Notifications: undefined;
  Profile: undefined;
};

const TabNavigator =
  createBottomTabNavigator<TabParamList>();

export default function TabNavigatorComponent() {
  return (
    <TabNavigator.Navigator
      tabBar={(props) => <Tab {...props} />}
      screenOptions={{
        headerShown: false,

         // IMPORTANT
        // Do NOT give the navigation tab bar
        // a visible height/background.
        tabBarStyle: {
          position: "absolute",
          height: 0,
          backgroundColor: "transparent",
          borderTopWidth: 0,
          elevation: 0,
        },
      }}
    >
      <TabNavigator.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          title: "Home",
        }}
      />

      <TabNavigator.Screen
        name="Services"
        component={Services}
        options={{
          title: "Services",
        }}
      />

      <TabNavigator.Screen
        name="Menu"
        component={Menu}
        options={{
          title: "Menu",
        }}
      />
    </TabNavigator.Navigator>
  );
}