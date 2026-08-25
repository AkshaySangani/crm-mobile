import React, { useCallback, useState } from "react";
import {
  ActivityIndicator,
  AppState,
  Linking,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";

import {
  checkLocationPermission,
  requestLocationPermission,
} from "@/utils/location";


export default function LocationPermissionScreen() {
  const [checking, setChecking] = useState(true);
  const [canAskAgain, setCanAskAgain] = useState(true);

  const checkPermission = async () => {
    try {
      setChecking(true);

      const result = await checkLocationPermission();

      setCanAskAgain(result.canAskAgain);

      if (result.granted) {
        // We will handle navigation here next.
        return;
      }
    } finally {
      setChecking(false);
    }
  };

  const requestPermission = async () => {
    try {
      setChecking(true);

      const result = await requestLocationPermission();

      setCanAskAgain(result.canAskAgain);

      if (result.granted) {
        // We will navigate to the app here next.
        return;
      }
    } finally {
      setChecking(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      checkPermission();
    }, []),
  );

  React.useEffect(() => {
    const subscription = AppState.addEventListener("change", (state) => {
      if (state === "active") {
        checkPermission();
      }
    });

    return () => {
      subscription.remove();
    };
  }, []);

  if (checking) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
        <Text style={styles.loadingText}>Checking location permission...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Location Permission Required</Text>

        <Text style={styles.description}>
          Location permission is required to mark attendance. Please enable
          Location permission in Settings.
        </Text>

        {canAskAgain ? (
          <Text style={styles.button} onPress={requestPermission}>
            Allow Location
          </Text>
        ) : (
          <Text style={styles.button} onPress={() => Linking.openSettings()}>
            Open Settings
          </Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  content: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 24,
  },

  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },

  loadingText: {
    marginTop: 12,
    fontSize: 14,
    color: "#6C757D",
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

  button: {
    marginTop: 32,
    paddingVertical: 14,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
    color: "#FFFFFF",
    backgroundColor: "#4483DF",
    borderRadius: 8,
    overflow: "hidden",
  },
});
