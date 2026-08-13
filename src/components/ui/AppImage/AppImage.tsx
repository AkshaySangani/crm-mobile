import React from "react";
import {
  ImageStyle,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";
import { Image, ImageProps, ImageContentFit } from "expo-image";
import styles from "./styles";

interface AppImageProps extends Omit<ImageProps, "style"> {
  containerStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<ImageStyle>;
  borderRadius?: number;
  contentFit?: ImageContentFit;
}

const AppImage = ({
  containerStyle,
  style,
  borderRadius = 12,
  contentFit = "cover",
  transition = 200,
  ...props
}: AppImageProps) => {
  return (
    <View
      style={[
        styles.container,
        { borderRadius },
        containerStyle,
      ]}
    >
      <Image
        {...props}
        transition={transition}
        contentFit={contentFit}
        style={[
          StyleSheet.absoluteFillObject,
          { borderRadius },
          style,
        ]}
      />
    </View>
  );
};

export default AppImage;