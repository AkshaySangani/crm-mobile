import { StyleSheet } from "react-native";
import {
  Colors,
  FontSize,
  Radius,
  Shadows,
  Spacing,
} from "@/theme";

export const styles = StyleSheet.create({
  listContent: {
    paddingBottom: Spacing.md,
    paddingHorizontal: Spacing.sm,
    gap: Spacing.sm
  },

  card: {
    padding: 0,
    backgroundColor: Colors.common.white,
    borderRadius: Radius.sm,
    borderWidth: 0.2,
    borderColor: Colors.border.primary,
    ...Shadows.md
  },

  cardContent: {
    paddingVertical: Spacing.sm,
    paddingHorizontal: Spacing.sm,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: Spacing.sm
  },

  leftSideContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: Spacing.sm,
  },

  iconContainer: {
    width: 34,
    height: 34,
    borderRadius: Radius.sm,
    alignItems: "center",
    justifyContent: "center",
    marginRight: Spacing.xs,
  },

  details: {
    flexDirection: "column",
    justifyContent: "center",
    gap: Spacing.xs,
  },

  rightSection: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    gap: Spacing.sm,
  },
});