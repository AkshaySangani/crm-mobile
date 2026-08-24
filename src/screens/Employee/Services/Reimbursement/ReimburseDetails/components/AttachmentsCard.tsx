import React from "react";
import { Pressable, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppCard from "@/components/ui/AppCard";
import AppText from "@/components/ui/AppText";
import AppImage from "@/components/ui/AppImage";
import { Colors } from "@/theme";
import { styles } from "../styles";

interface Props {
  attachments: string[];
  onAttachmentPress?: (attachment: string) => void;
}

const AttachmentsCard = ({
  attachments,
  onAttachmentPress,
}: Props) => {
  return (
    <AppCard style={styles.attachmentCard}>
      <AppText style={styles.sectionTitle}>
        Attachment
      </AppText>

      <View style={styles.attachmentGrid}>
        {attachments.map((attachment, index) => (
          <Pressable
            key={index}
            style={styles.attachmentItem}
            onPress={() => onAttachmentPress?.(attachment)}
          >
            <View style={styles.attachmentImageWrapper}>
              <AppImage
                fallbackSource={require("@/assets/images/no-image.jpg")}
                src={attachment}
                style={styles.attachmentImage}
              />

              <View style={styles.expandButton}>
                <MaterialCommunityIcons
                  name="arrow-expand"
                  size={17}
                  color={Colors.common.white}
                />
              </View>
            </View>
          </Pressable>
        ))}
      </View>
    </AppCard>
  );
};

export default AttachmentsCard;