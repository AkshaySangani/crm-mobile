import { Colors, Spacing } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.common.white,
  },

  header: {
    height: 64,
    backgroundColor: Colors.brand.primary,
    justifyContent: "center",
    paddingHorizontal: Spacing.md,
  },

  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: Spacing.md,
  },

  content: {
    flex: 1,
  },
});