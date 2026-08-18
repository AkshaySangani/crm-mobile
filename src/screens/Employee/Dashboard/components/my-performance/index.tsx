import React from "react";
import { Pressable, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { AppCard, AppText } from "@/components";
import { Colors } from "@/theme";

import styles from "./styles";
import PerformanceRow from "./PerformanceRow";
import Table from "@/components/ui/AppTable";
import { TableColumn } from "@/components/ui/AppTable/AppTable";
import UpArrow from "@/components/ui/UpArrow";

interface MyPerformanceProps {
  onViewAll?: () => void;
}

interface Performance {
  date: string;
  day: string;
  checkIn: string;
  checkOut: string;
  total: string;
}

const performanceData: Performance[] = [
  {
    date: "31 May 2025",
    day: "Saturday",
    checkIn: "09:02 AM",
    checkOut: "06:01 PM",
    total: "08h 59m",
  },
  {
    date: "30 May 2025",
    day: "Friday",
    checkIn: "09:10 AM",
    checkOut: "06:15 PM",
    total: "09h 05m",
  },
];

const MyPerformance = ({ onViewAll }: MyPerformanceProps) => {
  const performanceColumns: TableColumn<Performance>[] = [
    {
      key: "date",
      title: "Date",
      width: 150,
    },
    {
      key: "day",
      title: "Day",
      width: 120,
    },
    {
      key: "checkIn",
      title: "Check In",
      width: 120,
    },
    {
      key: "checkOut",
      title: "Check Out",
      width: 120,
    },
    {
      key: "total",
      title: "Total",
      width: 110,
    },
  ];
  return (
    <AppCard padding={false} style={styles.card}>
      {/* Header */}
      <View style={styles.header}>
        <AppText size="lg" weight="bold">
          My Performance
        </AppText>

        <UpArrow label="View All" onPress={onViewAll}/>
      </View>

      {/* Performance Rows */}
      <PerformanceRow
        date="31 May 2025"
        day="Saturday"
        checkIn="09:02 AM"
        checkOut="06:01 PM"
        total="08h 59m"
      />

      <View style={styles.divider} />

      <PerformanceRow
        date="30 May 2025"
        day="Friday"
        checkIn="09:10 AM"
        checkOut="06:15 PM"
        total="09h 05m"
      />
    </AppCard>
  );
};

export default MyPerformance;
