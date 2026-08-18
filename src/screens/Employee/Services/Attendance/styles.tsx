import { StyleSheet } from "react-native";
import { Colors, Radius, Spacing } from "@/theme";

export const styles = StyleSheet.create({

  container: {
    flex: 1,
    gap: Spacing.md
  },

  calendarButton: {
    width: 32,
    height: 32,
    alignItems: "flex-end",
    justifyContent: "center",
  },

  filters: {
    flexDirection: "row",
    gap: Spacing.sm,
  },

  filterButton: {
    flex: 1,
    height: 38,
    backgroundColor: Colors.common.white,
    borderRadius: Radius.sm,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: Spacing.sm,
  },

  filterText: {
    flex: 1,
    marginLeft: Spacing.xs,
  },

  content: {
    flex: 1,
    gap: Spacing.md
  },
});