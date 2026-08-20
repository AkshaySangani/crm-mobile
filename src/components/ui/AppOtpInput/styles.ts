import { StyleSheet } from "react-native";
import { Colors, Radius, Spacing } from "@/theme";

export default StyleSheet.create({
  wrapper: {
    width: "100%",
  },

  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: Spacing.sm,
  },

  inputWrapper: {
    flex: 1,
    height: 52,
    borderWidth: 1,
    borderColor: Colors.border.input,
    borderRadius: Radius.sm,
    backgroundColor: Colors.common.white,
    alignItems: "center",
    justifyContent: "center",
  },

  filledInput: {
    borderColor: Colors.brand.primary,
  },

  errorBorder: {
    borderColor: Colors.error,
  },

  disabled: {
    opacity: 0.5,
  },

  input: {
    width: "100%",
    height: "100%",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "600",
    color: Colors.text.primary,
    padding: 0,
  },

  error: {
    marginTop: Spacing.xs,
  },
});