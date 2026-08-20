import React, { useState } from "react";
import { FlatList, SafeAreaView, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "@/components/ui/AppText";
import { Colors, Spacing } from "@/theme";

import StatCards from "./components/StatCards/StatCards";
import ReimbursementList from "./components/ReimbursementList/ReimbursementList";
import { styles } from "./styles";
import { Header, Screen } from "@/components";
import { AppNavigationProp } from "@/navigation/types";
import { useNavigation } from "@react-navigation/native";
import AppSelect from "@/components/ui/AppSelect/AppSelect";
import { pathNames } from "@/utils/path-names";

const Reimbursement = () => {
  const navigation = useNavigation<AppNavigationProp>();
  const [status, setStatus] = useState("All Status");
  const [year, setYear] = useState("2025");

  return (
    <Screen
        padding={false}
      scroll={false}
      showBackground
      header={
        <Header
          title={"Reimbursement"}
          showBack
          onBackPress={() => navigation.goBack()}
          rightComponent={
            <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate(pathNames.employee.AddReimbursement)}>
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
      {/* Content */}
      <View style={styles.container}>
        {/* Filters */}
        <View style={styles.filtersRow}>
          <AppSelect options={[]} onSelect={function (value: string): void {
                      throw new Error("Function not implemented.");
                  } } />

          <TouchableOpacity activeOpacity={0.8} style={styles.filterButton}>
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
          <AppText size="sm" weight="bold" color={Colors.text.primary}>
            Reimbursement Requests
          </AppText>

          <ReimbursementList />
        </View>
      </View>
    </Screen>
  );
};

export default Reimbursement;
