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
    backgroundColor: "transparent",
    paddingHorizontal: Spacing.md,
    paddingTop: Spacing.md,
    paddingBottom: Spacing.sm
  },

  headerTop: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  profileImage: {
    width: 62,
    height: 62,
    borderRadius: 36,
    borderWidth: 2,
    borderColor: Colors.border.secondary,
  },

  greetingContainer: {
    marginLeft: 15,
  },

  userName: {
    marginTop: 2,
  },

  /* ================= CONTENT ================= */

  content: {
    gap: Spacing.md
  },
});