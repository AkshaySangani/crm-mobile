import {
  StyleSheet,
} from "react-native";

import {
  Colors,
  Radius,
  Spacing,
} from "@/theme";

export const styles =
  StyleSheet.create({
    container: {
      width: "100%",
    },

    label: {
      marginBottom: Spacing.sm,
      color: Colors.text.primary,
    },

    required: {
      color: Colors.error,
    },

    /*
     * Input
     */

    inputContainer: {
      minHeight: 42,

      flexDirection: "row",
      alignItems: "center",

      justifyContent:
        "space-between",

      borderWidth: 1,
      borderColor:
        Colors.border.input,

      borderRadius: Radius.xs,

      backgroundColor:
        Colors.common.white,

      paddingHorizontal:
        Spacing.md,
    },

    input: {
      flex: 1,

      height: 40,

      padding: 0,
      margin: 0,

      fontSize: 14,
      fontWeight: "500",

      color: Colors.text.primary,
    },

    inputError: {
      borderColor: Colors.error,
    },

    inputDisabled: {
      backgroundColor:
        Colors.input.disabled,

      opacity: 0.7,
    },

    error: {
      marginTop: Spacing.xs,
      color: Colors.error,
    },

    /*
     * Modal
     */

    modalContainer: {
      flex: 1,
    },

    backdrop: {
      ...StyleSheet.absoluteFillObject,

      backgroundColor:
        "rgba(0, 0, 0, 0.15)",
    },

    /*
     * Picker
     */

    picker: {
      position: "absolute",

      width: 235,

      borderWidth: 1,
      borderColor:
        Colors.border.input,

      borderRadius: Radius.sm,

      backgroundColor:
        Colors.common.white,

      paddingBottom: Spacing.sm,

      elevation: 10,

      shadowColor: "#000",

      shadowOffset: {
        width: 0,
        height: 4,
      },

      shadowOpacity: 0.15,

      shadowRadius: 10,
    },

    /*
     * Header
     */

    header: {
      height: 58,

      flexDirection: "row",
      alignItems: "center",

      justifyContent:
        "space-between",

      paddingHorizontal:
        Spacing.sm,
    },

    arrowButton: {
      width: 36,
      height: 36,

      alignItems: "center",
      justifyContent: "center",

      borderRadius: Radius.xs,
    },

    headerTitleButton: {
      flexDirection: "row",

      alignItems: "center",

      justifyContent: "center",

      gap: Spacing.xs,

      paddingHorizontal:
        Spacing.sm,

      paddingVertical:
        Spacing.xs,
    },

    headerTitle: {
      color: Colors.text.primary,
    },

    /*
     * Grid
     */

    grid: {
      flexDirection: "row",

      flexWrap: "wrap",

      paddingHorizontal:
        Spacing.sm,

      paddingBottom:
        Spacing.sm,
    },

    gridItem: {
      width: "33.3333%",

      height: 48,

      alignItems: "center",

      justifyContent: "center",

      borderRadius: Radius.xs,
    },

    selectedItem: {
      backgroundColor:
        Colors.brand.primary,
    },

    itemText: {
      color: Colors.text.primary,
    },

    selectedText: {
      color: Colors.common.white,
    },

    disabledText: {
      color: "#D1D5DB",
    },
  });