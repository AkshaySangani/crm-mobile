import { StyleSheet } from "react-native";
import { Spacing } from "@/theme/spacing";
import { Radius } from "@/theme/radius";
import { Colors } from "@/theme/colors";

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    paddingVertical: 20,
  },

  logoContainer: {
    alignItems: "center",
    marginBottom: Spacing.xl,
  },

  logoBox: {
    width: 80,
    height: 80,
    borderRadius: Radius.lg,
    backgroundColor: Colors.brand.primary,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: Spacing.lg,
  },

  title: {
    marginBottom: Spacing.sm,
  },

  card: {
    width: "100%",
  },

  space: {
    height: Spacing.md,
  },

  forgot: {
    alignSelf: "flex-end",
    marginVertical: Spacing.md,
  },
});
