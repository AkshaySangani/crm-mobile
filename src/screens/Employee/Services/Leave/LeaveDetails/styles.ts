import { StyleSheet } from "react-native";
import { Colors, Radius, Spacing } from "@/theme";

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

  contentContainer: {
    padding: 16,
    paddingBottom: 32,
  },

  /* Header */

  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    paddingHorizontal: 4,
  },

  headerIcon: {
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#EAF8EF",
  },

  headerContent: {
    flex: 1,
    marginLeft: 12,
  },

  leaveTitle: {
    fontSize: 21,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 4,
  },

  leaveId: {
    fontSize: 13,
    color: "#667085",
  },

  /* Cards */

  card: {
    marginBottom: 14,
    padding: 16,
  },

  sectionTitle: {
    fontSize: 17,
    fontWeight: "700",
    color: "#101828",
    marginBottom: 16,
  },

  /* Summary */

  summaryContainer: {
    flexDirection: "row",
    alignItems: "stretch",
  },

  summaryItem: {
    flex: 1,
    alignItems: "center",
    minWidth: 0,
  },

  summaryIcon: {
    width: 42,
    height: 42,
    borderRadius: 13,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },

  summaryLabel: {
    fontSize: 12,
    color: "#667085",
    marginBottom: 5,
    textAlign: "center",
  },

  summaryValue: {
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
  },

  summarySubValue: {
    fontSize: 11,
    color: "#667085",
    marginTop: 2,
    textAlign: "center",
  },

  summaryDivider: {
    width: 1,
    backgroundColor: Colors.border.input,
    marginHorizontal: 6,
  },

  /* Dates Table */

  table: {
    borderWidth: 1,
    borderColor: Colors.border.input,
    borderRadius: 10,
    overflow: "hidden",
  },

  tableRow: {
    minHeight: 64,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: Colors.border.input,
    paddingHorizontal: 12,
  },

  tableHeader: {
    minHeight: 48,
    backgroundColor: "#F8FAFC",
  },

  lastTableRow: {
    borderBottomWidth: 0,
  },

  tableHeaderText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#667085",
  },

  tablePrimaryText: {
    fontSize: 13,
    fontWeight: "500",
    color: "#1D2939",
  },

  tableSecondaryText: {
    fontSize: 12,
    color: "#667085",
    marginTop: 3,
  },

  dateColumn: {
    width: "27%",
  },

  dayColumn: {
    width: "20%",
  },

  typeColumn: {
    width: "34%",
  },

  sessionColumn: {
    width: "19%",
  },

  leaveTypeBadge: {
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 7,
  },

  casualBadge: {
    backgroundColor: "#EAF2FF",
  },

  annualBadge: {
    backgroundColor: "#EAF8EF",
  },

  leaveTypeText: {
    fontSize: 12,
    fontWeight: "600",
  },

  casualText: {
    color: "#2563EB",
  },

  annualText: {
    color: "#16A34A",
  },

  /* Reason */

  reasonBox: {
    borderWidth: 1,
    borderColor: Colors.border.input,
    backgroundColor: "#F8FAFC",
    borderRadius: 9,
    paddingHorizontal: 14,
    paddingVertical: 13,
  },

  reasonText: {
    fontSize: 13,
    lineHeight: 20,
    color: "#667085",
  },

  /* Application Details */

  applicationInfo: {
    borderWidth: 1,
    borderColor: Colors.border.input,
    borderRadius: 10,
    overflow: "hidden",
  },

  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    padding: 13,
  },

  infoIcon: {
    width: 38,
    height: 38,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 11,
  },

  infoContent: {
    flex: 1,
  },

  infoLabel: {
    fontSize: 12,
    color: "#667085",
    marginBottom: 4,
  },

  infoValue: {
    fontSize: 13,
    fontWeight: "600",
    color: "#1D2939",
    lineHeight: 19,
  },

  infoSeparator: {
    height: 1,
    backgroundColor: Colors.border.input,
    marginHorizontal: 13,
  },

  /* Timeline */

  timeline: {
    marginTop: 16,
    backgroundColor: "#F8FAFC",
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 14,
  },

  timelineItem: {
    flexDirection: "row",
    minHeight: 70,
  },

  timelineIndicator: {
    width: 28,
    alignItems: "center",
  },

  timelineDot: {
    width: 13,
    height: 13,
    borderRadius: 7,
    backgroundColor: "#16A34A",
    borderWidth: 2,
    borderColor: "#D1FAE5",
  },

  timelineLine: {
    width: 2,
    flex: 1,
    backgroundColor: "#16A34A",
    marginTop: 2,
    marginBottom: -2,
  },

  timelineContent: {
    flex: 1,
    marginLeft: 8,
  },

  timelineTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
  },

  timelineTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: "#1D2939",
    marginBottom: 5,
  },

  timelineDate: {
    fontSize: 12,
    color: "#667085",
  },

  timelinePersonContainer: {
    alignItems: "flex-end",
    maxWidth: "48%",
  },

  timelinePerson: {
    fontSize: 13,
    fontWeight: "600",
    color: "#1D2939",
    textAlign: "right",
  },

  timelineRole: {
    fontSize: 11,
    color: "#667085",
    textAlign: "right",
    marginTop: 2,
  },
});
