import React from "react";
import { View } from "react-native";

import AppCard from "@/components/ui/AppCard";
import AppText from "@/components/ui/AppText";
import { styles } from "../styles";

interface Props {
  description: string;
}

const DescriptionCard = ({ description }: Props) => {
  return (
    <AppCard style={styles.descriptionCard}>
      <AppText style={styles.sectionTitle}>
        Description
      </AppText>

      <View style={styles.descriptionBox}>
        <AppText style={styles.descriptionText}>
          {description}
        </AppText>
      </View>
    </AppCard>
  );
};

export default DescriptionCard;