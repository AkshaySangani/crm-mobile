import React, { useState } from "react";
import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { styles } from "./styles";
import { Colors } from "@/theme";
import { AppText, Screen } from "@/components";
import Leaves from "./components/Leaves/Leaves";
import ApplyLeave from "./components/ApplyLeave/ApplyLeave";

type LeaveTab = "leaves" | "apply";

export default function Leave() {
  const [activeTab, setActiveTab] = useState<LeaveTab>("leaves");

  return (
    <Screen padding={false}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <MaterialCommunityIcons
            name="arrow-left"
            size={26}
            color={Colors.common.white}
          />

          <AppText
            size="lg"
            weight="semiBold"
            color={Colors.common.white}
          >
            Leave
          </AppText>
        </View>
      </View>

      {/* Content */}
      <View style={styles.content}>
        {activeTab === "leaves" ? <Leaves onAddLeave={() => setActiveTab("apply")}/> : <ApplyLeave />}
      </View>
    </Screen>
  );
}