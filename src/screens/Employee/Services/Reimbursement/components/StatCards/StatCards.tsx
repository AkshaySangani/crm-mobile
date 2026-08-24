import React from "react";
import { Pressable, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppCard from "@/components/ui/AppCard";
import AppText from "@/components/ui/AppText";
import { Colors } from "@/theme";

import { styles } from "./styles";

export type StatItem = {
  id: string;
  label: string;
  count: number;
  amount: number;
  icon: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
  iconColor: string;
  backgroundColor: string;
};

type StatCardsProps = {
  cards: StatItem[];
  activeStatus: string;
  onStatusChange: (status: string) => void;
};

const StatCards = ({ cards, activeStatus, onStatusChange }: StatCardsProps) => {
  return (
    <View style={styles.container}>
      {cards.map((item) => {
        const isActive = activeStatus === item.id;
        return (
        <AppCard key={item.label} style={[styles.card, {backgroundColor: isActive ? item.backgroundColor : ""}]}  onPress={() => onStatusChange(item.id)}>
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

          <AppText size="sm" weight="bold" color={Colors.text.primary}>
            {item.count}
          </AppText>

          <AppText size="xxs" color={Colors.text.secondary}>
            {item.label}
          </AppText>

          <AppText size="xs" weight="semiBold" color={Colors.brand.primary}>
            {item.amount}
          </AppText>
        </AppCard>
      )})}
    </View>
  );
};

export default StatCards;
