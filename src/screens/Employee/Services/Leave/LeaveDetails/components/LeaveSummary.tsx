import React from 'react';
import { Text, View } from 'react-native';

import AppCard from '@/components/ui/AppCard';
import { Colors } from '@/theme';

import { LeaveSummaryItem } from './LeaveSummaryItem';
import { styles } from '../styles';

type LeaveSummaryProps = {
  totalDays: number;
  from: string;
  fromDay: string;
  to: string;
  toDay: string;
  session: string;
};

export const LeaveSummary = ({
  totalDays,
  from,
  fromDay,
  to,
  toDay,
  session,
}: LeaveSummaryProps) => {
  return (
    <AppCard style={styles.card}>
      <Text style={styles.sectionTitle}>Leave Summary</Text>

      <View style={styles.summaryContainer}>
        <LeaveSummaryItem
          icon="calendar-outline"
          label="Total Days"
          value={`${totalDays} Days`}
          color={Colors.brand.primary}
        />

        <View style={styles.summaryDivider} />

        <LeaveSummaryItem
          icon="calendar-outline"
          label="From"
          value={from}
          subValue={`(${fromDay})`}
          color={Colors.status.success ?? '#16A34A'}
        />

        <View style={styles.summaryDivider} />

        <LeaveSummaryItem
          icon="calendar-outline"
          label="To"
          value={to}
          subValue={`(${toDay})`}
          color={Colors.status.success ?? '#16A34A'}
        />

        <View style={styles.summaryDivider} />

        <LeaveSummaryItem
          icon="sunny-outline"
          label="Session"
          value={session}
          color="#8B5CF6"
        />
      </View>
    </AppCard>
  );
};