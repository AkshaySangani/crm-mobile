import { StyleSheet } from "react-native";
import { Colors, Radius, Spacing } from "@/theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: Spacing.xs,
  },

  card: {
    flex: 1,
    minHeight: 76,
    paddingHorizontal: Spacing.xs,
    paddingVertical: Spacing.sm,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.common.white,
    borderRadius: Radius.sm,
  },

  iconContainer: {
    width: 27,
    height: 27,
    borderRadius: Radius.xs,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 2,
  },

  value: {
    lineHeight: 18,
  },
});