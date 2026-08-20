import React from "react";
import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppCard from "@/components/ui/AppCard";
import AppText from "@/components/ui/AppText";
import { Colors } from "@/theme";

import { styles } from "./styles";

type StatItem = {
  label: string;
  count: string;
  amount: string;
  icon: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
  iconColor: string;
  backgroundColor: string;
};

const stats: StatItem[] = [
  {
    label: "Total Requests",
    count: "12",
    amount: "₹ 48,750",
    icon: "calendar-check-outline",
    iconColor: "#4CAF50",
    backgroundColor: "#EAF7EC",
  },
  {
    label: "Approved",
    count: "06",
    amount: "₹ 26,250",
    icon: "check-circle-outline",
    iconColor: "#3D7BFF",
    backgroundColor: "#EDF3FF",
  },
  {
    label: "Pending",
    count: "03",
    amount: "₹ 12,500",
    icon: "clock-outline",
    iconColor: "#FF9F43",
    backgroundColor: "#FFF4E8",
  },
  {
    label: "Rejected",
    count: "03",
    amount: "₹ 10,000",
    icon: "close-circle-outline",
    iconColor: "#FF4D4F",
    backgroundColor: "#FFF0F0",
  },
];

const StatCards = () => {
  return (
    <View style={styles.container}>
      {stats.map((item) => (
        <AppCard key={item.label} style={styles.card}>
          <View
            style={[
              styles.iconContainer,
              {
                backgroundColor: item.backgroundColor,
              },
            ]}
          >
            <MaterialCommunityIcons
              name={item.icon}
              size={14}
              color={item.iconColor}
            />
          </View>

          <AppText
            size="sm"
            weight="bold"
            color={Colors.text.primary}
          >
            {item.count}
          </AppText>

          <AppText
            size="xxs"
            color={Colors.text.secondary}
          >
            {item.label}
          </AppText>

          <AppText
            size="xs"
            weight="semiBold"
            color={Colors.brand.primary}
          >
            {item.amount}
          </AppText>
        </AppCard>
      ))}
    </View>
  );
};

export default StatCards;