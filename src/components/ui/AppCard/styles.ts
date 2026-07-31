import { StyleSheet } from "react-native";
import {
  Colors,
  Radius,
  Shadows,
  Spacing,
} from "@/theme";

export default StyleSheet.create({
  card: {
    backgroundColor: Colors.common.white,
    borderRadius: Radius.lg,
    ...Shadows.sm,
  },

  padding: {
    padding: Spacing.md,
  },
});