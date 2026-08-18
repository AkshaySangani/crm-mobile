import { StyleSheet } from "react-native";
import {
  Colors,
  FontSize,
  Radius,
  Spacing,
} from "@/theme";

export const styles = StyleSheet.create({
  listContent: {
    paddingBottom: Spacing.md,
  },

  card: {
    marginBottom: Spacing.xs,
    padding: 0,
    backgroundColor: Colors.common.white,
    borderRadius: Radius.sm,
  },

  cardContent: {
    paddingVertical: Spacing.sm,
    paddingHorizontal: Spacing.sm,
    flexDirection: "row",
    alignItems: "center",
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
    flex: 1,
    justifyContent: "center",
    gap: Spacing.sm,
    minWidth: 0,
  },

  date: {
    marginTop: 1,
    fontSize: FontSize.xs,
    lineHeight: 11,
  },

  rightSection: {
    alignItems: "flex-end",
    justifyContent: "center",
    gap: Spacing.sm,
    minWidth: 65,
    marginLeft: Spacing.xs,
  },

  amount: {
    marginBottom: 2,
    fontSize: FontSize.sm,
  },

  statusBadge: {
    minWidth: 50,
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: Radius.xs,
    alignItems: "center",
    justifyContent: "center",
  },

  statusText: {
    fontSize: FontSize.xs,
    lineHeight: 10,
  },

  approvedDate: {
    marginTop: 1,
    fontSize: FontSize.xs,
    lineHeight: 9,
  },

  arrow: {
    marginLeft: 2,
  },
});