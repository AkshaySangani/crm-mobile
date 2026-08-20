import { StyleSheet } from "react-native";
import {
  Colors,
  FontSize,
  Radius,
  Shadows,
  Spacing,
} from "@/theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: Spacing.xs,
  },

  card: {
    flex: 1,
    gap: Spacing.xs,
    minHeight: 100,
    paddingVertical: Spacing.xs,
    paddingHorizontal: 2,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: Radius.sm,
    backgroundColor: Colors.common.white,
    borderWidth: 1,
        borderColor: Colors.border.primary,
        ...Shadows.md
  },

  iconContainer: {
    width: 25,
    height: 25,
    borderRadius: 13,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 3,
  },

  count: {
    lineHeight: 17,
  },

  label: {
    textAlign: "center",
    fontSize: FontSize.xxs,
    lineHeight: 11,
  },

  amount: {
    fontSize: FontSize.xs,
    lineHeight: 11,
  },
});