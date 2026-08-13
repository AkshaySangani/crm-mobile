import { StyleSheet } from "react-native";

import {
  Colors,
  Radius,
  Spacing,
} from "@/theme";

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.common.white,
    borderRadius: Radius.xl,
  },

  container: {
    flexDirection: "row",
    alignItems: "center",

    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.md,
  },

  iconContainer: {
    width: 70,
    height: 70,

    borderRadius: Radius.lg,

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