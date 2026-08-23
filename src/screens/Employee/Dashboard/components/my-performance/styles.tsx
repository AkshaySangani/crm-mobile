import { StyleSheet } from "react-native";

import {
  Colors,
  Radius,
  Spacing,
} from "@/theme";

const styles = StyleSheet.create({
  card: {
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