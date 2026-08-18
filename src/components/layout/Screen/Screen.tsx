import React, { ReactNode } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
  ViewStyle,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "@/theme/colors";
import styles from "./styles";
import { LinearGradient } from "expo-linear-gradient";

interface ScreenProps {
  children: ReactNode;
  header?: ReactNode;
  showBackground?: boolean;
  scroll?: boolean;
  backgroundColor?: string;
  padding?: boolean;
  style?: ViewStyle;
}

const Screen = ({
  children,
  header,
  showBackground = false,
  scroll = true,
  backgroundColor = Colors.layout.pageBg,
  padding = true,
  style,
}: ScreenProps) => {
  return (
    <SafeAreaView
      style={[
        styles.container,
        {
          backgroundColor,
        },
      ]}
    >
      {showBackground && (
        <View pointerEvents="none" style={styles.background}>
          {/* Blue gradient */}
          <LinearGradient
            colors={["#0878E8", "#0864DC", "#1747CC", "#1735BF"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.blueGradient}
          />

          {/* Subtle blue shapes */}
          <View style={styles.blueShapeOne} />
          <View style={styles.blueShapeTwo} />

          {/* White lower sheet */}
          <View style={styles.whiteSheet} />
        </View>
      )}

      {header}
      
      <KeyboardAvoidingView
        style={[styles.keyboard, style]}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 20 : 0}
      >
        {scroll ? (
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={[styles.content, padding && styles.padding]}
            keyboardShouldPersistTaps="handled"
            automaticallyAdjustKeyboardInsets
          >
            {children}
          </ScrollView>
        ) : (
          children
        )}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Screen;
