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

const ForgotPassword = () => {
  const navigation =
    useNavigation<AuthNavigationProp>();
  const login = useAuthStore((state) => state.login);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

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

  const handlePasswordChange = (value: string) => {
    setPassword(value);

    // Clear error while typing
    if (passwordError) {
      setPasswordError("");
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
  // ForgotPassword
  // -----------------------------

  const handleForgotPassword = async () => {
    if (!validateForm()) {
      return;
    }

    try {
      setLoading(true);

      const response = await forgotPasswordApi({
        email: email.trim(),
      });

      console.log("ForgotPassword response:", response);

      if (response.success) {
        // set into auth store
        // login(response.data);

        // Navigate to home
        // navigation.navigate("/home");
      }
    } catch (error: any) {
      console.log("ForgotPassword error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout>
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
          onPress={handleForgotPassword}
        />
        
        <Pressable onPress={() => navigation.goBack()}><AppText size="sm" color={Colors.link} style={styles.back}>
          <Ionicons name="arrow-back" size={16} color={Colors.link} /> Back to login
        </AppText>
        </Pressable>
      </View>
    </AuthLayout>
  );
};

export default ForgotPassword;
