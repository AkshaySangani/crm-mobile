import { Colors, Radius, Spacing } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Spacing.md,
    paddingTop: Spacing.md,
    paddingBottom: Spacing.xl,
  },

  title: {
    marginBottom: Spacing.lg,
  },

  label: {
    marginBottom: Spacing.xs,
  },

  input: {
    minHeight: 54,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: Spacing.sm,
    backgroundColor: Colors.common.white,
    borderWidth: 1,
    borderColor: Colors.border.input,
    borderRadius: Radius.sm,
    marginBottom: Spacing.md,
  },

  inputText: {
    flex: 1,
    marginLeft: Spacing.sm,
  },

  row: {
    flexDirection: "row",
    gap: Spacing.sm,
  },

  half: {
    flex: 1,
  },

  reasonInput: {
    height: 120,
    padding: Spacing.sm,
    backgroundColor: Colors.common.white,
    borderWidth: 1,
    borderColor: Colors.border.input,
    borderRadius: Radius.sm,
    marginBottom: Spacing.lg,
  },

  submitButton: {
    height: 52,
    borderRadius: Radius.sm,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.brand.primary,
  },
});