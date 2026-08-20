import React from "react";
import {
  Image,
  Pressable,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppCard from "@/components/ui/AppCard";
import AppText from "@/components/ui/AppText";
import { Colors } from "@/theme";
import { styles } from "../styles";
import { ReimbursementAttachment } from "../ReimbursementDetails";

interface Props {
  attachments: ReimbursementAttachment[];
  onAttachmentPress?: (
    attachment: ReimbursementAttachment
  ) => void;
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

      {attachments.map((attachment, index) => (
        <Pressable
          key={attachment.id}
          style={[
            styles.attachmentItem,
            index === attachments.length - 1 && {
              borderBottomWidth: 0,
            },
          ]}
          onPress={() => onAttachmentPress?.(attachment)}
        >
          <View style={styles.attachmentImageWrapper}>
            {attachment.type === "image" ? (
              <Image
                source={{ uri: attachment.uri }}
                style={styles.attachmentImage}
                resizeMode="cover"
              />
            ) : (
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <MaterialCommunityIcons
                  name={
                    attachment.type === "pdf"
                      ? "file-pdf-box"
                      : "file-outline"
                  }
                  size={42}
                  color={Colors.brand.primary}
                />
              </View>
            )}

            {attachment.type === "image" && (
              <View style={styles.expandButton}>
                <MaterialCommunityIcons
                  name="arrow-expand"
                  size={17}
                  color={Colors.common.white}
                />
              </View>
            )}
          </View>

          <View style={styles.attachmentInfo}>
            <AppText style={styles.attachmentName}>
              {attachment.name}
            </AppText>

            <AppText style={styles.attachmentHint}>
              Tap to view full receipt
            </AppText>
          </View>

          <MaterialCommunityIcons
            name="chevron-right"
            size={28}
            color={Colors.brand.primary}
            style={styles.attachmentArrow}
          />
        </Pressable>
      ))}
    </AppCard>
  );
};

export default AttachmentsCard;