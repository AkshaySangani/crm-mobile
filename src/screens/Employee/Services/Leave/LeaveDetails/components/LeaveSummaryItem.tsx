import React from 'react';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { Colors } from '@/theme';

import { styles } from '../styles';

type LeaveSummaryItemProps = {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  value: string;
  subValue?: string;
  color?: string;
};

export const LeaveSummaryItem = ({
  icon,
  label,
  value,
  subValue,
  color = Colors.brand.primary,
}: LeaveSummaryItemProps) => {
  return (
    <View style={styles.summaryItem}>
      <View
        style={[
          styles.summaryIcon,
          {
            backgroundColor: `${color}12`,
          },
        ]}
      >
        <Ionicons name={icon} size={21} color={color} />
      </View>

      <Text style={styles.summaryLabel}>{label}</Text>

      <Text
        style={[
          styles.summaryValue,
          {
            color,
          },
        ]}
      >
        {value}
      </Text>

      {subValue ? (
        <Text style={styles.summarySubValue}>{subValue}</Text>
      ) : null}
    </View>
  );
};