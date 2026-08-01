import { StyleSheet } from "react-native";
import { Spacing } from "@/theme/spacing";

export default StyleSheet.create({
  container: {
    flex: 1,
  },

  keyboard: {
    flex: 1,
  },

  content: {
    flexGrow: 1,
  },

  padding: {
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.md,
  },
});
