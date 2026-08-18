import React from "react";
import { Pressable, View, ViewProps } from "react-native";
import styles from "./styles";

interface AppCardProps extends ViewProps {
  padding?: boolean;
  onPress?: () => void;
}

const AppCard = ({
  children,
  padding = true,
  style,
  onPress,
  ...props
}: AppCardProps) => {
  return (
    <Pressable {...props} style={[styles.card, padding && styles.padding, style]} onPress={onPress}>
      {children}
    </Pressable>
  );
};

export default AppCard;
