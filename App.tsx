import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "@/navigation/RootNavigator";
import { StatusBar } from "react-native";
import { ToastProvider } from "@/components/ui/Toast/ToastProvider";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
    <ToastProvider>
    <NavigationContainer>
      <StatusBar barStyle="light-content" />
      <RootNavigator />
    </NavigationContainer>
    </ToastProvider>
    </SafeAreaProvider>
  );
}
