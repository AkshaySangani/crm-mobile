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
  },

  content: {
    flex: 1,
    borderTopLeftRadius: Radius.lg,
    borderTopRightRadius: Radius.lg,
  },

  filtersRow: {
    flexDirection: "row",
    gap: Spacing.xs,
    marginBottom: Spacing.sm,
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
    marginTop: Spacing.sm,
  },

  sectionTitle: {
    marginBottom: Spacing.xs,
    paddingHorizontal: Spacing.xs,
  },
});