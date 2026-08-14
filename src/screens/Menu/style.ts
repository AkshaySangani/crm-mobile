import { StyleSheet } from "react-native";

import {
  Colors,
  Radius,
  Spacing,
} from "../../theme";

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.brand.primary,
  },

  /* =========================
     HEADER
  ========================= */

  headerBackground: {
    backgroundColor: Colors.brand.primary,
    // height: 250,
  },

  header: {
    height: 92,
    paddingHorizontal: Spacing.md,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  notificationButton: {
    width: 42,
    height: 42,
    alignItems: "center",
    justifyContent: "center",
  },

  notificationDot: {
    position: "absolute",
    top: 5,
    right: 5,

    width: 9,
    height: 9,

    borderRadius: Radius.xs,
    backgroundColor: Colors.error,

    borderWidth: 1.5,
    borderColor: Colors.common.white,
  },

  /* =========================
     SCROLL
  ========================= */

  scrollContent: {
    paddingHorizontal: Spacing.md,

    /*
     * Pull cards upward over the blue header.
     */
    marginTop: Spacing.lg,

    paddingBottom: 110,
  },

  /* =========================
     PROFILE
  ========================= */

  profileCard: {
    padding: Spacing.md,

    borderRadius: Radius.md,

    backgroundColor: Colors.common.white,
  },

  profileContent: {
    flexDirection: "row",
    alignItems: "center",
  },

  profileImage: {
    width: 126,
    height: 126,

    borderRadius: 63,

    backgroundColor: "#E7F0FB",
  },

  profileDetails: {
    flex: 1,
    marginLeft: Spacing.md,
  },

  employeeBadge: {
    alignSelf: "flex-start",

    marginTop: Spacing.xs,
    paddingHorizontal: Spacing.sm,
    paddingVertical: Spacing.xs,

    borderRadius: Radius.xs,

    backgroundColor: "#E8F1FF",
  },

  designation: {
    marginTop: Spacing.xs,
  },

  activeContainer: {
    flexDirection: "row",
    alignItems: "center",

    marginTop: Spacing.xs,
  },

  activeDot: {
    width: 10,
    height: 10,

    marginRight: Spacing.xs,

    borderRadius: 5,

    backgroundColor: Colors.status.success,
  },

  /* =========================
     SECTION CARD
  ========================= */

  sectionCard: {
    marginTop: Spacing.md,

    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,

    borderRadius: Radius.md,

    backgroundColor: Colors.common.white,
  },

  sectionTitle: {
    marginBottom: Spacing.sm,
  },

  /* =========================
     COMPANY INFORMATION
  ========================= */

  companyRow: {
    minHeight: 90,

    flexDirection: "row",
    alignItems: "center",

    paddingVertical: Spacing.sm,
  },

  companyRowBorder: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: Colors.border.primary,
  },

  infoIconContainer: {
    width: 62,
    height: 62,

    alignItems: "center",
    justifyContent: "center",

    marginRight: Spacing.md,

    borderRadius: Radius.sm,

    backgroundColor: "#EAF3FF",
  },

  companyDetails: {
    flex: 1,
  },

  companyValue: {
    marginTop: 2,
  },

  companyDescription: {
    marginTop: 2,
    lineHeight: 20,
  },

  /* =========================
     MENU ITEMS
  ========================= */

  menuRow: {
    minHeight: 82,

    flexDirection: "row",
    alignItems: "center",

    paddingVertical: Spacing.sm,
  },

  menuRowBorder: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: Colors.border.primary,
  },

  menuIconContainer: {
    width: 62,
    height: 62,

    alignItems: "center",
    justifyContent: "center",

    marginRight: Spacing.md,

    borderRadius: Radius.sm,

    backgroundColor: "#EAF3FF",
  },

  darkModeIconContainer: {
    backgroundColor: "#EEE9FF",
  },

  policyIconContainer: {
    backgroundColor: "#E4F7F2",
  },

  logoutIconContainer: {
    backgroundColor: "#FFE9EB",
  },

  menuDetails: {
    flex: 1,
  },

  menuDescription: {
    marginTop: 2,
  },
});