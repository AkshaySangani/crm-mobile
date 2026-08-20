import React from "react";
import { Pressable, View } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

import AppCard from "@/components/ui/AppCard";
import AppText from "@/components/ui/AppText";
import { Colors } from "@/theme";
import { styles } from "../styles";
import { ReimbursementDetailsData } from "../ReimbursementDetails";
import StatusBadge from "@/components/ui/StatusBadge/StatusBadge";
import { statusEnum } from "@/utils/enums";

interface Props {
  data: ReimbursementDetailsData;
}

const ReimbursementHeader = ({ data }: Props) => {


  return (
    <>
      

      <AppCard style={styles.summaryCard}>
        <View style={styles.summaryRow}>
          <View style={styles.summaryLeft}>
            <View style={styles.expenseIcon}>
              <MaterialCommunityIcons
                name="gas-station-outline"
                size={36}
                color="#168C20"
              />
            </View>

            <View style={styles.summaryInfo}>
              <AppText style={styles.expenseTitle}>
                {data.expenseType}
              </AppText>

              <AppText style={styles.categoryText}>
                {data.category}
              </AppText>

              <StatusBadge status={statusEnum.APPROVED}/>
            </View>
          </View>

          <AppText style={styles.amount}>
            ₹ {data.amount.toLocaleString("en-IN")}
          </AppText>
        </View>
      </AppCard>
    </>
  );
};

export default ReimbursementHeader;