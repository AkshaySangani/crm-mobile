import React from "react";
import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AppText } from "@/components";
import { Colors } from "@/theme/colors";
import styles from "./styles";
import { maskEmail } from "@/utils/helper";

interface OtpInfoCardProps {
  email: string;
}

const OtpInfoCard = ({ email }: OtpInfoCardProps) => {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name="cellphone"
        size={22}
        color={Colors.brand.primary}
        style={styles.icon}
      />

      <View style={styles.content}>
        <AppText size="sm" color={Colors.brand.primary}>
          OTP has been sent to the registered email
        </AppText>

        <AppText size="sm" color={Colors.brand.primary}>
          id.{" "}
          <AppText size="sm" weight="bold" color={Colors.text.primary}>
            {maskEmail(email)}
          </AppText>
        </AppText>
      </View>
    </View>
  );
};

export default OtpInfoCard;