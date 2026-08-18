import { Colors, FontWeight, Radius, Shadows, Spacing } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  // THIS is the actual floating tab
  container: {
    position: "absolute",

    width: "80%",

    alignSelf: "center",
    bottom: Spacing.lg,

    backgroundColor: "#FFFFFF",

    borderRadius: Radius.lg,

    // iOS shadow
    ...Shadows.md,

    zIndex: 999,
  },

  tabBar: {
    height: 65,

    width: "100%",

    flexDirection: "row",
    alignItems: "stretch",

    backgroundColor: "#FFFFFF",

    borderRadius: Radius.xl,

    overflow: "hidden",
    paddingVertical: Spacing.sm,
  },

  tab: {
    flex: 1,

    alignItems: "center",
    justifyContent: "center",

    position: "relative",

    paddingVertical: 8,
  },

  listContent: {
    flexGrow: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: Spacing.md,
  },

  //   indicator: {
  //     // position: "absolute",

  //     // top: 0,

  //     // width: "70%",
  //     // height: 3,

  //     // borderRadius: 3,

  //     // backgroundColor: "transparent",
  //   },

  //   activeIndicator: {
  //     backgroundColor: "#5B3FD1",
  //   },

  activeIcon: {
    color: Colors.brand.primary,
  },

  inactiveIcon: {
    color: Colors.brand.secondary,
  },
});
