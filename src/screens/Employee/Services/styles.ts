import { Colors, FontSize, FontWeight, Radius, Shadows, Spacing } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

  // --------------------------------------------------
  // HEADER
  // --------------------------------------------------

  header: {
    overflow: "hidden",
    position: "relative",
  },

  headerContent: {
    zIndex: 10,
    paddingHorizontal: 36,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },

  headerTitle: {
    color: Colors.common.white,
    fontSize: FontSize.xxl,
    lineHeight: 48,
    fontWeight: "700",
    letterSpacing: -0.8,
  },

  headerSubtitle: {
    color: Colors.common.white,
    fontSize: FontSize.sm,
    lineHeight: 22,
    fontWeight: "400",
    marginTop: Spacing.xs,
  },

  // --------------------------------------------------
  // CONTENT
  // --------------------------------------------------

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    rowGap: Spacing.md,
    columnGap: Spacing.sm,
  },

  // --------------------------------------------------
  // SERVICE CARD
  // --------------------------------------------------
  listContent: {
    // paddingHorizontal: Spacing.md,
    paddingTop: Spacing.xxl,
    paddingBottom: Spacing.md,
  },

  columnWrapper: {
    gap: Spacing.md,
    marginBottom: Spacing.md,
  },

  serviceCard: {
    flex: 1,
    gap: Spacing.sm
  },

  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: Radius.md,

    alignItems: "center",
    justifyContent: "center",
  },

  serviceTitle: {
    color: Colors.text.primary,
    fontSize: FontSize.md,
    fontWeight: FontWeight.bold
  },

  serviceDescription: {
    color: Colors.text.secondary,
    fontSize: FontSize.xs,
    fontWeight: FontWeight.regular,
  },

  arrowContainer: {
    position: "absolute",
    right: 5,
    bottom: 5,
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
  },
});
