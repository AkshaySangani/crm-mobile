import React from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "@/components/ui/AppText";
import { Colors, Spacing } from "@/theme";

import StatCards from "./components/StatCards/StatCards";
import AttendanceList from "./components/AttendanceList/AttendanceList";
import { styles } from "./styles";
import { Header, Screen } from "@/components";
import { AppNavigationProp } from "@/navigation/types";
import { useNavigation } from "@react-navigation/native";

export default function Attendance() {
    const navigation =
            useNavigation<AppNavigationProp>();
  return (
    <Screen
      scroll={false}
      style={{ paddingHorizontal: Spacing.md }}
      showBackground
      header={
        <Header
          title={"Attendance"}
          showBack
          onBackPress={() => navigation.goBack()}
          rightComponent={
            <TouchableOpacity activeOpacity={0.7} style={styles.calendarButton}>
              <MaterialCommunityIcons
                name="calendar-outline"
                size={20}
                color={Colors.common.white}
              />
            </TouchableOpacity>
          }
        />
      }
    >
      <View style={styles.container}>
        {/* Header */}
        <View>
          {/* Filters */}
          <View style={styles.filters}>
            <TouchableOpacity activeOpacity={0.8} style={styles.filterButton}>
              <MaterialCommunityIcons
                name="calendar-month-outline"
                size={16}
                color={Colors.brand.primary}
              />

              <AppText
                size="sm"
                color={Colors.text.primary}
                style={styles.filterText}
              >
                May
              </AppText>

              <MaterialCommunityIcons
                name="chevron-down"
                size={18}
                color={Colors.brand.primary}
              />
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.8} style={styles.filterButton}>
              <MaterialCommunityIcons
                name="calendar-month-outline"
                size={16}
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
                size={18}
                color={Colors.brand.primary}
              />
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.content}
        >
          {/* Statistics */}
          <StatCards />

          {/* Attendance */}
          <AttendanceList />
        </ScrollView>
      </View>
    </Screen>
  );
}
