import { StyleSheet } from "react-native";
import { Colors, Radius, Spacing } from "@/theme";

export const styles = StyleSheet.create({
  card: {
    padding: 0,
    overflow: "hidden",
    backgroundColor: Colors.common.white,
    borderRadius: Radius.md,
    borderColor: Colors.border.input
  },

  tableHeader: {
    minHeight: 36,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: Spacing.sm,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: Colors.border.input,
  },

  row: {
    minHeight: 48,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: Spacing.sm,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: Colors.border.input,
  },

  lastRow: {
    borderBottomWidth: 0,
  },

  dateColumn: {
    width: "25%",
    justifyContent: "center",
  },

  timeColumn: {
    width: "25%",
    justifyContent: "center",
  },

  totalColumn: {
    width: "31%",
    justifyContent: "center",
  },

  note: {
    fontSize: 7,
    lineHeight: 9,
  },

  specialContent: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: Spacing.xs,
  },

  specialIcon: {
    width: 26,
    height: 26,
    borderRadius: Radius.xs,
    alignItems: "center",
    justifyContent: "center",
    marginRight: Spacing.xs,
  },

  holidayIcon: {
    backgroundColor: "#FFF0F0",
  },

  weekoffIcon: {
    backgroundColor: "#EEF4FF",
  },

  specialText: {
    flex: 1,
  },
});