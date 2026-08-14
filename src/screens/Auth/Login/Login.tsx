import React, { useState } from "react";
import { View } from "react-native";
import { Screen, AppText, AppInput, AppButton } from "@/components";
import { Colors } from "@/theme/colors";
import styles from "./styles";
import AppImage from "@/components/ui/AppImage";
import { loginApi } from "@/apis/auth/auth.api";
import { regex } from "@/utils/validation-regex";
import { useAuthStore } from "@/store/auth.store";
import { router } from "expo-router";

const Login = () => {
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
    setPasswordError("");

    const trimmedEmail = email.trim();

    if (!trimmedEmail) {
      setEmailError("Email is required");
      isValid = false;
    } else if (!regex.email.test(trimmedEmail)) {
      setEmailError("Please enter a valid email");
      isValid = false;
    }

    if (!password.trim()) {
      setPasswordError("Password is required");
      isValid = false;
    }

    return isValid;
  };

  // -----------------------------
  // Login
  // -----------------------------

  const handleLogin = async () => {
    if (!validateForm()) {
      return;
    }

    try {
      setLoading(true);

      const response = await loginApi({
        email: email.trim(),
        password,
      });

      console.log("Login response:", response);

      if (response.success) {
        // set into auth store
        login(response.data);

        // Navigate to home
        router.replace("/home");
      }
    } catch (error: any) {
      console.log("Login error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Screen>
      <View style={styles.container}>
        {/* Logo Section */}
        <View style={styles.logoContainer}>
          <View style={styles.logoBox}>
            <AppImage
              source={require("@/assets/images/IEKA-logo.jpeg")}
              contentFit="contain"
              containerStyle={{
                width: 120,
                height: 120,
              }}
            />
          </View>

          <View style={styles.titleContainer}>
            <AppText
              size="xl"
              lineBreakMode="head"
              weight="bold"
              style={styles.title}
            >
              Welcome, Let's{" "}
              <AppText
                size="xl"
                weight="bold"
                color={Colors.brand.primary}
                center
              >
                Sign In
              </AppText>
            </AppText>
          </View>
        </View>

        {/* Login Card */}
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

          <AppInput
            label="Password"
            placeholder="Enter your password"
            value={password}
            onChangeText={handlePasswordChange}
            password
            error={passwordError}
          />

          <AppText size="sm" color={Colors.link} style={styles.forgot}>
            Forgot Password?
          </AppText>

          <AppButton
            title="Login"
            loading={loading}
            disabled={loading}
            onPress={handleLogin}
          />
        </View>
      </View>
    </Screen>
  );
};

export default Login;
