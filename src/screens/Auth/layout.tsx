import React, { ReactNode } from "react";
import { View } from "react-native";
import { Screen, AppText} from "@/components";
import { Colors } from "@/theme/colors";
import styles from "./styles";
import AppImage from "@/components/ui/AppImage";

interface AuthLayoutProps {
    children: ReactNode;
}

const AuthLayout = ({children}: AuthLayoutProps) => {

  return (
    <Screen>
      <View style={styles.container}>
        {/* Logo Section */}
        <View style={styles.logoContainer}>
          <View style={styles.logoBox}>
            <AppImage
              source={require("@/assets/images/IEKA-logo.jpeg")}
              contentFit="contain"
              containerStyle={{
                width: 120,
                height: 120,
              }}
            />
          </View>

          <View style={styles.titleContainer}>
            <AppText
              size="xl"
              lineBreakMode="head"
              weight="bold"
              style={styles.title}
            >
              Welcome, Let's{" "}
              <AppText
                size="xl"
                weight="bold"
                color={Colors.brand.primary}
                center
              >
                Sign In
              </AppText>
            </AppText>
          </View>
        </View>

        {/* AuthLayout */}
        {children}
      </View>
    </Screen>
  );
};

export default AuthLayout;
