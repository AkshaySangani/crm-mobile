import { Colors, Radius, Spacing } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.common.white,
  },

  scrollContent: {
    paddingHorizontal: Spacing.md,
    paddingTop: Spacing.md,
    paddingBottom: 110,
  },

  filtersRow: {
    flexDirection: "row",
    gap: Spacing.sm,
    marginBottom: Spacing.md,
  },

  filterButton: {
    flex: 1,
    minHeight: 62,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: Spacing.md,
    backgroundColor: Colors.common.white,
    borderWidth: 1,
    borderColor: Colors.border.input,
    borderRadius: Radius.md,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },

  filterText: {
    flex: 1,
    marginLeft: Spacing.sm,
  },

  statsCard: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: Spacing.md,
    paddingHorizontal: Spacing.xs,
    marginBottom: Spacing.lg,
    borderRadius: Radius.md,
  },

  statItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    minWidth: 0,
  },

  statIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: Spacing.xs,
  },

  statValue: {
    marginBottom: 2,
  },

  statDivider: {
    width: 1,
    height: 82,
    backgroundColor: Colors.border.input,
  },

  historyTitle: {
    marginBottom: Spacing.sm,
    paddingHorizontal: Spacing.xs,
  },

  historyList: {
    gap: Spacing.sm,
  },

  leaveCard: {
    minHeight: 128,
    flexDirection: "row",
    alignItems: "center",
    padding: Spacing.sm,
    borderRadius: Radius.md,
    borderColor: Colors.border.input,
  },

  leaveIcon: {
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "center",
    marginRight: Spacing.sm,
  },

  leaveInfo: {
    flex: 1,
    alignSelf: "stretch",
    justifyContent: "center",
    minWidth: 0,
  },

  dateText: {
    marginTop: 4,
  },

  daysText: {
    marginTop: 3,
  },

  leaveRight: {
    width: 105,
    alignItems: "flex-end",
    justifyContent: "center",
  },

  statusBadge: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: Radius.xs,
    marginBottom: 7,
  },

  appliedLabel: {
    marginBottom: 2,
  },

  arrow: {
    marginLeft: 2,
  },

  fab: {
    position: "absolute",
    right: Spacing.md,
    bottom: Spacing.md,
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: Colors.brand.primary,
    alignItems: "center",
    justifyContent: "center",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 6,
  },
});