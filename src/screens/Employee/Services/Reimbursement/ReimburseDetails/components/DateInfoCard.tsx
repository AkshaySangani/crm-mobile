import React from "react";
import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppCard from "@/components/ui/AppCard";
import AppText from "@/components/ui/AppText";
import { Colors } from "@/theme";
import { styles } from "../styles";

interface Props {
  requestDate: string;
  expenseDate: string;
}

const DateInfoCard = ({
  requestDate,
  expenseDate,
}: Props) => {
  const renderDate = (
    label: string,
    value: string
  ) => (
    <View style={styles.dateItem}>
      <View style={styles.dateIcon}>
        <MaterialCommunityIcons
          name="calendar-check-outline"
          size={25}
          color={Colors.brand.primary}
        />
      </View>

      <View style={styles.dateInfo}>
        <AppText style={styles.dateLabel}>
          {label}
        </AppText>

        <AppText style={styles.dateValue}>
          {value}
        </AppText>
      </View>
    </View>
  );

  return (
    <AppCard style={styles.dateCard}>
      <View style={styles.dateRow}>
        {renderDate("Request Date", requestDate)}

        <View style={styles.dateDivider} />

        {renderDate("Expense Date", expenseDate)}
      </View>
    </AppCard>
  );
};

export default DateInfoCard;