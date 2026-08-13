import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    overflow: "hidden",
  },

  horizontalContent: {
    minWidth: "100%",
  },

  headerRow: {
    flexDirection: "row",
    backgroundColor: "#F5F8FC",
    borderBottomWidth: 1,
    borderBottomColor: "#E8EDF3",
  },

  headerCell: {
    minHeight: 48,
    justifyContent: "center",
    paddingHorizontal: 12,
  },

  headerText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#64748B",
  },

  row: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#EEF1F5",
  },

  cell: {
    justifyContent: "center",
    paddingHorizontal: 12,
  },

  cellText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#1E293B",
  },

  emptyContainer: {
    height: 100,
    alignItems: "center",
    justifyContent: "center",
  },

  emptyText: {
    fontSize: 14,
    color: "#94A3B8",
  },
});

export default styles;