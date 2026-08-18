import React from "react";
import { Pressable, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { AppCard, AppText } from "@/components";
import { Colors } from "@/theme";
import styles from "./styles";
import LeaveRow from "./LeaveRow";
import UpArrow from "@/components/ui/UpArrow";


interface AppliedLeaveProps {
  onViewAll?: () => void;
}

const AppliedLeave = ({
  onViewAll,
}: AppliedLeaveProps) => {
  return (
    <AppCard style={styles.card}>
      {/* Header */}
      <View style={styles.header}>
        <AppText
          size="lg"
          weight="bold"
        >
          Applied Leave
        </AppText>

        <UpArrow label="View All" onPress={onViewAll}/>
      </View>

      {/* Casual Leave */}
      <LeaveRow
        type="Casual Leave"
        date="02 Jun 2025"
        status="Approved"
        statusColor="#219653"
        backgroundColor="#E7F8EC"
        iconColor="#22A447"
      />

      <View style={styles.divider} />

      {/* Sick Leave */}
      <LeaveRow
        type="Sick Leave"
        date="05 Jun 2025"
        status="Pending"
        statusColor="#E89A00"
        backgroundColor="#FFF7DD"
        iconColor="#F2A400"
      />
    </AppCard>
  );
};

export default AppliedLeave;