import React, { useState } from "react";
import { Pressable, View } from "react-native";
import { AppInput, AppButton, AppText } from "@/components";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigationProp } from "@/navigation/types";
import { pathNames } from "@/utils/path-names";
import { regex } from "@/utils/validation-regex";
import { resetPasswordApi } from "@/apis/auth/auth.api";
import AuthLayout from "../layout";
import styles from "./styles";
import { useAuthRoute } from "@/hooks/useAuthRoute";
import { Colors } from "@/theme";
import { Ionicons } from "@expo/vector-icons";

const ResetPassword = () => {
  const navigation = useNavigation<AuthNavigationProp>();

  const route = useAuthRoute<"ResetPassword">();

  const { token } = route.params;

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const [loading, setLoading] = useState(false);

  // -----------------------------
  // Change Handlers
  // -----------------------------

  const handlePasswordChange = (value: string) => {
    setPassword(value);

    if (passwordError) {
      setPasswordError("");
    }
  };

  const handleConfirmPasswordChange = (value: string) => {
    setConfirmPassword(value);

    if (confirmPasswordError) {
      setConfirmPasswordError("");
    }
  };

  // -----------------------------
  // Validation
  // -----------------------------

  const validateForm = () => {
    let isValid = true;

    setPasswordError("");
    setConfirmPasswordError("");

    if (!password.trim()) {
      setPasswordError("Password is required");
      isValid = false;
    } else if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters");
      isValid = false;
    }

    if (!confirmPassword.trim()) {
      setConfirmPasswordError("Please confirm your password");
      isValid = false;
    } else if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match");
      isValid = false;
    }

    return isValid;
  };

  // -----------------------------
  // Reset Password
  // -----------------------------

  const handleResetPassword = async () => {
    if (!validateForm()) {
      return;
    }

    try {
      setLoading(true);

      const response = await resetPasswordApi({
        token,
        password,
      });

      if (response.success) {
        navigation.replace(pathNames.auth.LOGIN);
      }
    } catch (error: any) {
      console.log("Reset password error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      title={
        <AppText size="xl" lineBreakMode="head" weight="bold">
          Reset Password
        </AppText>
      }
    >
      <View style={styles.card}>
        <AppInput
          label="New Password"
          placeholder="Enter new password"
          value={password}
          onChangeText={handlePasswordChange}
          password
          autoCapitalize="none"
          error={passwordError}
        />

        <View style={styles.space} />

        <AppInput
          label="Confirm Password"
          placeholder="Enter confirm password"
          value={confirmPassword}
          onChangeText={handleConfirmPasswordChange}
          password
          autoCapitalize="none"
          error={confirmPasswordError}
        />

        <View style={styles.space} />

        <AppButton
          title="Reset Password"
          loading={loading}
          disabled={loading}
          onPress={handleResetPassword}
        />
        <Pressable onPress={() => navigation.navigate(pathNames.auth.LOGIN)}>
          <AppText
            size="sm"
            color={Colors.link}
            style={styles.back}
          >
            <Ionicons
              name="arrow-back"
              size={16}
              color={Colors.link}
            />{" "}
            Back to Login
          </AppText>
        </Pressable>
      </View>
    </AuthLayout>
  );
};

export default ResetPassword;
