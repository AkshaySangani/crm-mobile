import React, { useEffect, useState } from "react";
import { Pressable, View } from "react-native";
import { AppText, AppButton } from "@/components";
import { Colors } from "@/theme/colors";
import styles from "./styles";
import { forgotPasswordApi, verifyOtp } from "@/apis/auth/auth.api";
import { useAuthRoute } from "@/hooks/useAuthRoute";
import AuthLayout from "../layout";
import { Ionicons } from "@expo/vector-icons";
import { pathNames } from "@/utils/path-names";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigationProp } from "@/navigation/types";
import AppOtpInput from "@/components/ui/AppOtpInput/AppOtpInput";
import OtpInfoCard from "./components/OtpInfoCard/OtpInfoCard";

const OtpVerify = () => {
  const navigation = useNavigation<AuthNavigationProp>();
  const route = useAuthRoute<"OtpVerify">();

  const { email } = route.params;

  const [otp, setOtp] = useState("");
  const [otpError, setOtpError] = useState("");
  const [loading, setLoading] = useState(false);

  // Resend OTP states
  const [resendLoading, setResendLoading] = useState(false);
  const [resendTimer, setResendTimer] = useState(60);

  // ----------------------------------
  // Resend OTP Timer
  // ----------------------------------

  useEffect(() => {
    if (resendTimer <= 0) {
      return;
    }

    const timer = setInterval(() => {
      setResendTimer((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [resendTimer]);

  // ----------------------------------
  // Change Handlers
  // ----------------------------------

  const handleOtpChange = (value: string) => {
    setOtp(value);

    if (otpError) {
      setOtpError("");
    }
  };

  // ----------------------------------
  // Validation
  // ----------------------------------

  const validateForm = () => {
    let isValid = true;

    setOtpError("");

    if (!otp) {
      setOtpError("Otp is required");
      isValid = false;
    }

    return isValid;
  };

  // ----------------------------------
  // Verify OTP
  // ----------------------------------

  const handleVerifyOtp = async () => {
    if (!validateForm()) {
      return;
    }

    try {
      setLoading(true);

      const response = await verifyOtp({
        email: email.trim(),
        otp,
      });

      if (response.success) {
        navigation.navigate(pathNames.auth.RESET_PASSWORD, {
          token: response?.data?.resetToken,
        });
      }
    } catch (error: any) {
      console.log("Verify OTP error:", error);
    } finally {
      setLoading(false);
    }
  };

  // ----------------------------------
  // Resend OTP
  // ----------------------------------

  const handleResendOtp = async () => {
    if (resendTimer > 0 || resendLoading) {
      return;
    }

    try {
      setResendLoading(true);

      const response = await forgotPasswordApi({
        email: email.trim(),
      });

      if (response.success) {
        // Clear old OTP
        setOtp("");
        setOtpError("");

        // Restart 1 minute timer
        setResendTimer(60);
      }
    } catch (error: any) {
      console.log("Resend OTP error:", error);
    } finally {
      setResendLoading(false);
    }
  };

  return (
    <AuthLayout
      title={
        <AppText size="xl" lineBreakMode="head" weight="bold">
          Verify OTP
        </AppText>
      }
    >
      <View style={styles.card}>
        <OtpInfoCard email={email} />

        <View style={styles.space} />

        <AppOtpInput
          value={otp}
          onChangeText={handleOtpChange}
          error={otpError}
        />

        {/* Resend OTP */}
        <View style={styles.resendContainer}>
          {resendTimer > 0 ? (
            <AppText size="sm" color={Colors.text.secondary}>
              Resend OTP in{" "}
              <AppText
                size="sm"
                weight="bold"
                color={Colors.brand.primary}
              >
                {resendTimer}s
              </AppText>
            </AppText>
          ) : (
            <Pressable
              onPress={handleResendOtp}
              disabled={resendLoading}
            >
              <AppText
                size="sm"
                weight="bold"
                color={Colors.brand.primary}
              >
                {resendLoading ? "Sending..." : "Resend OTP"}
              </AppText>
            </Pressable>
          )}
        </View>

        <View style={styles.space} />

        <AppButton
          title="Submit"
          loading={loading}
          disabled={loading}
          onPress={handleVerifyOtp}
        />

        <Pressable onPress={() => navigation.goBack()}>
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
            Back
          </AppText>
        </Pressable>
      </View>
    </AuthLayout>
  );
};

export default OtpVerify;