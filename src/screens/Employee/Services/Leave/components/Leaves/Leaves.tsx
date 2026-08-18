import React from "react";
import {
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { styles } from "./styles";
import { Colors } from "@/theme";
import { AppCard, AppText } from "@/components";

type LeaveStatus = "Approved" | "Pending" | "Rejected";

interface LeaveItem {
  id: number;
  type: string;
  startDate: string;
  endDate?: string;
  days: string;
  appliedOn: string;
  status: LeaveStatus;
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
  iconColor: string;
  iconBackground: string;
}

const leaveHistory: LeaveItem[] = [
  {
    id: 1,
    type: "Annual Leave",
    startDate: "May 26",
    endDate: "May 28, 2025",
    days: "3 Days",
    appliedOn: "May 20, 2025",
    status: "Approved",
    icon: "palm-tree",
    iconColor: Colors.status.success,
    iconBackground: Colors.statusLight.success,
  },
  {
    id: 2,
    type: "Sick Leave",
    startDate: "May 15",
    endDate: "May 16, 2025",
    days: "2 Days",
    appliedOn: "May 14, 2025",
    status: "Pending",
    icon: "briefcase-plus-outline",
    iconColor: Colors.status.pending,
    iconBackground: Colors.statusLight.pending,
  },
  {
    id: 3,
    type: "Annual Leave",
    startDate: "Apr 21",
    endDate: "Apr 23, 2025",
    days: "3 Days",
    appliedOn: "Apr 18, 2025",
    status: "Approved",
    icon: "palm-tree",
    iconColor: Colors.status.success,
    iconBackground: Colors.statusLight.success,
  },
  {
    id: 4,
    type: "Personal Leave",
    startDate: "Apr 10, 2025",
    days: "1 Day",
    appliedOn: "Apr 08, 2025",
    status: "Rejected",
    icon: "account-remove-outline",
    iconColor: Colors.status.danger,
    iconBackground: Colors.statusLight.danger,
  },
  {
    id: 5,
    type: "Sick Leave",
    startDate: "Mar 25",
    endDate: "Mar 27, 2025",
    days: "3 Days",
    appliedOn: "Mar 24, 2025",
    status: "Approved",
    icon: "briefcase-plus-outline",
    iconColor: Colors.status.pending,
    iconBackground: Colors.statusLight.pending,
  },
  {
    id: 6,
    type: "Annual Leave",
    startDate: "Mar 10",
    endDate: "Mar 11, 2025",
    days: "2 Days",
    appliedOn: "Mar 07, 2025",
    status: "Pending",
    icon: "palm-tree",
    iconColor: Colors.status.success,
    iconBackground: Colors.statusLight.success,
  },
];

const statusConfig = {
  Approved: {
    color: Colors.status.success,
    background: Colors.statusLight.success,
  },
  Pending: {
    color: Colors.status.warning,
    background: Colors.statusLight.warning,
  },
  Rejected: {
    color: Colors.status.danger,
    background: Colors.statusLight.danger,
  },
};

export default function Leaves({onAddLeave}: {onAddLeave: () => void}) {
  return (
    <View style={styles.container}>
        {/* Filters */}
        <View style={styles.filtersRow}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.filterButton}
          >
            <MaterialCommunityIcons
              name="calendar-outline"
              size={21}
              color={Colors.brand.primary}
            />

            <AppText
              size="sm"
              color={Colors.text.primary}
              style={styles.filterText}
            >
              All Types
            </AppText>

            <MaterialCommunityIcons
              name="chevron-down"
              size={22}
              color={Colors.brand.primary}
            />
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.filterButton}
          >
            <MaterialCommunityIcons
              name="calendar-outline"
              size={21}
              color={Colors.brand.primary}
            />

            <AppText
              size="sm"
              color={Colors.text.primary}
              style={styles.filterText}
            >
              2025
            </AppText>

            <MaterialCommunityIcons
              name="chevron-down"
              size={22}
              color={Colors.brand.primary}
            />
          </TouchableOpacity>
        </View>

        {/* Statistics */}
        <AppCard style={styles.statsCard}>
          <StatItem
            icon="calendar-check-outline"
            iconColor={Colors.status.success}
            iconBackground={Colors.statusLight.success}
            value="12"
            label="Total Leaves"
            valueColor={Colors.status.success}
          />

          <View style={styles.statDivider} />

          <StatItem
            icon="check-circle-outline"
            iconColor={Colors.brand.primary}
            iconBackground={Colors.brand.primaryLight}
            value="06"
            label="Approved"
          />

          <View style={styles.statDivider} />

          <StatItem
            icon="clock-outline"
            iconColor={Colors.status.warning}
            iconBackground={Colors.statusLight.warning}
            value="03"
            label="Pending"
          />

          <View style={styles.statDivider} />

          <StatItem
            icon="close-circle-outline"
            iconColor={Colors.status.danger}
            iconBackground={Colors.statusLight.danger}
            value="03"
            label="Rejected"
          />
        </AppCard>

        {/* History */}
        <AppText
          size="md"
          weight="semiBold"
          color={Colors.text.primary}
          style={styles.historyTitle}
        >
          Leave History
        </AppText>

        <View style={styles.historyList}>
          {leaveHistory.map((leave) => (
            <LeaveHistoryCard
              key={leave.id}
              leave={leave}
            />
          ))}
        </View>

      {/* Floating Action Button */}
      <TouchableOpacity
        activeOpacity={0.85}
        style={styles.fab}
        onPress={onAddLeave}
      >
        <MaterialCommunityIcons
          name="plus"
          size={32}
          color={Colors.common.white}
        />
      </TouchableOpacity>
    </View>
  );
}

interface StatItemProps {
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
  iconColor: string;
  iconBackground: string;
  value: string;
  label: string;
  valueColor?: string;
}

function StatItem({
  icon,
  iconColor,
  iconBackground,
  value,
  label,
  valueColor,
}: StatItemProps) {
  return (
    <View style={styles.statItem}>
      <View
        style={[
          styles.statIcon,
          {
            backgroundColor: iconBackground,
          },
        ]}
      >
        <MaterialCommunityIcons
          name={icon}
          size={23}
          color={iconColor}
        />
      </View>

      <AppText
        size="lg"
        weight="semiBold"
        color={valueColor ?? Colors.text.primary}
        style={styles.statValue}
      >
        {value}
      </AppText>

      <AppText
        size="xs"
        color={Colors.text.secondary}
        numberOfLines={1}
      >
        {label}
      </AppText>
    </View>
  );
}

interface LeaveHistoryCardProps {
  leave: LeaveItem;
}

function LeaveHistoryCard({
  leave,
}: LeaveHistoryCardProps) {
  const status = statusConfig[leave.status];

  return (
    <AppCard style={styles.leaveCard}>
      {/* Icon */}
      <View
        style={[
          styles.leaveIcon,
          {
            backgroundColor: leave.iconBackground,
          },
        ]}
      >
        <MaterialCommunityIcons
          name={leave.icon}
          size={27}
          color={leave.iconColor}
        />
      </View>

      {/* Main Information */}
      <View style={styles.leaveInfo}>
        <AppText
          size="sm"
          weight="semiBold"
          color={Colors.text.primary}
          numberOfLines={1}
        >
          {leave.type}
        </AppText>

        <AppText
          size="xs"
          color={Colors.text.secondary}
          style={styles.dateText}
          numberOfLines={1}
        >
          {leave.endDate
            ? `${leave.startDate} – ${leave.endDate}`
            : leave.startDate}
        </AppText>

        <AppText
          size="xs"
          color={Colors.text.secondary}
          style={styles.daysText}
        >
          {leave.days}
        </AppText>
      </View>

      {/* Right Information */}
      <View style={styles.leaveRight}>
        <View
          style={[
            styles.statusBadge,
            {
              backgroundColor: status.background,
            },
          ]}
        >
          <AppText
            size="xs"
            weight="semiBold"
            color={status.color}
          >
            {leave.status}
          </AppText>
        </View>

        <AppText
          size="xs"
          color={Colors.text.secondary}
          style={styles.appliedLabel}
        >
          Applied on
        </AppText>

        <AppText
          size="xs"
          color={Colors.text.secondary}
          numberOfLines={1}
        >
          {leave.appliedOn}
        </AppText>
      </View>

      {/* Arrow */}
      <MaterialCommunityIcons
        name="chevron-right"
        size={25}
        color={Colors.brand.primary}
        style={styles.arrow}
      />
    </AppCard>
  );
}