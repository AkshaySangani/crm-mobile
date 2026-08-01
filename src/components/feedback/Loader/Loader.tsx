import React from "react";
import { View, ActivityIndicator } from "react-native";
import AppText from "@/components/ui/AppText/AppText";
import { Colors } from "@/theme/colors";
import styles from "./styles";

interface LoaderProps {
  text?: string;
  fullScreen?: boolean;
}

const Loader = ({ text, fullScreen = false }: LoaderProps) => {
  return (
    <View style={[styles.container, fullScreen && styles.fullScreen]}>
      <ActivityIndicator size="large" color={Colors.brand.primary} />

      {text && (
        <AppText size="sm" color={Colors.text.secondary} style={styles.text}>
          {text}
        </AppText>
      )}
    </View>
  );
};

export default Loader;
