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

  container: {
    minHeight: 103,

    marginTop: Spacing.md,

    paddingHorizontal: Spacing.md,

    borderRadius: Radius.lg,

    backgroundColor: "#EAF3FF",

    flexDirection: "row",
    alignItems: "center",
  },

  iconContainer: {
    width: 64,
    height: 64,

    borderRadius: Radius.md,

    backgroundColor: Colors.brand.primary,

    alignItems: "center",
    justifyContent: "center",
  },

  content: {
    flex: 1,

    marginLeft: Spacing.md,
  },

  subtitle: {
    marginTop: Spacing.xs,
  },
});

export default styles;