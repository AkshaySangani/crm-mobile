import React from 'react';
import { Text, View } from 'react-native';

import AppCard from '@/components/ui/AppCard';

import { LeaveDate, LeaveDateRow } from './LeaveDateRow';
import { styles } from '../styles';

type LeaveDatesTableProps = {
  dates: LeaveDate[];
};

export const LeaveDatesTable = ({
  dates,
}: LeaveDatesTableProps) => {
  return (
    <AppCard style={styles.card}>
      <Text style={styles.sectionTitle}>
        Leave Dates & Type
      </Text>

      <View style={styles.table}>
        {/* Header */}
        <View
          style={[
            styles.tableRow,
            styles.tableHeader,
          ]}
        >
          <Text
            style={[
              styles.tableHeaderText,
              styles.dateColumn,
            ]}
          >
            Date
          </Text>

          <Text
            style={[
              styles.tableHeaderText,
              styles.dayColumn,
            ]}
          >
            Day
          </Text>

          <Text
            style={[
              styles.tableHeaderText,
              styles.typeColumn,
            ]}
          >
            Leave Type
          </Text>

          <Text
            style={[
              styles.tableHeaderText,
              styles.sessionColumn,
            ]}
          >
            Session
          </Text>
        </View>

        {dates.map((item, index) => (
          <LeaveDateRow
            key={`${item.date}-${index}`}
            item={item}
            isLast={index === dates.length - 1}
          />
        ))}
      </View>
    </AppCard>
  );
};