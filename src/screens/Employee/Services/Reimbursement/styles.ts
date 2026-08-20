import { StyleSheet } from "react-native";
import {
  Colors,
  FontSize,
  Radius,
  Spacing,
} from "@/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    gap: Spacing.sm,
    backgroundColor: Colors.common.white,
    padding: Spacing.md,
    borderTopEndRadius: Radius.xxl,
    borderTopLeftRadius: Radius.xxl,
  },

  filtersRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: Spacing.xs
  },

  filterButton: {
    flex: 1,
    minHeight: 34,
    paddingHorizontal: Spacing.sm,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    backgroundColor: Colors.common.white,
    borderRadius: Radius.sm,
    borderWidth: 1,
    borderColor: Colors.border.input,
  },

  filterText: {
    flex: 1,
  },

  listSection: {
    flex: 1,
    gap: Spacing.sm
  },
});