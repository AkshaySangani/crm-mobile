import React from "react";
import { Pressable, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { AppCard, AppText } from "@/components";
import { Colors } from "@/theme";

import styles from "./styles";

interface ManualPunchProps {
  onPress?: () => void;
}

const ManualPunch = ({
  onPress,
}: ManualPunchProps) => {
  return (
    <AppCard style={styles.card}>
      <AppText
        size="lg"
        weight="bold"
      >
        Manual Punch
      </AppText>

      <Pressable
        onPress={onPress}
        style={styles.container}
      >
        {/* Icon */}
        <View style={styles.iconContainer}>
          <Ionicons
            name="time-outline"
            size={35}
            color={Colors.text.primary}
          />
        </View>

        {/* Content */}
        <View style={styles.content}>
          <AppText
            size="md"
            weight="semiBold"
          >
            Add Manual Punch
          </AppText>

          <AppText
            size="sm"
            color={Colors.text.secondary}
            style={styles.subtitle}
          >
            Tap to add check-in or check-out manually
          </AppText>
        </View>

        {/* Arrow */}
        <Ionicons
          name="chevron-forward"
          size={28}
          color={Colors.brand.primary}
        />
      </Pressable>
    </AppCard>
  );
};

export default ManualPunch;