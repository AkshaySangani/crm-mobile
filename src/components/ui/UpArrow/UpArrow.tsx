import { Pressable } from "react-native";
import AppText from "../AppText";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/theme";
import { styles } from "./styles";

interface UpArrowProps {
  label?: string;
  onPress?: () => void;
}

export default function UpArrow({ label, onPress }: UpArrowProps) {
  return (
    <Pressable onPress={onPress} style={styles.viewAll}>
      {label ? (
        <AppText size="sm" weight="semiBold" color={Colors.brand.primary}>
          {label}
        </AppText>
      ) : (
        <></>
      )}

      <Ionicons
        name="arrow-up-outline"
        size={18}
        color={Colors.brand.primary}
        style={styles.arrow}
      />
    </Pressable>
  );
}
