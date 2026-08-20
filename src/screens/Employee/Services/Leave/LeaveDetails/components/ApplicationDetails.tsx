import React from 'react';
import { Text, View } from 'react-native';

import AppCard from '@/components/ui/AppCard';

import { ApplicationInfoRow } from './ApplicationInfoRow';
import { ApprovalTimeline } from './ApprovalTimeline';
import { styles } from '../styles';

type ApplicationDetailsProps = {
  appliedOn: string;
  appliedBy: string;
  statusUpdatedOn: string;
  updatedBy: string;
  updatedByRole: string;
};

export const ApplicationDetails = ({
  appliedOn,
  appliedBy,
  statusUpdatedOn,
  updatedBy,
  updatedByRole,
}: ApplicationDetailsProps) => {
  return (
    <AppCard style={styles.card}>
      <Text style={styles.sectionTitle}>
        Application Details
      </Text>

      <View style={styles.applicationInfo}>
        <ApplicationInfoRow
          icon="document-text-outline"
          label="Applied On"
          value={appliedOn}
          iconColor="#7C3AED"
        />

        <View style={styles.infoSeparator} />

        <ApplicationInfoRow
          icon="person-outline"
          label="Applied By"
          value={appliedBy}
          iconColor="#2563EB"
        />

        <View style={styles.infoSeparator} />

        <ApplicationInfoRow
          icon="time-outline"
          label="Status Updated On"
          value={statusUpdatedOn}
          iconColor="#F59E0B"
        />

        <View style={styles.infoSeparator} />

        <ApplicationInfoRow
          icon="person-outline"
          label="Updated By"
          value={`${updatedBy} (${updatedByRole})`}
          iconColor="#2563EB"
        />
      </View>

      <ApprovalTimeline
        appliedOn={appliedOn}
        appliedBy={appliedBy}
        approvedOn={statusUpdatedOn}
        approvedBy={updatedBy}
        approvedByRole={updatedByRole}
      />
    </AppCard>
  );
};