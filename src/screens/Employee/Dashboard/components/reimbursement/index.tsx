import React from "react";
import { Pressable, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { AppCard, AppText } from "@/components";
import { Colors } from "@/theme";

import styles from "./styles";
import UpArrow from "@/components/ui/UpArrow";
import StatusBadge from "@/components/ui/StatusBadge/StatusBadge";
import { statusEnum } from "@/utils/enums";

interface ReimbursementProps {
  onViewAll?: () => void;
}

const Reimbursement = ({
  onViewAll,
}: ReimbursementProps) => {
  return (
    <AppCard style={styles.card}>
      {/* Header */}
      <View style={styles.header}>
        <AppText
          size="lg"
          weight="bold"
        >
          Reimbursement
        </AppText>

        <UpArrow label="View All" onPress={onViewAll}/>
      </View>

      {/* Reimbursement */}
      <View style={styles.row}>
        {/* Icon */}
        <View style={styles.iconContainer}>
          <Ionicons
            name="wallet-outline"
            size={25}
            color="#7251D8"
          />
        </View>

        {/* Details */}
        <View style={styles.content}>
          <AppText
            size="md"
            weight="semiBold"
          >
            Travel Expense
          </AppText>

          <View style={styles.meta}>
            <AppText
              size="sm"
              color={Colors.text.secondary}
            >
              ₹ 1,250.00
            </AppText>

            <AppText
              size="sm"
              color={Colors.text.secondary}
            >
              •
            </AppText>

            <AppText
              size="sm"
              color={Colors.text.secondary}
            >
              28 May 2025
            </AppText>
          </View>
        </View>

        {/* Status */}
        <StatusBadge status={statusEnum.REJECTED}/>
      </View>
    </AppCard>
  );
};

export default Reimbursement;