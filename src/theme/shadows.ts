import { Platform } from "react-native";

export const Shadows = {
  none: {},

  sm: Platform.select({
    ios: {
      shadowColor: "#000",
      shadowOpacity: 0.05,
      shadowRadius: 4,
      shadowOffset: {
        width: 0,
        height: 2,
      },
    },

    android: {
      elevation: 2,
    },
  }),

  md: Platform.select({
    ios: {
      shadowColor: "#000",
      shadowOpacity: 0.08,
      shadowRadius: 8,
      shadowOffset: {
        width: 0,
        height: 4,
      },
    },

    android: {
      elevation: 4,
    },
  }),

  lg: Platform.select({
    ios: {
      shadowColor: "#000",
      shadowOpacity: 0.12,
      shadowRadius: 12,
      shadowOffset: {
        width: 0,
        height: 6,
      },
    },

    android: {
      elevation: 8,
    },
  }),
};
