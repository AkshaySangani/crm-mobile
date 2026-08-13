import React from "react";
import AuthNavigator from "./AuthNavigator";
import AppNavigator from "./AppNavigator";

const RootNavigator = () => {
  const isLoggedIn = true;

  return isLoggedIn ? <AppNavigator /> : <AuthNavigator />;
};

export default RootNavigator;
