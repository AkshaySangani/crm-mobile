import React, { useMemo, useState } from "react";
import {
  ImageStyle,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";
import {
  Image,
  ImageProps,
  ImageContentFit,
} from "expo-image";

import { config } from "@/utils/config";

import styles from "./styles";

interface AppImageProps extends Omit<ImageProps, "style" | "source"> {
  src?: string | null;
  fallbackSource?: ImageProps["source"];
  containerStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<ImageStyle>;
  borderRadius?: number;
  contentFit?: ImageContentFit;
}

const BACKEND_URL = config.BACKEND_API_URL || "";

const AppImage = ({
  src,
  fallbackSource = require("@/assets/images/User-Image.png"),
  containerStyle,
  style,
  borderRadius = 12,
  contentFit = "cover",
  transition = 200,
  onError,
  ...props
}: AppImageProps) => {
  const [hasError, setHasError] = useState(false);

  const imageSource = useMemo(() => {
    // No image
    if (!src || hasError) {
      return fallbackSource;
    }

    // Absolute URLs
    if (
      src.startsWith("blob:") ||
      src.startsWith("http://") ||
      src.startsWith("https://") ||
      src.startsWith("data:")
    ) {
      return src;
    }

    // Relative backend path
    return `${BACKEND_URL}${src}`;
  }, [src, hasError, fallbackSource]);

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
        source={imageSource}
        transition={transition}
        contentFit={contentFit}
        style={[
          StyleSheet.absoluteFillObject,
          { borderRadius },
          style,
        ]}
        onError={(event) => {
          setHasError(true);

          // Preserve user's onError if provided
          onError?.(event);
        }}
      />
    </View>
  );
};

export default AppImage;