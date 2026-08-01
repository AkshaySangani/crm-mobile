import React from "react";
import AuthNavigator from "./AuthNavigator";
import AppNavigator from "./AppNavigator";

const RootNavigator = () => {
  const isLoggedIn = false;

  return isLoggedIn ? <AppNavigator /> : <AuthNavigator />;
};

export default RootNavigator;
