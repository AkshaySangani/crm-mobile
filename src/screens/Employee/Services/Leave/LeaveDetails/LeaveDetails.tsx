import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import StatusBadge from '@/components/ui/StatusBadge/StatusBadge';
import { Colors } from '@/theme';

import { LeaveSummary } from './components/LeaveSummary';
import { LeaveDatesTable } from './components/LeaveDatesTable';
import { LeaveReason } from './components/LeaveReason';
import { ApplicationDetails } from './components/ApplicationDetails';

import { styles } from './styles';
import { statusEnum } from '@/utils/enums';
import { Header, Screen } from '@/components';
import { useNavigation } from '@react-navigation/native';
import { AppNavigationProp } from '@/navigation/types';

const leaveDetails = {
  leaveId: 'LV250526001',

  leaveType: 'Annual Leave',

  status: statusEnum.APPROVED,

  totalDays: 3,

  from: 'May 26, 2025',
  fromDay: 'Mon',

  to: 'May 28, 2025',
  toDay: 'Wed',

  session: 'Full Day',

  reason:
    'Family function at my home. Need leave for 3 days.',

  appliedOn: 'May 20, 2025 | 10:30 AM',
  appliedBy: 'Sunny Sangani',

  statusUpdatedOn: 'May 21, 2025 | 02:15 PM',

  updatedBy: 'Arjunsinh Rathod',
  updatedByRole: 'Reporting Manager',

  dates: [
    {
      date: 'May 26, 2025',
      day: 'Monday',
      leaveType: 'Casual Leave',
      session: 'Full Day',
      type: 'casual' as const,
    },
    {
      date: 'May 27, 2025',
      day: 'Tuesday',
      leaveType: 'Casual Leave',
      session: 'Full Day',
      type: 'casual' as const,
    },
    {
      date: 'May 28, 2025',
      day: 'Wednesday',
      leaveType: 'Annual Leave',
      session: 'Full Day',
      type: 'annual' as const,
    },
  ],
};

export default function LeaveDetails() {
    const navigation =
                  useNavigation<AppNavigationProp>();
  return (
    <Screen padding={false}
      scroll={true}
      showBackground
      header={
        <Header
          title={"Leave Details"}
          showBack
          onBackPress={() => navigation.goBack()}
        />
      }>
    <View
      style={styles.container}
    >
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerIcon}>
          <Ionicons
            name="leaf-outline"
            size={29}
            color={Colors.status.success ?? '#16A34A'}
          />
        </View>

        <View style={styles.headerContent}>
          <Text style={styles.leaveTitle}>
            {leaveDetails.leaveType}
          </Text>

          <Text style={styles.leaveId}>
            Leave ID: {leaveDetails.leaveId}
          </Text>
        </View>

        <StatusBadge
          status={statusEnum.APPROVED}
        />
      </View>

      {/* Summary */}
      <LeaveSummary
        totalDays={leaveDetails.totalDays}
        from={leaveDetails.from}
        fromDay={leaveDetails.fromDay}
        to={leaveDetails.to}
        toDay={leaveDetails.toDay}
        session={leaveDetails.session}
      />

      {/* Dates */}
      <LeaveDatesTable
        dates={leaveDetails.dates}
      />

      {/* Reason */}
      <LeaveReason
        reason={leaveDetails.reason}
      />

      {/* Application */}
      <ApplicationDetails
        appliedOn={leaveDetails.appliedOn}
        appliedBy={leaveDetails.appliedBy}
        statusUpdatedOn={leaveDetails.statusUpdatedOn}
        updatedBy={leaveDetails.updatedBy}
        updatedByRole={leaveDetails.updatedByRole}
      />
    </View>
    </Screen>
  );
}