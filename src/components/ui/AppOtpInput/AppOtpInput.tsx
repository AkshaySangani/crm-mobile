import React, { useEffect, useRef, useState } from "react";
import {
  NativeSyntheticEvent,
  TextInput,
  TextInputKeyPressEventData,
  TouchableOpacity,
  View,
} from "react-native";
import AppText from "../AppText";
import { Colors } from "@/theme";
import styles from "./styles";

interface AppOtpInputProps {
  length?: 4 | 6;
  value?: string;
  onChangeText?: (value: string) => void;
  error?: string;
  autoFocus?: boolean;
  disabled?: boolean;
}

const AppOtpInput = ({
  length = 6,
  value = "",
  onChangeText,
  error,
  autoFocus = true,
  disabled = false,
}: AppOtpInputProps) => {
  const [otp, setOtp] = useState(value);
  const inputRefs = useRef<Array<TextInput | null>>([]);

  useEffect(() => {
    setOtp(value);
  }, [value]);

  const handleChange = (text: string, index: number) => {
    // Only allow numbers
    const digit = text.replace(/[^0-9]/g, "").slice(-1);

    const otpArray = otp.split("");

    if (digit) {
      otpArray[index] = digit;

      const newOtp = otpArray.join("").slice(0, length);

      setOtp(newOtp);
      onChangeText?.(newOtp);

      // Move to next input
      if (index < length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    } else {
      otpArray[index] = "";

      const newOtp = otpArray.join("").slice(0, length);

      setOtp(newOtp);
      onChangeText?.(newOtp);
    }
  };

  const handleKeyPress = (
    event: NativeSyntheticEvent<TextInputKeyPressEventData>,
    index: number
  ) => {
    if (
      event.nativeEvent.key === "Backspace" &&
      !otp[index] &&
      index > 0
    ) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        {Array.from({ length }).map((_, index) => {
          const isFilled = !!otp[index];

          return (
            <TouchableOpacity
              key={index}
              activeOpacity={1}
              disabled={disabled}
              onPress={() => inputRefs.current[index]?.focus()}
              style={[
                styles.inputWrapper,
                isFilled && styles.filledInput,
                error && styles.errorBorder,
                disabled && styles.disabled,
              ]}
            >
              <TextInput
                ref={(ref) => {
                  inputRefs.current[index] = ref;
                }}
                value={otp[index] || ""}
                onChangeText={(text) => handleChange(text, index)}
                onKeyPress={(event) => handleKeyPress(event, index)}
                keyboardType="number-pad"
                maxLength={1}
                autoFocus={autoFocus && index === 0}
                editable={!disabled}
                style={styles.input}
                selectionColor={Colors.brand.primary}
              />
            </TouchableOpacity>
          );
        })}
      </View>

      {error && (
        <AppText size="xs" color={Colors.error} style={styles.error}>
          {error}
        </AppText>
      )}
    </View>
  );
};

export default AppOtpInput;