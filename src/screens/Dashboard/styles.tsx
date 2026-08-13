/* ============================================================
   STYLES
============================================================ */

import { Colors, Spacing } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F8FA",
  },

  safeArea: {
    flex: 1,
  },

  scrollContent: {
    paddingBottom: 100,
  },

  /* ================= HEADER ================= */

  header: {
    backgroundColor: Colors.brand.primary,
    paddingHorizontal: Spacing.sm,
    paddingTop: Spacing.md,
    paddingBottom: 68,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },

  headerTop: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 35,
  },

  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  profileImage: {
    width: 72,
    height: 72,
    borderRadius: 36,
    borderWidth: 2,
    borderColor: "rgba(255,255,255,0.8)",
  },

  greetingContainer: {
    marginLeft: 15,
  },

  userName: {
    marginTop: 2,
  },

  notificationButton: {
    width: 45,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
  },

  notificationDot: {
    position: "absolute",
    top: 3,
    right: 3,
    width: 11,
    height: 11,
    borderRadius: 6,
    backgroundColor: "#EF4444",
    borderWidth: 2,
    borderColor: Colors.brand.primary,
  },

  /* ================= CONTENT ================= */

  content: {
    marginTop: -42,
    paddingHorizontal: Spacing.sm,
  },
});