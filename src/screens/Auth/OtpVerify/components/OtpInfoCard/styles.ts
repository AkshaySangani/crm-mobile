import { StyleSheet } from "react-native";
import { Colors } from "@/theme/colors";
import { Radius, Spacing } from "@/theme";

export default StyleSheet.create({
  container: {
    width: "100%",
    minHeight: 85,

    flexDirection: "row",
    alignItems: "center",

    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,

    borderWidth: 1,
    borderColor: Colors.border.input,
    borderRadius: Radius.md,

    backgroundColor: Colors.common.white,
  },

  icon: {
    marginRight: Spacing.sm,
  },

  content: {
    flex: 1,
  },
});