import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "@/navigation/RootNavigator";
import { StatusBar } from "react-native";
import { ToastProvider } from "@/components/ui/Toast/ToastProvider";
import { SafeAreaProvider } from "react-native-safe-area-context";
import LocationPermissionGate from "@/components/layout/LocationPermissionGate/LocationPermissionGate";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function App() {
  return (
    <SafeAreaProvider>
      <ToastProvider>
        <NavigationContainer>
          <StatusBar
            barStyle="dark-content"
            backgroundColor="#FFFFFF"
          />

          <LocationPermissionGate>
            <RootNavigator />
          </LocationPermissionGate>
        </NavigationContainer>
      </ToastProvider>
    </SafeAreaProvider>
  );
}