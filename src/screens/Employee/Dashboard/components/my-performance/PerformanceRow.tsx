import React from "react";
import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { AppText } from "@/components";
import { Colors } from "@/theme";

import styles from "./styles";

interface PerformanceRowProps {
  date: string;
  day: string;
  checkIn: string;
  checkOut: string;
  total: string;
}

const PerformanceRow = ({
  date,
  day,
  checkIn,
  checkOut,
  total,
}: PerformanceRowProps) => {
  return (
    <View style={styles.performanceRow}>

      {/* Date */}
      <View style={styles.dateContainer}>
        <AppText
          size="sm"
          weight="semiBold"
        >
          {date}
        </AppText>

        <AppText
          size="xs"
          color={Colors.text.secondary}
          style={styles.day}
        >
          {day}
        </AppText>
      </View>

      {/* Check In */}
      <PerformanceTime
        title="Check In"
        value={checkIn}
        color="#219653"
      />

      {/* Check Out */}
      <PerformanceTime
        title="Check Out"
        value={checkOut}
        color="#E53935"
      />

      {/* Total */}
      <PerformanceTime
        title="Total"
        value={total}
        color={Colors.brand.primary}
      />
    </View>
  );
};

interface PerformanceTimeProps {
  title: string;
  value: string;
  color: string;
}

const PerformanceTime = ({
  title,
  value,
  color,
}: PerformanceTimeProps) => {
  return (
    <View style={styles.timeContainer}>
      <AppText
        size="xs"
        color={Colors.text.secondary}
      >
        {title}
      </AppText>

      <AppText
        size="xs"
        weight="semiBold"
        color={color}
        style={styles.timeValue}
      >
        {value}
      </AppText>
    </View>
  );
};

export default PerformanceRow;