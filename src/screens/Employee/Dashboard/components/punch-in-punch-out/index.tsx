import React from "react";
import { View } from "react-native";

import { AppButton, AppCard, AppText } from "@/components";
import { Colors, FontSize } from "@/theme";

import styles from "./styles";
import { FontAwesome5 } from "@expo/vector-icons";
import { getGreeting } from "@/utils/helper";
import { getCurrentLocation } from "@/utils/location";
import { punchInPunchOut } from "@/apis/employee/attendance.api";
import { AttendanceMethodEnum } from "@/utils/enums";

interface ManualCheckInProps {
  onPunchIn?: () => void;
  onPunchOut?: () => void;
  isPunchedIn?: boolean;
  workingTime?: string;
}

const ManualCheckIn = ({
  onPunchIn,
  onPunchOut,
  isPunchedIn = false,
  workingTime = "05:00",
}: ManualCheckInProps) => {
  const lateMinutes = 10;
  const earlyOutMinutes = 10;

  // handle punch in punch out
  const handlePunchInPunchOut = async () => {
    const location = await getCurrentLocation();
    if (location) {
      const response = await punchInPunchOut({
        latitude: 23.0345,
        longitude: 72.5632,
        address: "Ahmedabad, Gujarat",
        method: AttendanceMethodEnum.MOBILE,
      });
    }
    console.log("location", location);
  };
  return (
    <AppCard padding={true}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <AppText size="lg" weight="bold" color={Colors.brand.primary}>
            {getGreeting()}
          </AppText>

          <View style={styles.subtitleContainer}>
            {isPunchedIn ? (
              <>
                {/* Working Time */}
                <View style={styles.workingTimeRow}>
                  <AppText size="sm" color={Colors.text.secondary}>
                    Working Time{" "}
                  </AppText>

                  <AppText size="sm" color={Colors.brand.primary}>
                    {workingTime}
                  </AppText>
                </View>

                {/* Late / Early Out */}
                {(lateMinutes > 0 || earlyOutMinutes > 0) && (
                  <View style={styles.attendanceInfoRow}>
                    {lateMinutes > 0 && (
                      <View style={styles.infoItem}>
                        <AppText size="xs" color={Colors.text.secondary}>
                          Late In{" "}
                        </AppText>

                        <AppText size="xs" color={Colors.error}>
                          {lateMinutes} min
                        </AppText>
                      </View>
                    )}

                    {earlyOutMinutes > 0 && (
                      <View style={styles.infoItem}>
                        <AppText size="xs" color={Colors.text.secondary}>
                          Early Out{" "}
                        </AppText>

                        <AppText size="xs" color={Colors.status.danger}>
                          {earlyOutMinutes} min
                        </AppText>
                      </View>
                    )}
                  </View>
                )}
              </>
            ) : (
              <AppText size="sm" color={Colors.text.secondary}>
                Ready to start your day?
              </AppText>
            )}
          </View>
        </View>

        {/* Punch Buttons */}
        <View style={styles.buttonContainer}>
          <View style={styles.buttonWrapper}>
            <AppButton
              title={"Punch In"}
              onPress={onPunchIn}
              variant="primaryBrand"
              disabled={isPunchedIn}
              leftIcon={
                <FontAwesome5
                  name="user-clock"
                  size={FontSize.md}
                  color={Colors.common.white}
                />
              }
              onPressIn={handlePunchInPunchOut}
            />
          </View>

          <View style={styles.buttonWrapper}>
            <AppButton
              title={"Punch Out"}
              onPress={onPunchOut}
              variant="primaryBrand"
              disabled={!isPunchedIn}
              leftIcon={
                <FontAwesome5
                  name="user-clock"
                  size={FontSize.md}
                  color={Colors.common.white}
                />
              }
            />
          </View>
        </View>
      </View>
    </AppCard>
  );
};

export default ManualCheckIn;
