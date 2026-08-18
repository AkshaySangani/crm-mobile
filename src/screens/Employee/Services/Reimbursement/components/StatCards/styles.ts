import { StyleSheet } from "react-native";
import {
  Colors,
  FontSize,
  Radius,
  Spacing,
} from "@/theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: Spacing.xs,
  },

  card: {
    flex: 1,
    minHeight: 100,
    paddingVertical: Spacing.xs,
    paddingHorizontal: 2,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: Radius.sm,
    backgroundColor: Colors.common.white,
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
    marginTop: 1,
    textAlign: "center",
    fontSize: FontSize.xxs,
    lineHeight: 11,
  },

  amount: {
    marginTop: 2,
    fontSize: FontSize.xs,
    lineHeight: 11,
  },
});