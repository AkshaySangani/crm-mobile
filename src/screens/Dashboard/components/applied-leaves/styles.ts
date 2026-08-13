import { StyleSheet } from "react-native";

import {
  Colors,
  Radius,
  Spacing,
} from "@/theme";

const styles = StyleSheet.create({
  card: {
    marginBottom: Spacing.md,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    marginBottom: Spacing.md,
  },

  viewAll: {
    flexDirection: "row",
    alignItems: "center",
  },

  arrow: {
    marginLeft: Spacing.xs,

    transform: [
      {
        rotate: "45deg",
      },
    ],
  },

  leaveRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  iconContainer: {
    width: 61,
    height: 61,

    borderRadius: Radius.md,

    alignItems: "center",
    justifyContent: "center",
  },

  leaveContent: {
    flex: 1,

    marginLeft: Spacing.md,
  },

  date: {
    marginTop: Spacing.xs,
  },

  divider: {
    height: 1,

    backgroundColor: Colors.border.primary,

    marginVertical: Spacing.md,
  },
});

export default styles;