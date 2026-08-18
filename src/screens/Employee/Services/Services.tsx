import React from "react";
import { Text, View } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

import { styles } from "./styles";
import { Colors } from "@/theme";
import { FlatList } from "react-native";
import { AppCard, Screen } from "@/components";

type ServiceItem = {
  title: string;
  description: string;
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
  iconColor: string;
  iconBackground: string;
};

const services: ServiceItem[] = [
  {
    title: "Attendance",
    description: "View your attendance\nrecords and history",
    icon: "calendar-clock-outline",
    iconColor: "#1769E0",
    iconBackground: "#E5EFFD",
  },
  {
    title: "Leave",
    description: "Apply for leave and\nview status",
    icon: "calendar-check-outline",
    iconColor: "#159447",
    iconBackground: "#E7F7E9",
  },
  {
    title: "Reimbursement",
    description: "Submit and track your\nreimbursement",
    icon: "wallet-outline",
    iconColor: "#7446E8",
    iconBackground: "#F0EAFE",
  },
  {
    title: "Manual Punch",
    description: "Add manual check-in\nor check-out",
    icon: "clock-outline",
    iconColor: "#F28B00",
    iconBackground: "#FFF1E3",
  },
  {
    title: "Payslip",
    description: "View and download\nyour payslips",
    icon: "file-document-outline",
    iconColor: "#16A99E",
    iconBackground: "#E6F7F5",
  },
  {
    title: "Resign",
    description: "Submit your resignation\nrequest",
    icon: "logout",
    iconColor: "#ED6691",
    iconBackground: "#FDEAF1",
  },
];

export default function Services() {
  return (
    <Screen
      showBackground
      header={
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <View>
              <Text style={styles.headerTitle}>Services</Text>

              <Text style={styles.headerSubtitle}>
                Manage all your workplace{"\n"}
                activities in one place.
              </Text>
            </View>
          </View>
        </View>
      }
    >
      {/* White Content */}
      <FlatList
        scrollEnabled={false}
        data={services}
        keyExtractor={(item: ServiceItem) => item.title}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        columnWrapperStyle={styles.columnWrapper}
        renderItem={({ item }: { item: ServiceItem }) => (
          <AppCard style={styles.serviceCard}>
            {/* Icon */}
            <View
              style={[
                styles.iconContainer,
                {
                  backgroundColor: item.iconBackground,
                },
              ]}
            >
              <MaterialCommunityIcons
                name={item.icon}
                size={39}
                color={item.iconColor}
              />
            </View>

            {/* Title */}
            <Text style={styles.serviceTitle}>{item.title}</Text>

            {/* Description */}
            <Text style={styles.serviceDescription}>{item.description}</Text>

            {/* Arrow */}
            <View style={styles.arrowContainer}>
              <Ionicons
                name="chevron-forward"
                size={24}
                color={Colors.brand.primary}
              />
            </View>
          </AppCard>
        )}
      />
    </Screen>
  );
}
