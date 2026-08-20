import { StyleSheet } from "react-native";
import { Spacing } from "@/theme/spacing";

export default StyleSheet.create({

  card: {
    width: "100%",
    padding: Spacing.sm
  },

  space: {
    height: Spacing.md,
  },

  forgot: {
    alignSelf: "flex-end",
    marginVertical: Spacing.md,
  },

  back: {
    alignSelf: "center",
    marginVertical: Spacing.md,
  },
});
