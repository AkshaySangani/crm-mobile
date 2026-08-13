import { Spacing } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
});
