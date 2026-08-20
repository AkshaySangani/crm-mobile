import React from 'react';
import { Text, View } from 'react-native';

import { styles } from '../styles';

type ApprovalTimelineProps = {
  appliedOn: string;
  appliedBy: string;
  approvedOn: string;
  approvedBy: string;
  approvedByRole: string;
};

export const ApprovalTimeline = ({
  appliedOn,
  appliedBy,
  approvedOn,
  approvedBy,
  approvedByRole,
}: ApprovalTimelineProps) => {
  return (
    <View style={styles.timeline}>
      {/* Leave Applied */}
      <View style={styles.timelineItem}>
        <View style={styles.timelineIndicator}>
          <View style={styles.timelineDot} />

          <View style={styles.timelineLine} />
        </View>

        <View style={styles.timelineContent}>
          <View style={styles.timelineTop}>
            <View>
              <Text style={styles.timelineTitle}>
                Leave Applied
              </Text>

              <Text style={styles.timelineDate}>
                {appliedOn}
              </Text>
            </View>

            <Text style={styles.timelinePerson}>
              {appliedBy}
            </Text>
          </View>
        </View>
      </View>

      {/* Approved */}
      <View style={styles.timelineItem}>
        <View style={styles.timelineIndicator}>
          <View style={styles.timelineDot} />
        </View>

        <View style={styles.timelineContent}>
          <View style={styles.timelineTop}>
            <View>
              <Text style={styles.timelineTitle}>
                Approved
              </Text>

              <Text style={styles.timelineDate}>
                {approvedOn}
              </Text>
            </View>

            <View style={styles.timelinePersonContainer}>
              <Text style={styles.timelinePerson}>
                {approvedBy}
              </Text>

              <Text style={styles.timelineRole}>
                ({approvedByRole})
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};