import React from "react";
import { View } from "react-native";
import { Colors } from "@/theme";
import { AppText, Screen } from "@/components";
import PunchInPunchOut from "./components/punch-in-punch-out";
import MyPerformance from "./components/my-performance";
import AppliedLeave from "./components/applied-leaves";
import Reimbursement from "./components/reimbursement";
import ManualPunch from "./components/manual-punch";
import { styles } from "./styles";
import AppImage from "@/components/ui/AppImage";
import { useAuthStore } from "@/store/auth.store";
import { getGreeting } from "@/utils/helper";

const HomeScreen = () => {
  const {user} = useAuthStore();
  return (
    <Screen
      showBackground
      header={
        <View style={styles.header}>
          <View style={styles.headerTop}>
            <View style={styles.profileContainer}>
              <AppImage
                src={user?.profileImage}
                style={styles.profileImage}
                contentFit="contain"
                containerStyle={{
                  width: 62,
                  height: 62,
                  borderRadius: "100%",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              />

              <View style={styles.greetingContainer}>
                <AppText size="sm" color="rgba(255,255,255,0.75)">
                  {getGreeting()}
                </AppText>

                <AppText
                  size="xl"
                  weight="bold"
                  color={Colors.common.white}
                  style={styles.userName}
                >
                  {user?.firstName}{" "}{user?.lastName}
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
        <PunchInPunchOut />
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
