import { StyleSheet } from "react-native";
import { Colors, Radius, Spacing } from "@/theme";

const styles = StyleSheet.create({
  container: {
    gap: Spacing.md,
  },

  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: Spacing.xs,
  },

  subtitle: {
    marginTop: 2,
  },

  buttonContainer: {
    flexDirection: "row",
    gap: Spacing.md,
  },

  buttonWrapper: {
    flex: 1,
  },

 

  subtitleContainer: {
    marginTop: 4,
    justifyContent: "flex-end",
    alignItems: "flex-end"
  },

  workingTimeRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  attendanceInfoRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginTop: 3,
  },

  infoItem: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default styles;
