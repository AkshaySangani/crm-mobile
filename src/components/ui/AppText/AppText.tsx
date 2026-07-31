import React from "react";
import { Text, TextProps } from "react-native";
import { Colors, FontSize, FontWeight } from "@/theme";
import styles from "./styles";

type Size = keyof typeof FontSize;
type Weight = keyof typeof FontWeight;

interface AppTextProps extends TextProps {
  size?: Size;
  weight?: Weight;
  color?: string;
  center?: boolean;
}

const AppText = ({
  children,
  size = "md",
  weight = "regular",
  color = Colors.text.primary,
  center = false,
  style,
  ...props
}: AppTextProps) => {
  return (
    <Text
      {...props}
      style={[
        styles.text,
        {
          fontSize: FontSize[size],
          fontWeight: FontWeight[weight],
          color,
          textAlign: center ? "center" : "left",
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
};

export default AppText;
