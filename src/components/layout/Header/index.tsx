import React, { ReactNode } from "react";
import { Text, TouchableOpacity, View, ViewStyle } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors, FontSize, FontWeight } from "@/theme";
import AppText from "@/components/ui/AppText";

interface HeaderProps {
  title: string;
  subtitle?: string;

  showBack?: boolean;
  onBackPress?: () => void;

  leftComponent?: ReactNode;
  rightComponent?: ReactNode;

  style?: ViewStyle;
}

const Header = ({
  title,
  subtitle,
  showBack = false,
  onBackPress,
  leftComponent,
  rightComponent,
  style,
}: HeaderProps) => {
  return (
    <View
      style={[
        {
          height: 64,
          paddingHorizontal: 20,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        },
        style,
      ]}
    >
      {/* LEFT */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          flex: 1,
        }}
      >
        {showBack && (
          <TouchableOpacity
            onPress={onBackPress}
            style={{
              width: 40,
              height: 40,
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            <Ionicons name="arrow-back" size={24} color={Colors.common.white} />
          </TouchableOpacity>
        )}

        {leftComponent}

        <View
          style={{
            marginLeft: showBack || leftComponent ? 8 : 0,
          }}
        >
          <Text
            style={{
              fontSize: FontSize.xl,
              fontWeight: FontWeight.bold,
              color: Colors.common.white,
            }}
          >
            {title}
          </Text>

          {subtitle && (
            <AppText
              size="sm"
              style={{
                color: "#6B7280",
                marginTop: 2,
              }}
            >
              {subtitle}
            </AppText>
          )}
        </View>
      </View>

      {/* RIGHT */}
      {rightComponent && (
        <View
          style={{
            marginLeft: 12,
          }}
        >
          {rightComponent}
        </View>
      )}
    </View>
  );
};

export default Header;
