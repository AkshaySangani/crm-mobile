import React from "react";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { FlatList, ListRenderItem, Pressable, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { styles } from "./styles";
import AppText from "../AppText";
import { Colors } from "@/theme";

type IconName = React.ComponentProps<typeof MaterialCommunityIcons>["name"];

const tabIcons: Record<string, IconName> = {
  Dashboard: "home",
  Services: "view-grid",
  Menu: "menu",
};

export default function Tab({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {

    // render tab
  const renderItem: ListRenderItem<(typeof state.routes)[number]> = ({
    item: route,
    index,
  }) => {
    const { options } = descriptors[route.key];

    const label =
      options.tabBarLabel !== undefined
        ? options.tabBarLabel
        : options.title !== undefined
          ? options.title
          : route.name;

    const isFocused = state.index === index;

    const iconName = tabIcons[route.name] ?? "circle-outline";

    const onPress = () => {
      const event = navigation.emit({
        type: "tabPress",
        target: route.key,
        canPreventDefault: true,
      });

      if (!isFocused && !event.defaultPrevented) {
        navigation.navigate(route.name);
      }
    };

    const onLongPress = () => {
      navigation.emit({
        type: "tabLongPress",
        target: route.key,
      });
    };

    return (
      <Pressable
        accessibilityRole="button"
        accessibilityState={isFocused ? { selected: true } : {}}
        accessibilityLabel={options.tabBarAccessibilityLabel}
        testID={options.tabBarButtonTestID}
        onPress={onPress}
        onLongPress={onLongPress}
        style={styles.tab}
      >
        {/* Icon */}
        <MaterialCommunityIcons
          name={iconName}
          size={25}
          style={[isFocused ? styles.activeIcon : styles.inactiveIcon]}
        />

        {/* Label */}
        <TabLabel label={label} isFocused={isFocused} />
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.tabBar}>
        <FlatList
          data={state.routes}
          keyExtractor={(item) => item.key}
          renderItem={renderItem}
          horizontal
          scrollEnabled={false}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
        />
      </View>
    </View>
  );
}

interface TabLabelProps {
  label: string | ((props: any) => React.ReactNode);
  isFocused: boolean;
}

function TabLabel({ label, isFocused }: TabLabelProps) {
  if (typeof label !== "string") {
    return null;
  }

  return (
    <AppText
      size="xs"
      weight={isFocused ? "semiBold" : "regular"}
      color={isFocused ? Colors.brand.primary : "default"}
    >
      {label}
    </AppText>
  );
}
