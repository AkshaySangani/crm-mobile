import { Colors, Radius, Spacing } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: "column",
    gap: Spacing.sm,
    backgroundColor: Colors.common.white,
    padding: Spacing.md,
    borderTopEndRadius: Radius.xxl,
    borderTopLeftRadius: Radius.xxl,
  },
});
