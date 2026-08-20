import React from "react";
import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppCard from "@/components/ui/AppCard";
import AppText from "@/components/ui/AppText";
import { Colors } from "@/theme";
import { styles } from "../styles";

interface Props {
  expenseType: string;
  amount: number;
  totalAmount: number;
}

const ExpenseDetails = ({
  expenseType,
  amount,
  totalAmount,
}: Props) => {
  return (
    <AppCard style={styles.sectionCard}>
      <AppText style={styles.sectionTitle}>
        Expense Details
      </AppText>

      <View style={styles.detailRow}>
        <View
          style={[
            styles.detailIcon,
            styles.greenIcon,
          ]}
        >
          <MaterialCommunityIcons
            name="wallet-outline"
            size={23}
            color="#15952A"
          />
        </View>

        <View style={styles.detailContent}>
          <AppText style={styles.detailLabel}>
            Expense Type
          </AppText>

          <AppText style={styles.detailValue}>
            {expenseType}
          </AppText>
        </View>

        <View style={styles.currencyIcon}>
          <AppText
            style={{
              fontSize: 23,
              fontWeight: "700",
              color: Colors.brand.primary,
            }}
          >
            ₹
          </AppText>
        </View>
      </View>

      <View style={styles.detailRow}>
        <View
          style={[
            styles.detailIcon,
            styles.purpleIcon,
          ]}
        >
          <MaterialCommunityIcons
            name="file-document-outline"
            size={23}
            color="#7526D7"
          />
        </View>

        <View style={styles.detailContent}>
          <AppText style={styles.detailLabel}>
            Amount
          </AppText>
        </View>

        <AppText style={styles.detailAmount}>
          ₹ {amount.toLocaleString("en-IN", {
            minimumFractionDigits: 2,
          })}
        </AppText>
      </View>

      <View
        style={[
          styles.detailRow,
          styles.detailRowLast,
        ]}
      >
        <View
          style={[
            styles.detailIcon,
            styles.redIcon,
          ]}
        >
          <MaterialCommunityIcons
            name="calculator-variant-outline"
            size={23}
            color="#E52B59"
          />
        </View>

        <View style={styles.detailContent}>
          <AppText style={styles.detailLabel}>
            Total Amount
          </AppText>
        </View>

        <AppText
          style={[
            styles.detailAmount,
            styles.totalAmount,
          ]}
        >
          ₹ {totalAmount.toLocaleString("en-IN", {
            minimumFractionDigits: 2,
          })}
        </AppText>
      </View>
    </AppCard>
  );
};

export default ExpenseDetails;