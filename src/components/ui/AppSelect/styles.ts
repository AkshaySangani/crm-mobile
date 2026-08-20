import { Radius, Spacing } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    position: "relative",
    gap: Spacing.xs,
    zIndex: 10,
  },

  label: {
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 18,
  },

  select: {
    minHeight: 48,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
    borderRadius: Radius.md,
    borderWidth: 1,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  selectedText: {
    flex: 1,
    fontSize: 14,
    marginRight: Spacing.sm,
  },

  dropdown: {
    position: "absolute",
    top: 50,
    left: 0,
    right: 0,

    maxHeight: 200,

    borderRadius: Radius.md,
    borderWidth: 1,

    zIndex: 9999,
    elevation: 10,

    overflow: "hidden",
  },

  scrollView: {
    maxHeight: 198,
  },

  option: {
    minHeight: 44,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  optionText: {
    flex: 1,
    fontSize: 14,
  },

  emptyContainer: {
    minHeight: 50,
    paddingHorizontal: Spacing.md,
    alignItems: "center",
    justifyContent: "center",
  },

  emptyText: {
    fontSize: 14,
  },

  error: {
    fontSize: 12,
    marginTop: Spacing.xs,
  },
});