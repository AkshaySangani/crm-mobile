import React, { useState } from "react";
import { Pressable, View } from "react-native";
import { AppText, AppInput, AppButton } from "@/components";
import { Colors } from "@/theme/colors";
import styles from "./styles";
import { forgotPasswordApi, loginApi } from "@/apis/auth/auth.api";
import { regex } from "@/utils/validation-regex";
import { useAuthStore } from "@/store/auth.store";
import AuthLayout from "../layout";
import { Ionicons } from "@expo/vector-icons";
import { pathNames } from "@/utils/path-names";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigationProp } from "@/navigation/types";

const OtpVerify = () => {
  const navigation = useNavigation<AuthNavigationProp>();

  const [email, setEmail] = useState("");

  const [emailError, setEmailError] = useState("");

  const [loading, setLoading] = useState(false);

  // -----------------------------
  // Change Handlers
  // -----------------------------

  const handleEmailChange = (value: string) => {
    setEmail(value);

    // Clear error while typing
    if (emailError) {
      setEmailError("");
    }
  };

  // -----------------------------
  // Validation
  // -----------------------------

  const validateForm = () => {
    let isValid = true;

    setEmailError("");

    const trimmedEmail = email.trim();

    if (!trimmedEmail) {
      setEmailError("Email is required");
      isValid = false;
    } else if (!regex.email.test(trimmedEmail)) {
      setEmailError("Please enter a valid email");
      isValid = false;
    }

    return isValid;
  };

  // -----------------------------
  // OtpVerify
  // -----------------------------

  const handleOtpVerify = async () => {
    if (!validateForm()) {
      return;
    }

    try {
      setLoading(true);

      const response = await forgotPasswordApi({
        email: email.trim(),
      });

      console.log("OtpVerify response:", response);

      if (response.success) {
        // Navigate to home
        navigation.navigate(pathNames.auth.OTP_VERIFY, {
          email: email,
        });
      }
    } catch (error: any) {
      console.log("OtpVerify error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      title={
        <AppText size="xl" lineBreakMode="head" weight="bold">
          Forgot Password
        </AppText>
      }
    >
      <View style={styles.card}>
        <AppInput
          label="Email"
          placeholder="Enter your email"
          value={email}
          onChangeText={handleEmailChange}
          keyboardType="email-address"
          autoCapitalize="none"
          error={emailError}
        />

        <View style={styles.space} />

        <AppButton
          title="Submit"
          loading={loading}
          disabled={loading}
          onPress={handleOtpVerify}
        />

        <Pressable onPress={() => navigation.goBack()}>
          <AppText size="sm" color={Colors.link} style={styles.back}>
            <Ionicons name="arrow-back" size={16} color={Colors.link} /> Back to
            login
          </AppText>
        </Pressable>
      </View>
    </AuthLayout>
  );
};

export default OtpVerify;
