import React, { useState } from "react";
import {
  View,
  TextInput,
  TextInputProps,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AppText from "../AppText";
import { Colors, Radius } from "@/theme";
import styles from "./styles";

interface AppInputProps extends TextInputProps {
  label?: string;
  error?: string;
  password?: boolean;
  leftIcon?: keyof typeof Ionicons.glyphMap;
  rightIcon?: keyof typeof Ionicons.glyphMap;
}

const AppInput = ({
  label,
  error,
  password = false,
  leftIcon,
  rightIcon,
  style,
  secureTextEntry,
  ...props
}: AppInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.wrapper}>
      {label && (
        <AppText size="sm" color={Colors.input.label} style={styles.label}>
          {label}
        </AppText>
      )}

      <View
        style={[
          styles.container,
          error && styles.errorBorder,
          props.editable === false && styles.disabled,
        ]}
      >
        {leftIcon && (
          <Ionicons
            name={leftIcon}
            size={20}
            color={Colors.text.secondary}
            style={styles.leftIcon}
          />
        )}

        <TextInput
          {...props}
          style={[styles.input, style]}
          placeholderTextColor={Colors.text.placeholder}
          secureTextEntry={password ? !showPassword : secureTextEntry}
        />

        {password ? (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Ionicons
              name={showPassword ? "eye-outline" : "eye-off-outline"}
              size={22}
              color={Colors.text.secondary}
            />
          </TouchableOpacity>
        ) : (
          rightIcon && (
            <Ionicons
              name={rightIcon}
              size={20}
              color={Colors.text.secondary}
            />
          )
        )}
      </View>

      {error && (
        <AppText size="xs" color={Colors.error} style={styles.error}>
          {error}
        </AppText>
      )}
    </View>
  );
};

export default AppInput;
