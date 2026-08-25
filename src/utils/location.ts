import * as Location from "expo-location";

export const checkLocationPermission = async () => {
  const { status, canAskAgain } =
    await Location.getForegroundPermissionsAsync();

  return {
    granted: status === Location.PermissionStatus.GRANTED,
    canAskAgain,
  };
};

export const requestLocationPermission = async () => {
  const { status, canAskAgain } =
    await Location.requestForegroundPermissionsAsync();

  return {
    granted: status === Location.PermissionStatus.GRANTED,
    canAskAgain,
  };
};
