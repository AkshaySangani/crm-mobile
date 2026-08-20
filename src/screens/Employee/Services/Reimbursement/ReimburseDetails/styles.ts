import { StyleSheet } from "react-native";
import { Colors, FontSize, Radius, Spacing } from "@/theme";

export const styles = StyleSheet.create({

  contentContainer: {
    flex: 1,
    flexDirection: "column",
    gap: Spacing.sm,
    // backgroundColor: Colors.common.white,
    padding: Spacing.md,
    borderTopEndRadius: Radius.xxl,
    borderTopLeftRadius: Radius.xxl,
  },

  /* Reimbursement summary */

  summaryCard: {
    padding: Spacing.md,
  },

  summaryRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  summaryLeft: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },

  expenseIcon: {
    width: 64,
    height: 64,
    borderRadius: 32,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E8F6E8",
    marginRight: Spacing.sm,
  },

  summaryInfo: {
    flex: 1,
  },

  expenseTitle: {
    fontSize: FontSize.lg,
    fontWeight: "700",
    color: Colors.text.primary,
  },

  categoryText: {
    marginTop: 2,
    fontSize: FontSize.sm,
    color: Colors.text.secondary,
  },

  amount: {
    fontSize: 24,
    fontWeight: "700",
    color: Colors.text.primary,
  },

  /* Dates */

  dateCard: {
    paddingVertical: Spacing.md,
    paddingHorizontal: Spacing.sm,
  },

  dateRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  dateItem: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: Spacing.xs,
  },

  dateIcon: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: "#EDF3FF",
    alignItems: "center",
    justifyContent: "center",
    marginRight: Spacing.sm,
  },

  dateInfo: {
    flex: 1,
  },

  dateLabel: {
    fontSize: FontSize.xs,
    color: Colors.text.secondary,
  },

  dateValue: {
    marginTop: 4,
    fontSize: FontSize.sm,
    fontWeight: "600",
    color: Colors.text.primary,
  },

  dateDivider: {
    width: 1,
    height: 48,
    backgroundColor: Colors.border.input,
  },

  /* Expense */

  sectionCard: {
    padding: Spacing.md,
  },

  sectionTitle: {
    fontSize: FontSize.md,
    fontWeight: "700",
    color: Colors.text.primary,
    marginBottom: Spacing.sm,
  },

  detailRow: {
    minHeight: 68,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: Colors.border.input,
  },

  detailRowLast: {
    borderBottomWidth: 0,
  },

  detailIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "center",
    marginRight: Spacing.sm,
  },

  greenIcon: {
    backgroundColor: "#EAF8EA",
  },

  purpleIcon: {
    backgroundColor: "#F0E9FF",
  },

  redIcon: {
    backgroundColor: "#FFEAF0",
  },

  detailContent: {
    flex: 1,
  },

  detailLabel: {
    fontSize: FontSize.xs,
    color: Colors.text.secondary,
  },

  detailValue: {
    marginTop: 3,
    fontSize: FontSize.sm,
    fontWeight: "600",
    color: Colors.text.primary,
  },

  detailAmount: {
    fontSize: FontSize.sm,
    fontWeight: "600",
    color: Colors.text.primary,
  },

  totalAmount: {
    color: Colors.brand.primary,
  },

  currencyIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#EDF3FF",
    alignItems: "center",
    justifyContent: "center",
  },

  /* Description */

  descriptionCard: {
    padding: Spacing.md,
  },

  descriptionBox: {
    padding: Spacing.sm,
    borderRadius: Radius.sm,
    backgroundColor: "#F7F8FA",
    borderWidth: 1,
    borderColor: "#E9EBEF",
  },

  descriptionText: {
    fontSize: FontSize.sm,
    lineHeight: 22,
    color: Colors.text.primary,
  },

  /* Attachments */

  attachmentCard: {
    padding: Spacing.md,
  },

  attachmentItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: Spacing.sm,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: Colors.border.input,
  },

  attachmentImageWrapper: {
    width: 112,
    height: 96,
    borderRadius: Radius.sm,
    overflow: "hidden",
    backgroundColor: "#F2F3F5",
    marginRight: Spacing.md,
  },

  attachmentImage: {
    width: "100%",
    height: "100%",
  },

  expandButton: {
    position: "absolute",
    right: 5,
    bottom: 5,
    width: 28,
    height: 28,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.55)",
  },

  attachmentInfo: {
    flex: 1,
  },

  attachmentName: {
    fontSize: FontSize.sm,
    fontWeight: "600",
    color: Colors.text.primary,
  },

  attachmentHint: {
    marginTop: 4,
    fontSize: FontSize.xs,
    color: Colors.brand.primary,
    fontWeight: "500",
  },

  attachmentArrow: {
    marginLeft: Spacing.xs,
  },

  /* Approval */

  approvalCard: {
    padding: Spacing.md,
  },

  approvalRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: Spacing.sm,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: Colors.border.input,
  },

  approvalRowLast: {
    borderBottomWidth: 0,
  },

  approvalIcon: {
    width: 42,
    height: 42,
    borderRadius: 21,
    alignItems: "center",
    justifyContent: "center",
    marginRight: Spacing.sm,
  },

  purpleApproval: {
    backgroundColor: "#F1E8FF",
  },

  orangeApproval: {
    backgroundColor: "#FFF0DD",
  },

  greenApproval: {
    backgroundColor: "#E8F7E8",
  },

  approvalContent: {
    flex: 1,
  },

  approvalLabel: {
    fontSize: FontSize.xs,
    color: Colors.text.secondary,
  },

  approvalValue: {
    marginTop: 3,
    fontSize: FontSize.sm,
    color: Colors.text.primary,
    fontWeight: "600",
  },

  approvalRole: {
    marginTop: 2,
    fontSize: FontSize.xs,
    color: Colors.text.secondary,
  },
});