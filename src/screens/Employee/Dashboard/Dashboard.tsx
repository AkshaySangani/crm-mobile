import React from "react";
import { Image, Pressable, ScrollView, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/theme";
import { AppText, Screen } from "@/components";
import ManualCheckIn from "./components/manual-check-in";
import MyPerformance from "./components/my-performance";
import AppliedLeave from "./components/applied-leaves";
import Reimbursement from "./components/reimbursement";
import ManualPunch from "./components/manual-punch";
import { styles } from "./styles";

const HomeScreen = () => {
  return (
    <Screen
      showBackground
      header={
        <View style={styles.header}>
          <View style={styles.headerTop}>
            <View style={styles.profileContainer}>
              <Image
                source={{
                  uri: "https://i.pravatar.cc/150?img=12",
                }}
                style={styles.profileImage}
              />

              <View style={styles.greetingContainer}>
                <AppText size="sm" color="rgba(255,255,255,0.75)">
                  Good Morning
                </AppText>

                <AppText
                  size="xl"
                  weight="bold"
                  color={Colors.common.white}
                  style={styles.userName}
                >
                  Ferdous Islam
                </AppText>
              </View>
            </View>
          </View>
        </View>
      }
    >
      {/* ================= CONTENT ================= */}
      <View style={styles.content}>
        {/* ================= Punch In ================= */}
        <ManualCheckIn />
        {/* ================= MY PERFORMANCE ================= */}
        <MyPerformance />

        {/* ================= APPLIED LEAVE ================= */}
        <AppliedLeave />

        {/* ================= REIMBURSEMENT ================= */}
        <Reimbursement />

        {/* ================= MANUAL PUNCH ================= */}
        <ManualPunch />
      </View>
    </Screen>
  );
};

export default HomeScreen;
