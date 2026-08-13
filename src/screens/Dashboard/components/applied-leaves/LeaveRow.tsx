import React from "react";
import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { AppText } from "@/components";
import { Colors } from "@/theme";
import styles from "./styles";
import StatusBadge from "@/components/ui/StatusBadge/StatusBadge";
import { statusEnum } from "@/utils/enums";



interface LeaveRowProps {
  type: string;
  date: string;
  status: string;
  statusColor: string;
  backgroundColor: string;
  iconColor: string;
}

const LeaveRow = ({
  type,
  date,
  status,
  statusColor,
  backgroundColor,
  iconColor,
}: LeaveRowProps) => {
  return (
    <View style={styles.leaveRow}>
      {/* Icon */}
      <View
        style={[
          styles.iconContainer,
          {
            backgroundColor,
          },
        ]}
      >
        <Ionicons
          name="calendar-outline"
          size={26}
          color={iconColor}
        />
      </View>

      {/* Leave Details */}
      <View style={styles.leaveContent}>
        <AppText
          size="sm"
          weight="semiBold"
        >
          {type}
        </AppText>

        <AppText
          size="xs"
          color={Colors.text.secondary}
          style={styles.date}
        >
          {date}
        </AppText>
      </View>

      {/* Status */}
      <StatusBadge status={statusEnum.APPROVED}/>
    </View>
  );
};

export default LeaveRow;