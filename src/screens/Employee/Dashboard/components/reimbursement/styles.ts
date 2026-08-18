import { StyleSheet } from "react-native";

import {
  Colors,
  Radius,
  Spacing,
} from "@/theme";

const styles = StyleSheet.create({
  card: {
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

  row: {
    flexDirection: "row",
    alignItems: "center",
  },

  iconContainer: {
    width: 61,
    height: 61,

    borderRadius: Radius.md,

    backgroundColor: "#F0EBFF",

    alignItems: "center",
    justifyContent: "center",
  },

  content: {
    flex: 1,

    marginLeft: Spacing.md,
  },

  meta: {
    flexDirection: "row",
    alignItems: "center",

    marginTop: Spacing.xs,

    gap: Spacing.xs,
  },
});

export default styles;