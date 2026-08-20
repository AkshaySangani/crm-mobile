import { StyleSheet } from "react-native";
import { Spacing } from "@/theme/spacing";

export default StyleSheet.create({
  card: {
    width: "100%",
    padding: Spacing.sm,
  },

  space: {
    height: Spacing.md,
  },

  back: {
    alignSelf: "center",
    marginVertical: Spacing.md,
  },

  resendContainer: {
    alignItems: "flex-end",
    marginTop: 10,
  },
});
