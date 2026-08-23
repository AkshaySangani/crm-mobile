import React, { useState } from "react";
import { Pressable, View } from "react-native";
import { AppText, AppInput, AppButton } from "@/components";
import { Colors } from "@/theme/colors";
import styles from "./styles";
import { loginApi } from "@/apis/auth/auth.api";
import { regex } from "@/utils/validation-regex";
import { useAuthStore } from "@/store/auth.store";
import AuthLayout from "../layout";
import { pathNames } from "@/utils/path-names";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigationProp } from "@/navigation/types";

const Login = () => {
  const navigation = useNavigation<AuthNavigationProp>();

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

      console.log("response", response)

      if (response.success) {
        // set into auth store
        login(response.data);

        // Navigate to home
        // navigation.navigate("/home");
      }
    } catch (error: any) {
      console.log("Login error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      title={
        <AppText size="xl" lineBreakMode="head" weight="bold">
          Welcome, Let's{" "}
          <AppText size="xl" weight="bold" color={Colors.brand.primary} center>
            Sign In
          </AppText>
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

        <AppInput
          label="Password"
          placeholder="Enter your password"
          value={password}
          onChangeText={handlePasswordChange}
          password
          error={passwordError}
        />

        <Pressable
          onPress={() => navigation.navigate(pathNames.auth.FORGOT_PASSWORD)}
        >
          <AppText size="sm" color={Colors.link} style={styles.forgot}>
            Forgot Password?
          </AppText>
        </Pressable>

        <AppButton
          title="Login"
          loading={loading}
          disabled={loading}
          onPress={handleLogin}
        />
      </View>
    </AuthLayout>
  );
};

export default Login;
