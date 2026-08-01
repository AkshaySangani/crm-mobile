import React, { ReactNode } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  ViewStyle,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "@/theme/colors";
import styles from "./styles";

interface ScreenProps {
  children: ReactNode;
  scroll?: boolean;
  backgroundColor?: string;
  padding?: boolean;
  style?: ViewStyle;
}

const Screen = ({
  children,
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
