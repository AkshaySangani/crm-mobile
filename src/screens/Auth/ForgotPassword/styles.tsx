import { StyleSheet } from "react-native";
import { Spacing } from "@/theme/spacing";
import { Radius } from "@/theme/radius";
import { Colors } from "@/theme/colors";

export default StyleSheet.create({

  card: {
    width: "100%",
    padding: Spacing.sm
  },

  space: {
    height: Spacing.md,
  },

  back: {
    alignSelf: "center",
    marginVertical: Spacing.md,
  },
});
