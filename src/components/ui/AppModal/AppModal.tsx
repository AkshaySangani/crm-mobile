import { Colors, FontSize, Spacing } from "@/theme";
import AntDesign from "@expo/vector-icons/AntDesign";
import React from "react";
import {
    Modal,
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View
} from "react-native";
import { styles } from "./styles";

interface Props {
  visible: boolean;
  onClose: () => void;
  children: React.ReactNode;
  closeOnOutsidePress?: boolean;
  title?: string;
}

export default function CommonModal({
  visible,
  onClose,
  children,
  closeOnOutsidePress = true,
  title = ""
}: Props) {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
    >
      <TouchableWithoutFeedback
        onPress={closeOnOutsidePress ? onClose : undefined}
      >
        <View style={[styles.overlay,{backgroundColor: Colors.brand.primaryDark, padding: Spacing.md}]}>
          <TouchableWithoutFeedback>
            <View style={[styles.modalContainer, { backgroundColor: Colors.common.white }]}>
              <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <Text style={{ fontSize: FontSize.md }}>{title}</Text>
                {/* Close Button */}
                <TouchableOpacity
                  style={styles.closeBtn}
                  onPress={onClose}
                >
                  <AntDesign name="close" size={22} color={Colors.brand.secondary} />
                </TouchableOpacity>
              </View>

              {/* Dynamic Body */}
              <View style={styles.body}>
                {children}
              </View>

            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

