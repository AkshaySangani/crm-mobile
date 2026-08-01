import { StyleSheet } from "react-native";
import { Spacing } from "@/theme/spacing";
import { Colors } from "@/theme/colors";

export default StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },

  fullScreen: {
    flex: 1,
    backgroundColor: Colors.layout.pageBg,
  },

  text: {
    marginTop: Spacing.sm,
  },
});
