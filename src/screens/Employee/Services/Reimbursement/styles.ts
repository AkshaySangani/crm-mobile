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

  fixedHeader: {
    flexShrink: 0,
    gap: Spacing.sm
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
    gap: Spacing.sm
  },

  emptyContainer: {
      minHeight: 250,
      alignItems: "center",
      justifyContent:
        "center",
      paddingHorizontal:
        Spacing.md,
    },

    listContent: {
      gap: Spacing.sm,
      paddingBottom:
        Spacing.xl,
    },

    footerLoader: {
      paddingVertical:
        Spacing.md,
      alignItems: "center",
      justifyContent:
        "center",
    },

    emptyListContent: {
    flexGrow: 1,
    paddingHorizontal: Spacing.md,
    paddingBottom: Spacing.xl,
  },
});