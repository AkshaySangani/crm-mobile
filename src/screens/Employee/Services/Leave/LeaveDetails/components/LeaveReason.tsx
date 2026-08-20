import React from 'react';
import { Text, View } from 'react-native';

import AppCard from '@/components/ui/AppCard';

import { styles } from '../styles';

type LeaveReasonProps = {
  reason: string;
};

export const LeaveReason = ({
  reason,
}: LeaveReasonProps) => {
  return (
    <AppCard style={styles.card}>
      <Text style={styles.sectionTitle}>
        Leave Reason
      </Text>

      <View style={styles.reasonBox}>
        <Text style={styles.reasonText}>
          {reason}
        </Text>
      </View>
    </AppCard>
  );
};