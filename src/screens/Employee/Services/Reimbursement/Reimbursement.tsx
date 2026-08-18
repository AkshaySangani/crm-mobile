import React, { useState } from "react";
import {
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "@/components/ui/AppText";
import { Colors, Spacing } from "@/theme";

import StatCards from "./components/StatCards/StatCards";
import ReimbursementList from "./components/ReimbursementList/ReimbursementList";
import { styles } from "./styles";
import { Header, Screen } from "@/components";
import { AppNavigationProp } from "@/navigation/types";
import { useNavigation } from "@react-navigation/native";

const Reimbursement = () => {
    const navigation =
                useNavigation<AppNavigationProp>();
  const [status, setStatus] = useState("All Status");
  const [year, setYear] = useState("2025");

  return (
   <Screen
      scroll={false}
      style={{ paddingHorizontal: Spacing.md }}
      showBackground
      header={
        <Header
          title={"Reimbursement"}
          showBack
          onBackPress={() => navigation.goBack()}
          rightComponent={
            <TouchableOpacity activeOpacity={0.7}>
            <MaterialCommunityIcons
              name="file-document-outline"
              size={20}
              color={Colors.common.white}
            />
          </TouchableOpacity>
          }
        />
      }
    >
      <View style={styles.container}>

        {/* Content */}
        <View style={styles.content}>
          {/* Filters */}
          <View style={styles.filtersRow}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.filterButton}
            >
              <MaterialCommunityIcons
                name="calendar-month-outline"
                size={15}
                color={Colors.brand.primary}
              />

              <AppText
                size="xs"
                weight="medium"
                color={Colors.text.primary}
                style={styles.filterText}
              >
                {status}
              </AppText>

              <MaterialCommunityIcons
                name="chevron-down"
                size={16}
                color={Colors.brand.primary}
              />
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.filterButton}
            >
              <MaterialCommunityIcons
                name="calendar-month-outline"
                size={15}
                color={Colors.brand.primary}
              />

              <AppText
                size="xs"
                weight="medium"
                color={Colors.text.primary}
                style={styles.filterText}
              >
                {year}
              </AppText>

              <MaterialCommunityIcons
                name="chevron-down"
                size={16}
                color={Colors.brand.primary}
              />
            </TouchableOpacity>
          </View>

          {/* Statistics */}
          <StatCards />

          {/* List */}
          <View style={styles.listSection}>
            <AppText
              size="sm"
              weight="semiBold"
              color={Colors.text.primary}
              style={styles.sectionTitle}
            >
              Reimbursement Requests
            </AppText>

            <ReimbursementList />
          </View>
        </View>
      </View>
    </Screen>
  );
};

export default Reimbursement;