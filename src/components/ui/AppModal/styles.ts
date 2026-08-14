import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  modalContainer: {
    width: "100%",
    borderRadius: 16,
    padding: 16,
  },

  closeBtn: {
    alignSelf: "flex-end",
  },

  body: {
    marginTop: 10,
  },
});