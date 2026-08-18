import * as Location from "expo-location";

export type UserLocation = {
  latitude: number;
  longitude: number;
};

export const getCurrentLocation = async (): Promise<UserLocation | null> => {
  try {
    // Check existing permission first
    const { status: existingStatus } =
      await Location.getForegroundPermissionsAsync();

    let status = existingStatus;

    // Ask only if permission hasn't been decided yet
    if (existingStatus === Location.PermissionStatus.UNDETERMINED) {
      const permission = await Location.requestForegroundPermissionsAsync();

      status = permission.status;
    }

    // User denied / restricted location
    if (status !== Location.PermissionStatus.GRANTED) {
      return null;
    }

    const location = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.High,
    });

    return {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    };
  } catch (error) {
    console.log("Location error:", error);

    // Location should never break the main functionality
    return null;
  }
};

//usecase
// const location = await getCurrentLocation();
