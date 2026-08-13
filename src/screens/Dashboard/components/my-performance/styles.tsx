import { StyleSheet } from "react-native";

import {
  Colors,
  Radius,
  Spacing,
} from "@/theme";

const styles = StyleSheet.create({
  card: {
    marginBottom: Spacing.md,
    padding: Spacing.md
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    marginBottom: Spacing.md,
  },

  performanceRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: Spacing.sm
  },

  iconContainer: {
    padding: Spacing.sm,
    borderRadius: Radius.md,

    backgroundColor: "#EAF3FF",

    alignItems: "center",
    justifyContent: "center",
  },

  dateContainer: {
    width: 100,
  },

  day: {
    marginTop: Spacing.xs,
  },

  timeContainer: {
    flex: 1,

    alignItems: "flex-start",
  },

  timeValue: {
    marginTop: Spacing.xs,
  },

  divider: {
    height: 1,

    backgroundColor: Colors.border.primary,

    marginVertical: Spacing.md,
  },
});

export default styles;