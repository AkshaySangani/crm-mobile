import React from "react";
import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/theme";
import { AppText } from "@/components";
import ManualCheckIn from "./components/manual-check-in";
import MyPerformance from "./components/my-performance";
import AppliedLeave from "./components/applied-leaves";
import Reimbursement from "./components/reimbursement";
import ManualPunch from "./components/manual-punch";
import { styles } from "./styles";

const HomeScreen = () => {
  return (
    <View style={styles.container}>

      <SafeAreaView style={styles.safeArea}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {/* ================= HEADER ================= */}
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
                    color={Colors.text.primary}
                    style={styles.userName}
                  >
                    Ferdous Islam
                  </AppText>
                </View>
              </View>

              <Pressable style={styles.notificationButton}>
                <Ionicons
                  name="notifications-outline"
                  size={32}
                  color={Colors.text.primary}
                />

                <View style={styles.notificationDot} />
              </Pressable>
            </View>

            {/* ================= MANUAL CHECK-IN ================= */}
            <ManualCheckIn />
          </View>

          {/* ================= CONTENT ================= */}
          <View style={styles.content}>
            {/* ================= MY PERFORMANCE ================= */}
            <MyPerformance/>

            {/* ================= APPLIED LEAVE ================= */}
            <AppliedLeave/>

            {/* ================= REIMBURSEMENT ================= */}
            <Reimbursement/>

            {/* ================= MANUAL PUNCH ================= */}
            <ManualPunch/>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};



export default HomeScreen;
