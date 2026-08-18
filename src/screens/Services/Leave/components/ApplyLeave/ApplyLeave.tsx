import React, { useState } from "react";
import {
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { styles } from "./styles";
import { AppText } from "@/components";
import { Colors } from "@/theme";

export default function ApplyLeave() {
  const [leaveType, setLeaveType] = useState("Annual Leave");

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      <AppText
        size="md"
        weight="semiBold"
        color={Colors.text.primary}
        style={styles.title}
      >
        Apply Leave
      </AppText>

      {/* Leave Type */}
      <AppText
        size="sm"
        weight="semiBold"
        color={Colors.text.primary}
        style={styles.label}
      >
        Leave Type
      </AppText>

      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.input}
      >
        <MaterialCommunityIcons
          name="calendar-outline"
          size={21}
          color={Colors.brand.primary}
        />

        <AppText
          size="sm"
          color={Colors.text.primary}
          style={styles.inputText}
        >
          {leaveType}
        </AppText>

        <MaterialCommunityIcons
          name="chevron-down"
          size={22}
          color={Colors.text.secondary}
        />
      </TouchableOpacity>

      {/* Date */}
      <View style={styles.row}>
        <View style={styles.half}>
          <AppText
            size="sm"
            weight="semiBold"
            color={Colors.text.primary}
            style={styles.label}
          >
            From Date
          </AppText>

          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.input}
          >
            <MaterialCommunityIcons
              name="calendar-outline"
              size={20}
              color={Colors.brand.primary}
            />

            <AppText
              size="sm"
              color={Colors.text.secondary}
              style={styles.inputText}
            >
              Select date
            </AppText>
          </TouchableOpacity>
        </View>

        <View style={styles.half}>
          <AppText
            size="sm"
            weight="semiBold"
            color={Colors.text.primary}
            style={styles.label}
          >
            To Date
          </AppText>

          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.input}
          >
            <MaterialCommunityIcons
              name="calendar-outline"
              size={20}
              color={Colors.brand.primary}
            />

            <AppText
              size="sm"
              color={Colors.text.secondary}
              style={styles.inputText}
            >
              Select date
            </AppText>
          </TouchableOpacity>
        </View>
      </View>

      {/* Reason */}
      <AppText
        size="sm"
        weight="semiBold"
        color={Colors.text.primary}
        style={styles.label}
      >
        Reason
      </AppText>

      <TouchableOpacity
        activeOpacity={1}
        style={styles.reasonInput}
      >
        <AppText
          size="sm"
          color={Colors.text.secondary}
        >
          Enter reason for leave
        </AppText>
      </TouchableOpacity>

      {/* Submit */}
      <TouchableOpacity
        activeOpacity={0.85}
        style={styles.submitButton}
      >
        <AppText
          size="sm"
          weight="semiBold"
          color={Colors.common.white}
        >
          Apply Leave
        </AppText>
      </TouchableOpacity>
    </ScrollView>
  );
}