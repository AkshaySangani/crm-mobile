import React from "react";
import { Text, View } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

import { styles } from "./styles";
import { Colors } from "@/theme";
import { FlatList } from "react-native";
import { AppCard, Screen } from "@/components";
import { AppNavigationProp, AppStackParamList } from "@/navigation/types";
import { pathNames } from "@/utils/path-names";
import { useNavigation } from "@react-navigation/native";

type ServiceItem = {
  title: string;
  path: keyof AppStackParamList;
  description: string;
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
  iconColor: string;
  iconBackground: string;
};

const services: ServiceItem[] = [
  {
    title: "Attendance",
    path: pathNames.employee.Attendance,
    description: "View your attendance\nrecords and history",
    icon: "calendar-clock-outline",
    iconColor: Colors.status.pending,
    iconBackground: Colors.statusLight.pending,
  },
  {
    title: "Leave",
    path: pathNames.employee.Leave,
    description: "Apply for leave and\nview status",
    icon: "calendar-check-outline",
    iconColor: Colors.status.success,
    iconBackground: Colors.statusLight.success,
  },
  {
    title: "Reimbursement",
    path: pathNames.employee.Reimbursement,
    description: "Submit and track your\nreimbursement",
    icon: "wallet-outline",
    iconColor: Colors.purple,
    iconBackground: Colors.purpleLight,
  },
  {
    title: "Manual Punch",
    path: pathNames.employee.ManualPunch,
    description: "Add manual check-in\nor check-out",
    icon: "clock-outline",
    iconColor: Colors.status.warning,
    iconBackground: Colors.statusLight.warning,
  },
  {
    title: "Payslip",
    path: pathNames.employee.Payslip,
    description: "View and download\nyour payslips",
    icon: "file-document-outline",
    iconColor: Colors.status.success,
    iconBackground: Colors.statusLight.success,
  },
  {
    title: "Resign",
    path: pathNames.employee.Resign,
    description: "Submit your resignation\nrequest",
    icon: "logout",
    iconColor: Colors.status.danger,
    iconBackground: Colors.statusLight.danger,
  },
];

export default function Services() {
  const navigation =
        useNavigation<AppNavigationProp>();
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
          <AppCard style={styles.serviceCard} onPress={() => navigation.navigate(item.path)}>
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
