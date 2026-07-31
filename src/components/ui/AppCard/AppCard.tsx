import React from "react";
import { View, ViewProps } from "react-native";
import styles from "./styles";

interface AppCardProps extends ViewProps {
  padding?: boolean;
}

const AppCard = ({
  children,
  padding = true,
  style,
  ...props
}: AppCardProps) => {
  return (
    <View {...props} style={[styles.card, padding && styles.padding, style]}>
      {children}
    </View>
  );
};

export default AppCard;
