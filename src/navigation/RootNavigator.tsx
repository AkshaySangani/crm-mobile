import React from "react";
import AuthNavigator from "./AuthNavigator";
import AppNavigator from "./AppNavigator";
import { useAuthStore } from "@/store/auth.store";

const RootNavigator = () => {
  const {isAuthenticated} = useAuthStore();

  return true ? <AppNavigator /> : <AuthNavigator />;
};

export default RootNavigator;
