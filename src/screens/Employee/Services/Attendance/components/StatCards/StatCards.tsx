import React from "react";
import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppCard from "@/components/ui/AppCard";
import AppText from "@/components/ui/AppText";
import { Colors } from "@/theme";

import { styles } from "./styles";

type StatItem = {
  value: string;
  label: string;
  icon: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
  iconColor: string;
  iconBackground: string;
};

const stats: StatItem[] = [
  {
    value: "18",
    label: "Present Days",
    icon: "account-check-outline",
    iconColor: Colors.status.success,
    iconBackground: "#EAF8EF",
  },
  {
    value: "02",
    label: "Absent Days",
    icon: "account-remove-outline",
    iconColor: Colors.status.danger,
    iconBackground: "#FDEDED",
  },
  {
    value: "01",
    label: "Holiday Count",
    icon: "calendar-star",
    iconColor: Colors.status.warning,
    iconBackground: "#FFF3E8",
  },
  {
    value: "04",
    label: "Weekoff Count",
    icon: "calendar-week",
    iconColor: Colors.status.pending,
    iconBackground: "#F2EDFF",
  },
];

export default function StatCards() {
  return (
    <View style={styles.container}>
      {stats.map((item) => (
        <AppCard key={item.label} style={styles.card}>
          <View
            style={[
              styles.iconContainer,
              {
                backgroundColor: item.iconBackground,
              },
            ]}
          >
            <MaterialCommunityIcons
              name={item.icon}
              size={17}
              color={item.iconColor}
            />
          </View>

          <AppText
            size="md"
            weight="semiBold"
            color={Colors.text.primary}
            style={styles.value}
          >
            {item.value}
          </AppText>

          <AppText
            size="xs"
            color={Colors.text.secondary}
            numberOfLines={1}
          >
            {item.label}
          </AppText>
        </AppCard>
      ))}
    </View>
  );
}