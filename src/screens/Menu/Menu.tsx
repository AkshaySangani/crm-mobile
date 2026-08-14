import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Switch,
  TouchableOpacity,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Colors, FontSize, Radius, Spacing } from "../../theme";
import { styles } from "./style";
import { AppCard, AppText } from "@/components";
import { AlertModal } from "@/components/ui/AppModal/modals/AlertModal/AlertModal";
import { useAuthStore } from "@/store/auth.store";

// const profileImage = require("../../assets/images/profile.png");

const companyInfo = [
  {
    icon: "briefcase-outline",
    label: "Department",
    value: "Development",
  },
  {
    icon: "account-outline",
    label: "Reporting Manager",
    value: "Arjunsinh Rathod",
  },
  {
    icon: "clock-outline",
    label: "Shift (Time)",
    value: "09:00 AM - 06:00 PM",
  },
  {
    icon: "map-marker-outline",
    label: "Branch (Address)",
    value: "Ahmedabad Head Office",
    description:
      "B-105, Silicon Tower, Science City Road,\nAhmedabad, Gujarat - 380060",
  },
];

const menuItems = [
  {
    icon: "calendar-month-outline",
    title: "Holiday Calendar",
    description: "View company holidays and events",
    type: "arrow",
  },
  //   {
  //     icon: "moon-waning-crescent",
  //     title: "Dark Mode",
  //     description: "Toggle dark mode",
  //     type: "switch",
  //   },
  {
    icon: "file-document-check-outline",
    title: "View Policy",
    description: "View company policies and guidelines",
    type: "arrow",
  },
  {
    icon: "logout",
    title: "Log Out",
    description: "Sign out from your account",
    type: "logout",
  },
];

export default function Menu() {
  const { logout } = useAuthStore();
  const [darkMode, setDarkMode] = React.useState<boolean>(false);
  const [logoutVisible, setLogoutVisible] = useState<boolean>(false);

  // handle press on menus
  const handleMenuPress = (type: "logout" | string) => {
    if (type === "logout") {
      setLogoutVisible(true);
    }
  };

  // logout
  const handleLogOut = () => {
    logout();
  };
  return (
    <>
      <View style={styles.screen}>
        {/* Blue Header */}
        <View style={styles.headerBackground}>
          <SafeAreaView>
            <View style={styles.header}>
              <AppText size={"xl"} weight="bold" color={Colors.common.white}>
                Menu
              </AppText>

              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.notificationButton}
              >
                <MaterialCommunityIcons
                  name="bell-outline"
                  size={28}
                  color={Colors.common.white}
                />

                <View style={styles.notificationDot} />
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {/* Profile Card */}
          <AppCard style={styles.profileCard}>
            <View style={styles.profileContent}>
              {/* <Image
              source={profileImage}
              style={styles.profileImage}
            /> */}

              <View style={styles.profileDetails}>
                <AppText
                  size={"lg"}
                  weight="bold"
                  color={Colors.text.primary}
                  numberOfLines={1}
                >
                  Sunny Sangani
                </AppText>

                <View style={styles.employeeBadge}>
                  <AppText
                    size={"sm"}
                    weight="semiBold"
                    color={Colors.brand.primary}
                  >
                    EMP-1025
                  </AppText>
                </View>

                <AppText
                  size={"md"}
                  color={Colors.text.secondary}
                  style={styles.designation}
                >
                  Software Engineer
                </AppText>

                <View style={styles.activeContainer}>
                  <View style={styles.activeDot} />

                  <AppText
                    size={"sm"}
                    weight="semiBold"
                    color={Colors.status.success}
                  >
                    Active
                  </AppText>
                </View>
              </View>
            </View>
          </AppCard>

          {/* Company Information */}
          <AppCard style={styles.sectionCard}>
            <AppText
              size={"md"}
              weight="bold"
              color={Colors.text.primary}
              style={styles.sectionTitle}
            >
              Company Information
            </AppText>

            <View>
              {companyInfo.map((item, index) => (
                <View
                  key={item.label}
                  style={[
                    styles.companyRow,
                    index !== companyInfo.length - 1 && styles.companyRowBorder,
                  ]}
                >
                  <View style={styles.infoIconContainer}>
                    <MaterialCommunityIcons
                      name={item.icon as any}
                      size={27}
                      color={Colors.brand.primary}
                    />
                  </View>

                  <View style={styles.companyDetails}>
                    <AppText size={"sm"} color={Colors.text.secondary}>
                      {item.label}
                    </AppText>

                    <AppText
                      size={"md"}
                      weight="semiBold"
                      color={Colors.text.primary}
                      style={styles.companyValue}
                    >
                      {item.value}
                    </AppText>

                    {item.description && (
                      <AppText
                        size={"sm"}
                        color={Colors.text.secondary}
                        style={styles.companyDescription}
                      >
                        {item.description}
                      </AppText>
                    )}
                  </View>
                </View>
              ))}
            </View>
          </AppCard>

          {/* Menu */}
          <AppCard style={styles.sectionCard}>
            <AppText
              size={"md"}
              weight="bold"
              color={Colors.text.primary}
              style={styles.sectionTitle}
            >
              Menu
            </AppText>

            {menuItems.map((item, index) => {
              const isLogout = item.type === "logout";
              const isDarkMode = item.type === "switch";

              return (
                <TouchableOpacity
                  key={item.title}
                  activeOpacity={0.75}
                  style={[
                    styles.menuRow,
                    index !== menuItems.length - 1 && styles.menuRowBorder,
                  ]}
                  onPress={() => handleMenuPress(item.type)}
                >
                  <View
                    style={[
                      styles.menuIconContainer,
                      isLogout && styles.logoutIconContainer,
                      isDarkMode && styles.darkModeIconContainer,
                      item.title === "View Policy" &&
                        styles.policyIconContainer,
                    ]}
                  >
                    <MaterialCommunityIcons
                      name={item.icon as any}
                      size={26}
                      color={
                        isLogout
                          ? Colors.error
                          : isDarkMode
                            ? "#4C2BC2"
                            : item.title === "View Policy"
                              ? "#16A085"
                              : Colors.brand.primary
                      }
                    />
                  </View>

                  <View style={styles.menuDetails}>
                    <AppText
                      size={"md"}
                      weight="semiBold"
                      color={isLogout ? Colors.error : Colors.text.primary}
                    >
                      {item.title}
                    </AppText>

                    <AppText
                      size={"sm"}
                      color={Colors.text.secondary}
                      style={styles.menuDescription}
                    >
                      {item.description}
                    </AppText>
                  </View>

                  {isDarkMode ? (
                    <Switch
                      value={darkMode}
                      onValueChange={setDarkMode}
                      trackColor={{
                        false: "#D1D5DB",
                        true: Colors.brand.primary,
                      }}
                      thumbColor="#FFFFFF"
                    />
                  ) : (
                    <MaterialCommunityIcons
                      name="chevron-right"
                      size={27}
                      color={Colors.brand.primary}
                    />
                  )}
                </TouchableOpacity>
              );
            })}
          </AppCard>
        </ScrollView>
      </View>
      <AlertModal
        visible={logoutVisible}
        notice={"Are you sure you want to logout?"}
        primaryText={"Yes"}
        secondaryText={"No"}
        onPrimary={handleLogOut}
        onSecondary={() => setLogoutVisible(false)}
      />
    </>
  );
}
