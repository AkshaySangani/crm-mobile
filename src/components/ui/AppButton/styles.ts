import { StyleSheet } from "react-native";
import { Sizes, Spacing } from "@/theme";

export default StyleSheet.create({
  button: {
    height: Sizes.buttonHeight,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: Spacing.lg,
  },

  fullWidth: {
    width: "100%",
  },

  disabled: {
    opacity: 0.6,
  },
});
