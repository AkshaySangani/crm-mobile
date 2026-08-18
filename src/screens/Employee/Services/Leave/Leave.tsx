import React, { useState } from "react";
import { View } from "react-native";
import { styles } from "./styles";
import { Spacing } from "@/theme";
import { Header, Screen } from "@/components";
import Leaves from "./components/Leaves/Leaves";
import { useNavigation } from "@react-navigation/native";
import { AppNavigationProp } from "@/navigation/types";
import { pathNames } from "@/utils/path-names";

export default function Leave() {
  const navigation =
              useNavigation<AppNavigationProp>();

  return (
    <Screen
      scroll={false}
      style={{ paddingHorizontal: Spacing.md }}
      showBackground
      header={
        <Header
          title={"Leave"}
          showBack
          onBackPress={() => navigation.goBack()}
        />
      }
    >

      {/* Content */}
      <View style={styles.content}>
        <Leaves onAddLeave={() => navigation.navigate(pathNames.employee.ApplyLeave)}/>
      </View>
    </Screen>
  );
}