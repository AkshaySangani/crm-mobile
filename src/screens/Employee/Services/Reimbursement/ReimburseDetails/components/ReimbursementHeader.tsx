import React from "react";
import { Pressable, View } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

import AppCard from "@/components/ui/AppCard";
import AppText from "@/components/ui/AppText";
import { styles } from "../styles";
import StatusBadge from "@/components/ui/StatusBadge/StatusBadge";
import { statusEnum } from "@/utils/enums";
import { IReimbursement } from "@/types/employee/reimbursement.types";
import { Colors } from "@/theme";
import { getFirstCharacter, getFloatValue } from "@/utils/helper";
import { currency } from "@/utils/constants";

interface Props {
  data: IReimbursement;
}

const ReimbursementHeader = ({ data }: Props) => {


  return (
    <>
      

      <AppCard style={styles.summaryCard}>
        <View style={styles.summaryRow}>
          <View style={styles.summaryLeft}>
            <View style={styles.expenseIcon}>
              <AppText
              size="xxl"
              weight="semiBold"
              color={Colors.common.white}
              numberOfLines={1}
            >
              {getFirstCharacter(data.name, 2)}
            </AppText>
            </View>

            <View style={styles.summaryInfo}>
              <AppText style={styles.expenseTitle}>
                {data.name}
              </AppText>

              <StatusBadge status={data.status}/>
            </View>
          </View>

          <AppText style={styles.amount}>
            {currency.INR}{getFloatValue(data.amount)}
          </AppText>
        </View>
      </AppCard>
    </>
  );
};

export default ReimbursementHeader;