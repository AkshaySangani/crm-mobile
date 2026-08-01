import React, { useState } from "react";
import { View } from "react-native";
import { Screen, AppText, AppInput, AppButton, AppCard } from "@/components";
import { Colors } from "@/theme/colors";
import styles from "./styles";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);

    try {
      console.log({
        email,
        password,
      });

      // API call later
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
            <AppText size="xl" weight="bold" color={Colors.common.white}>
              CRM
            </AppText>
          </View>

          <AppText size="xl" weight="bold" style={styles.title}>
            Welcome Back
          </AppText>

          <AppText size="sm" color={Colors.text.secondary} center>
            Login to manage your account
          </AppText>
        </View>

        {/* Login Card */}

        <AppCard style={styles.card}>
          <AppInput
            label="Email"
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <View style={styles.space} />

          <AppInput
            label="Password"
            placeholder="Enter your password"
            value={password}
            onChangeText={setPassword}
            password
          />

          <AppText size="sm" color={Colors.link} style={styles.forgot}>
            Forgot Password?
          </AppText>

          <AppButton title="Login" loading={loading} onPress={handleLogin} />
        </AppCard>
      </View>
    </Screen>
  );
};

export default Login;
