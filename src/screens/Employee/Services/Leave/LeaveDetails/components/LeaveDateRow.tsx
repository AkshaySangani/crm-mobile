import React from 'react';
import { Text, View } from 'react-native';

import { styles } from '../styles';

export type LeaveDate = {
  date: string;
  day: string;
  leaveType: string;
  session: string;
  type: 'casual' | 'annual';
};

type LeaveDateRowProps = {
  item: LeaveDate;
  isLast?: boolean;
};

export const LeaveDateRow = ({
  item,
  isLast = false,
}: LeaveDateRowProps) => {
  return (
    <View
      style={[
        styles.tableRow,
        isLast && styles.lastTableRow,
      ]}
    >
      <View style={styles.dateColumn}>
        <Text style={styles.tablePrimaryText}>
          {item.date}
        </Text>

        <Text style={styles.tableSecondaryText}>
          ({item.day.slice(0, 3)})
        </Text>
      </View>

      <Text
        style={[
          styles.tablePrimaryText,
          styles.dayColumn,
        ]}
      >
        {item.day}
      </Text>

      <View style={styles.typeColumn}>
        <View
          style={[
            styles.leaveTypeBadge,
            item.type === 'annual'
              ? styles.annualBadge
              : styles.casualBadge,
          ]}
        >
          <Text
            style={[
              styles.leaveTypeText,
              item.type === 'annual'
                ? styles.annualText
                : styles.casualText,
            ]}
          >
            {item.leaveType}
          </Text>
        </View>
      </View>

      <Text
        style={[
          styles.tablePrimaryText,
          styles.sessionColumn,
        ]}
      >
        {item.session}
      </Text>
    </View>
  );
};