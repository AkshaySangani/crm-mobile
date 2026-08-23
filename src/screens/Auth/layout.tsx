import React, { ReactNode } from "react";
import { View } from "react-native";
import { Screen, AppText} from "@/components";
import { Colors } from "@/theme/colors";
import styles from "./styles";
import AppImage from "@/components/ui/AppImage";

interface AuthLayoutProps {
    children: ReactNode;
    title?: ReactNode;
}

const AuthLayout = ({title,children}: AuthLayoutProps) => {

  return (
    <Screen>
      <View style={styles.container}>
        {/* Logo Section */}
        <View style={styles.logoContainer}>
          <View style={styles.logoBox}>
            <AppImage
              src={require("@/assets/images/IEKA-logo.jpeg")}
              contentFit="contain"
              containerStyle={{
                width: 120,
                height: 120,
              }}
            />
          </View>

          <View style={styles.titleContainer}>
            {title}
          </View>
        </View>

        {/* AuthLayout */}
        {children}
      </View>
    </Screen>
  );
};

export default AuthLayout;
