import React from "react";
import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppCard from "@/components/ui/AppCard";
import AppText from "@/components/ui/AppText";
import { Colors } from "@/theme";

import { styles } from "./styles";

type AttendanceType =
  | "present"
  | "late"
  | "holiday"
  | "weekoff";

type AttendanceItem = {
  date: string;
  day: string;
  type: AttendanceType;
  checkIn?: string;
  checkOut?: string;
  totalHours?: string;
  checkInNote?: string;
  checkOutNote?: string;
  title?: string;
  subtitle?: string;
};

const attendanceData: AttendanceItem[] = [
  {
    date: "31",
    day: "Sat",
    type: "present",
    checkIn: "09:02 AM",
    checkOut: "06:01 PM",
    totalHours: "08h 59m",
  },
  {
    date: "30",
    day: "Fri",
    type: "present",
    checkIn: "09:10 AM",
    checkOut: "06:15 PM",
    totalHours: "09h 05m",
  },
  {
    date: "29",
    day: "Thu",
    type: "present",
    checkIn: "09:05 AM",
    checkOut: "06:10 PM",
    totalHours: "09h 05m",
  },
  {
    date: "28",
    day: "Wed",
    type: "late",
    checkIn: "09:25 AM",
    checkOut: "06:00 PM",
    totalHours: "08h 35m",
    checkInNote: "Late 25m",
    checkOutNote: "Short 25m",
  },
  {
    date: "27",
    day: "Tue",
    type: "holiday",
    title: "Holiday",
    subtitle: "Buddha Purnima",
  },
  {
    date: "26",
    day: "Mon",
    type: "weekoff",
    title: "Weekoff",
    subtitle: "Sunday",
  },
  {
    date: "25",
    day: "Sun",
    type: "weekoff",
    title: "Weekoff",
    subtitle: "Saturday",
  },
  {
    date: "24",
    day: "Sat",
    type: "present",
    checkIn: "09:08 AM",
    checkOut: "05:15 PM",
    totalHours: "08h 07m",
    checkOutNote: "Early 45m",
  },
  {
    date: "23",
    day: "Fri",
    type: "present",
    checkIn: "09:12 AM",
    checkOut: "06:20 PM",
    totalHours: "09h 08m",
  },
  {
    date: "22",
    day: "Thu",
    type: "present",
    checkIn: "09:07 AM",
    checkOut: "06:05 PM",
    totalHours: "08h 58m",
  },
];

const getDateColor = (type: AttendanceType) => {
  if (type === "holiday") {
    return Colors.error;
  }

  if (type === "weekoff") {
    return Colors.brand.primary;
  }

  return Colors.text.primary;
};

export default function AttendanceList() {
  return (
    <AppCard style={styles.card}>
      {/* Table Header */}
      <View style={styles.tableHeader}>
        <View style={styles.dateColumn}>
          <AppText size="xs" color={Colors.text.secondary}>
            Date
          </AppText>
        </View>

        <View style={styles.timeColumn}>
          <AppText size="xs" color={Colors.text.secondary}>
            Check In
          </AppText>
        </View>

        <View style={styles.timeColumn}>
          <AppText size="xs" color={Colors.text.secondary}>
            Check Out
          </AppText>
        </View>

        <View style={styles.totalColumn}>
          <AppText size="xs" color={Colors.text.secondary}>
            Total Hours
          </AppText>
        </View>
      </View>

      {/* Rows */}
      {attendanceData.map((item, index) => {
        const isSpecial =
          item.type === "holiday" || item.type === "weekoff";

        const dateColor = getDateColor(item.type);

        return (
          <View
            key={`${item.date}-${item.day}`}
            style={[
              styles.row,
              index === attendanceData.length - 1 &&
                styles.lastRow,
            ]}
          >
            {/* Date */}
            <View style={styles.dateColumn}>
              <AppText
                size="sm"
                weight="semiBold"
                color={dateColor}
              >
                {item.date}
              </AppText>

              <AppText
                size="xs"
                color={
                  item.type === "holiday"
                    ? Colors.error
                    : item.type === "weekoff"
                    ? Colors.brand.primary
                    : Colors.text.secondary
                }
              >
                {item.day}
              </AppText>
            </View>

            {isSpecial ? (
              <View style={styles.specialContent}>
                <View
                  style={[
                    styles.specialIcon,
                    item.type === "holiday"
                      ? styles.holidayIcon
                      : styles.weekoffIcon,
                  ]}
                >
                  <MaterialCommunityIcons
                    name={
                      item.type === "holiday"
                        ? "home-city-outline"
                        : "calendar-outline"
                    }
                    size={14}
                    color={
                      item.type === "holiday"
                        ? Colors.error
                        : Colors.brand.primary
                    }
                  />
                </View>

                <View style={styles.specialText}>
                  <AppText
                    size="sm"
                    weight="semiBold"
                    color={
                      item.type === "holiday"
                        ? Colors.error
                        : Colors.brand.primary
                    }
                  >
                    {item.title}
                  </AppText>

                  <AppText
                    size="xs"
                    color={Colors.text.secondary}
                  >
                    {item.subtitle}
                  </AppText>
                </View>
              </View>
            ) : (
              <>
                {/* Check In */}
                <View style={styles.timeColumn}>
                  <AppText
                    size="xs"
                    color={
                      item.checkInNote
                        ? Colors.error
                        : Colors.text.primary
                    }
                  >
                    {item.checkIn}
                  </AppText>

                  {item.checkInNote && (
                    <AppText
                      size="xs"
                      color={Colors.error}
                      style={styles.note}
                    >
                      ({item.checkInNote})
                    </AppText>
                  )}
                </View>

                {/* Check Out */}
                <View style={styles.timeColumn}>
                  <AppText
                    size="xs"
                    color={
                      item.checkOutNote
                        ? Colors.error
                        : Colors.text.primary
                    }
                  >
                    {item.checkOut}
                  </AppText>

                  {item.checkOutNote && (
                    <AppText
                      size="xs"
                      color={Colors.error}
                      style={styles.note}
                    >
                      ({item.checkOutNote})
                    </AppText>
                  )}
                </View>

                {/* Total */}
                <View style={styles.totalColumn}>
                  <AppText
                    size="xs"
                    color={
                      item.checkInNote || item.checkOutNote
                        ? Colors.error
                        : Colors.text.primary
                    }
                  >
                    {item.totalHours}
                  </AppText>

                  {item.checkOutNote && (
                    <AppText
                      size="xs"
                      color={Colors.error}
                      style={styles.note}
                    >
                      ({item.checkOutNote})
                    </AppText>
                  )}
                </View>
              </>
            )}
          </View>
        );
      })}
    </AppCard>
  );
}