import { StyleSheet } from "react-native";
import { Colors, Radius, Spacing, FontSize } from "@/theme";

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

  form: {
    gap: Spacing.sm
  },

  field: {
    marginBottom: Spacing.md,
  },

  label: {
    fontSize: FontSize.sm,
    color: Colors.text.primary,
    marginBottom: Spacing.xs,
  },

  required: {
    color: Colors.error,
  },

  input: {
    height: 48,
    borderWidth: 1,
    borderColor: Colors.border.input,
    borderRadius: Radius.xs,
    paddingHorizontal: Spacing.sm,
    fontSize: FontSize.sm,
    color: Colors.text.primary,
    backgroundColor: Colors.brand.primary,
  },

  placeholder: {
    color: Colors.text.secondary,
  },

  placeholderText: {
    color: Colors.text.secondary,
  },

  dateInput: {
    height: 48,
    borderWidth: 1,
    borderColor: Colors.border.input,
    borderRadius: Radius.xs,
    paddingLeft: Spacing.sm,
    paddingRight: Spacing.sm,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  dateText: {
    fontSize: FontSize.sm,
    color: Colors.text.primary,
  },

  calendarIcon: {
    color: Colors.text.primary,
  },

  commentInput: {
    minHeight: 112,
    borderWidth: 1,
    borderColor: Colors.border.input,
    borderRadius: Radius.xs,
    paddingHorizontal: Spacing.sm,
    paddingVertical: Spacing.sm,
    fontSize: FontSize.sm,
    color: Colors.text.primary,
    backgroundColor: Colors.brand.primary,
  },

  uploadBox: {
    minHeight: 50,
    borderWidth: 1,
    borderColor: Colors.border.input,
    borderRadius: Radius.xs,
    paddingHorizontal: Spacing.sm,
    paddingVertical: Spacing.xs,
    flexDirection: "row",
    alignItems: "center",
  },

  uploadButton: {
    height: 38,
    paddingHorizontal: Spacing.sm,
    borderWidth: 1,
    borderColor: Colors.border.input,
    borderRadius: Radius.xs,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.common.white,
  },

  uploadIcon: {
    color: Colors.text.primary,
    marginRight: Spacing.xs,
  },

  uploadButtonText: {
    fontSize: FontSize.sm,
    color: Colors.text.primary,
    fontWeight: "500",
  },

  fileCount: {
    flex: 1,
    marginLeft: Spacing.sm,
    fontSize: FontSize.sm,
  },

  documentsList: {
    marginTop: Spacing.sm,
    gap: Spacing.xs,
  },

  documentItem: {
    minHeight: 44,
    paddingHorizontal: Spacing.sm,
    borderRadius: Radius.xs,
    backgroundColor: Colors.brand.secondary,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  documentInfo: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginRight: Spacing.sm,
  },

  documentIcon: {
    color: Colors.brand.primary,
    marginRight: Spacing.xs,
  },

  documentName: {
    flex: 1,
    fontSize: FontSize.sm,
    color: Colors.text.primary,
  },

  removeIcon: {
    color: Colors.error,
  },

  submitButton: {
    height: 48,
    marginTop: Spacing.sm,
    borderRadius: Radius.sm,
    backgroundColor: Colors.brand.primary,
    alignItems: "center",
    justifyContent: "center",
  },

  submitButtonText: {
    color: Colors.text.primary,
    fontSize: FontSize.sm,
    fontWeight: "600",
  },
});