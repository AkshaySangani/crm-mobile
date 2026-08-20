import React from "react";
import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppCard from "@/components/ui/AppCard";
import AppText from "@/components/ui/AppText";
import { styles } from "../styles";

interface Props {
  submittedOn: string;
  approvedOn?: string;
  approvedBy?: string;
  approvedByRole?: string;
}

const ApprovalDetails = ({
  submittedOn,
  approvedOn,
  approvedBy,
  approvedByRole,
}: Props) => {
  return (
    <AppCard style={styles.approvalCard}>
      <AppText style={styles.sectionTitle}>
        Approval Details
      </AppText>

      <View style={styles.approvalRow}>
        <View
          style={[
            styles.approvalIcon,
            styles.purpleApproval,
          ]}
        >
          <MaterialCommunityIcons
            name="calendar-check-outline"
            size={22}
            color="#7626D9"
          />
        </View>

        <View style={styles.approvalContent}>
          <AppText style={styles.approvalLabel}>
            Submitted On
          </AppText>

          <AppText style={styles.approvalValue}>
            {submittedOn}
          </AppText>
        </View>
      </View>

      {approvedOn && (
        <View style={styles.approvalRow}>
          <View
            style={[
              styles.approvalIcon,
              styles.orangeApproval,
            ]}
          >
            <MaterialCommunityIcons
              name="calendar-check-outline"
              size={22}
              color="#F28C18"
            />
          </View>

          <View style={styles.approvalContent}>
            <AppText style={styles.approvalLabel}>
              Approved On
            </AppText>

            <AppText style={styles.approvalValue}>
              {approvedOn}
            </AppText>
          </View>
        </View>
      )}

      {approvedBy && (
        <View
          style={[
            styles.approvalRow,
            styles.approvalRowLast,
          ]}
        >
          <View
            style={[
              styles.approvalIcon,
              styles.greenApproval,
            ]}
          >
            <MaterialCommunityIcons
              name="account-check-outline"
              size={22}
              color="#229B30"
            />
          </View>

          <View style={styles.approvalContent}>
            <AppText style={styles.approvalLabel}>
              Approved By
            </AppText>

            <AppText style={styles.approvalValue}>
              {approvedBy}
            </AppText>

            {approvedByRole && (
              <AppText style={styles.approvalRole}>
                {approvedByRole}
              </AppText>
            )}
          </View>
        </View>
      )}
    </AppCard>
  );
};

export default ApprovalDetails;