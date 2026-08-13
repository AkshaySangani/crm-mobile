import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { View, Pressable } from "react-native";

import { AppCard, AppText } from "@/components";
import { Colors, Radius, Spacing } from "@/theme";

import styles from "./styles";

interface ManualCheckInProps {
  onPress?: () => void;
}

const ManualCheckIn = ({
  onPress,
}: ManualCheckInProps) => {
  return (
    <AppCard
      padding={false}
      style={styles.card}
    >
      <Pressable
        onPress={onPress}
        style={styles.container}
      >
        {/* Icon */}
        <View style={styles.iconContainer}>
          <Ionicons
            name="finger-print-outline"
            size={44}
            color={Colors.text.primary}
          />
        </View>

        {/* Content */}
        <View style={styles.content}>
          <AppText
            size="lg"
            weight="bold"
          >
            Manual Check-In
          </AppText>

          <AppText
            size="sm"
            color={Colors.text.secondary}
            style={styles.subtitle}
          >
            Tap to check-in for today
          </AppText>
        </View>

        {/* Arrow */}
        <Ionicons
          name="chevron-forward"
          size={26}
          color={Colors.brand.primary}
        />
      </Pressable>
    </AppCard>
  );
};

export default ManualCheckIn;