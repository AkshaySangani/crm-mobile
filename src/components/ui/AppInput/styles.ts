import { StyleSheet } from "react-native";
import { Colors, Radius, Sizes, Spacing } from "@/theme";

export default StyleSheet.create({
  wrapper: {
    width: "100%",
  },

  label: {
    marginBottom: Spacing.xs,
  },

  container: {
    height: Sizes.inputHeight,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: Colors.border.input,
    borderRadius: Radius.md,
    paddingHorizontal: Spacing.md,
    backgroundColor: Colors.input.background,
  },

  input: {
    flex: 1,
    fontSize: 16,
    color: Colors.text.primary,
    paddingVertical: 0,
  },

  leftIcon: {
    marginRight: Spacing.sm,
  },

  errorBorder: {
    borderColor: Colors.error,
  },

  error: {
    marginTop: 5,
  },

  disabled: {
    backgroundColor: Colors.input.disabled,
  },
});
