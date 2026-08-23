import React, { ReactNode } from "react";
import {
  TouchableOpacity,
  ActivityIndicator,
  TouchableOpacityProps,
  View,
} from "react-native";
import { Colors, Radius, Sizes } from "@/theme";
import AppText from "../AppText";
import styles from "./styles";

type ButtonVariant = "primary" | "primaryBrand" | "secondary" | "danger";
interface AppButtonProps extends TouchableOpacityProps {
  title: string;
  loading?: boolean;
  variant?: ButtonVariant;
  fullWidth?: boolean;
  leftIcon?: ReactNode;
}

const AppButton = ({
  title,
  loading = false,
  variant = "primary",
  fullWidth = true,
  disabled,
  style,
  leftIcon,
  ...props
}: AppButtonProps) => {
  const isDisabled = disabled || loading;

  const backgroundColor = {
    primary: Colors.button.primary,
    primaryBrand: Colors.brand.primary,
    secondary: Colors.button.secondary,
    danger: Colors.button.danger,
  }[variant];

  const textColor = variant === "danger" ? Colors.error : Colors.common.white;

  return (
    <TouchableOpacity
      {...props}
      disabled={isDisabled}
      activeOpacity={0.8}
      style={[
        styles.button,
        {
          backgroundColor,
        },
        fullWidth && styles.fullWidth,
        isDisabled && styles.disabled,
        {
          borderRadius: Radius.md,
        },
        style,
      ]}
    >
      {loading ? (
        <ActivityIndicator size="small" color={Colors.common.white} />
      ) : (
        <View style={styles.buttonTextContainer}>
          {leftIcon}
          <AppText weight="semiBold" color={textColor}>
            {title}
          </AppText>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default AppButton;
