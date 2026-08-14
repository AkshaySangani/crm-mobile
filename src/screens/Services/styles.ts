import { Colors, FontSize, FontWeight, Radius, Shadows, Spacing } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#0B61D8",
  },

  container: {
    flex: 1,
    backgroundColor: "#F8FAFD",
  },

  // --------------------------------------------------
  // HEADER
  // --------------------------------------------------

  header: {
    height: 325,
    backgroundColor: "#0965DB",
    overflow: "hidden",
    position: "relative",
  },

  headerContent: {
    zIndex: 10,
    paddingHorizontal: 36,
    paddingTop: 26,
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

  notificationButton: {
    width: 46,
    height: 46,
    justifyContent: "center",
    alignItems: "center",
    marginTop: -2,
  },

  notificationDot: {
    position: "absolute",
    right: 2,
    top: 1,
    width: 13,
    height: 13,
    borderRadius: 7,
    backgroundColor: "#F04444",
    borderWidth: 2,
    borderColor: "#0965DB",
  },

  // Decorative header shapes

  headerCircleOne: {
    position: "absolute",
    width: 390,
    height: 390,
    borderRadius: 195,
    backgroundColor: "rgba(255,255,255,0.055)",
    top: -220,
    right: -70,
  },

  headerCircleTwo: {
    position: "absolute",
    width: 350,
    height: 350,
    borderRadius: 175,
    backgroundColor: "rgba(255,255,255,0.045)",
    top: 150,
    right: -100,
  },

  // --------------------------------------------------
  // CONTENT
  // --------------------------------------------------

  contentWrapper: {
    flex: 1,
    marginTop: -180,
    backgroundColor: "#F8FAFD",
    borderTopLeftRadius: Radius.xxl,
    borderTopRightRadius: Radius.xxl,
    overflow: "hidden",
  },

  scrollContent: {
    paddingTop: Spacing.xl,
  },

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
    paddingHorizontal: Spacing.md,
    paddingTop: Spacing.lg,
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
