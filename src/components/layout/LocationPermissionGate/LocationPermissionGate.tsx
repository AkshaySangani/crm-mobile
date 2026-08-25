import React, { useCallback, useEffect, useState } from "react";

import {
  ActivityIndicator,
  AppState,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import * as Location from "expo-location";
import * as SplashScreen from "expo-splash-screen";

type Props = {
  children: React.ReactNode;
};

const LocationPermissionGate = ({ children }: Props) => {
  const [checking, setChecking] = useState(true);
  const [granted, setGranted] = useState(false);
  const [canAskAgain, setCanAskAgain] = useState(true);

  /**
   * Check current permission
   */
  const checkPermission = useCallback(async () => {
    try {
      setChecking(true);

      const permission = await Location.getForegroundPermissionsAsync();

      const isGranted = permission.status === Location.PermissionStatus.GRANTED;

      setGranted(isGranted);
      setCanAskAgain(permission.canAskAgain);
    } catch (error) {
      console.log("Location permission check error:", error);

      setGranted(false);
    } finally {
      setChecking(false);
    }
  }, []);

  /**
   * Request permission
   */
  const requestPermission = useCallback(async () => {
    try {
      setChecking(true);

      const permission = await Location.requestForegroundPermissionsAsync();

      const isGranted = permission.status === Location.PermissionStatus.GRANTED;

      setGranted(isGranted);
      setCanAskAgain(permission.canAskAgain);
    } catch (error) {
      console.log("Location permission request error:", error);

      setGranted(false);
    } finally {
      setChecking(false);
    }
  }, []);

  /**
   * Initial permission flow
   */
  useEffect(() => {
    const initialize = async () => {
      try {
        const permission = await Location.getForegroundPermissionsAsync();

        const isGranted =
          permission.status === Location.PermissionStatus.GRANTED;

        if (isGranted) {
          setGranted(true);
          setCanAskAgain(permission.canAskAgain);
          setChecking(false);

          await SplashScreen.hideAsync();
          return;
        }

        /**
         * Permission not granted.
         *
         * If the OS still allows us to ask,
         * show the native permission dialog.
         */
        if (permission.canAskAgain) {
          await requestPermission();
          await SplashScreen.hideAsync();
          return;
        }

        /**
         * Permission permanently denied.
         */
        setGranted(false);
        setCanAskAgain(false);
        setChecking(false);
        await SplashScreen.hideAsync();
      } catch (error) {
        console.log("Location initialization error:", error);

        setGranted(false);
        setChecking(false);
        await SplashScreen.hideAsync();
      }
    };

    initialize();
  }, [requestPermission]);

  /**
   * Re-check permission when returning
   * from Settings.
   */
  useEffect(() => {
    const subscription = AppState.addEventListener("change", (state) => {
      if (state === "active") {
        checkPermission();
      }
    });

    return () => {
      subscription.remove();
    };
  }, [checkPermission]);

  /**
   * Initial checking
   */
  if (checking) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#4483DF" />

        <Text style={styles.loadingText}>Checking location permission...</Text>
      </View>
    );
  }

  /**
   * Permission granted
   */
  if (granted) {
    return <>{children}</>;
  }

  /**
   * Permission not granted
   */
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Location Permission Required</Text>

        <Text style={styles.description}>
          Location permission is required to mark attendance. Please enable
          Location permission in Settings.
        </Text>

        {canAskAgain ? (
          <TouchableOpacity
            style={styles.button}
            onPress={requestPermission}
            activeOpacity={0.8}
          >
            <Text style={styles.buttonText}>Allow Location</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.button}
            onPress={() => Linking.openSettings()}
            activeOpacity={0.8}
          >
            <Text style={styles.buttonText}>Open Settings</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },

  content: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 24,
  },

  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#333333",
    textAlign: "center",
  },

  description: {
    marginTop: 12,
    fontSize: 16,
    lineHeight: 24,
    color: "#6C757D",
    textAlign: "center",
  },

  loadingText: {
    marginTop: 12,
    fontSize: 14,
    color: "#6C757D",
  },

  button: {
    marginTop: 32,
    height: 48,
    borderRadius: 8,
    backgroundColor: "#4483DF",
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default LocationPermissionGate;
