import { Dimensions, StyleSheet } from "react-native";
import { Spacing } from "@/theme/spacing";
const { height } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    flex: 1,
  },

  keyboard: {
    flex: 1,
  },

  content: {
    flexGrow: 1,
  },

  padding: {
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.md,
  },

  
  background: {
    ...StyleSheet.absoluteFillObject,
    overflow: "hidden",
  },

  blueGradient: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: height * 0.45,
  },

  blueShapeOne: {
    position: "absolute",
    width: 420,
    height: 420,
    borderRadius: 210,
    top: -170,
    right: -100,
    backgroundColor: "rgba(255, 255, 255, 0.045)",
  },

  blueShapeTwo: {
    position: "absolute",
    width: 520,
    height: 520,
    borderRadius: 260,
    top: 80,
    right: -190,
    backgroundColor: "rgba(0, 25, 160, 0.12)",
  },

  whiteSheet: {
    position: "absolute",
    top: height * 0.225,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#F8F9FC",
    borderTopLeftRadius: 38,
    borderTopRightRadius: 38,
  },
});
