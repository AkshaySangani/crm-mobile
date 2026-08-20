import React, {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  Modal,
  Pressable,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import AppText from "../AppText";
import { Colors } from "@/theme";
import { styles } from "./styles";

export type YearPickerValue = number;

export type PickerPosition =
  | "top"
  | "bottom"
  | "left"
  | "right";

interface YearPickerProps {
  label?: string;
  required?: boolean;
  error?: string;
  value?: YearPickerValue;
  placeholder?: string;
  disabled?: boolean;
  position?: PickerPosition;
  onChange: (year: YearPickerValue) => void;
}

const DROPDOWN_WIDTH = 235;
const DROPDOWN_HEIGHT = 285;
const GAP = 8;

const getStartYear = (year: number) => {
  return Math.floor(year / 10) * 10;
};

const YearPicker: React.FC<YearPickerProps> = ({
  label,
  required = false,
  error,
  value,
  placeholder = "Select Year",
  disabled = false,
  position = "bottom",
  onChange,
}) => {
  const inputRef = useRef<View>(null);

  const currentYear = new Date().getFullYear();

  const initialYear = value ?? currentYear;

  const [open, setOpen] = useState(false);

  const [selectedYear, setSelectedYear] =
    useState(initialYear);

  const [startYear, setStartYear] = useState(
    getStartYear(initialYear),
  );

  const [popupPosition, setPopupPosition] =
    useState({
      top: 0,
      left: 0,
    });

  /*
   * Sync with external value
   */
  useEffect(() => {
    if (value !== undefined) {
      setSelectedYear(value);
      setStartYear(getStartYear(value));
    }
  }, [value]);

  /*
   * Generate years
   *
   * Example:
   *
   * 2024  2025  2026
   * 2027  2028  2029
   * 2030  2031  2032
   * 2033  2034  2035
   */
  const years = useMemo(() => {
    return Array.from(
      { length: 12 },
      (_, index) => startYear - 1 + index,
    );
  }, [startYear]);

  /*
   * Calculate dropdown position
   */
  const calculatePosition = () => {
    inputRef.current?.measureInWindow(
      (x, y, width, height) => {
        let top = 0;
        let left = 0;

        switch (position) {
          case "top":
            top =
              y -
              DROPDOWN_HEIGHT -
              GAP;

            left =
              x +
              width / 2 -
              DROPDOWN_WIDTH / 2;

            break;

          case "bottom":
            top = y + height + GAP;

            left =
              x +
              width / 2 -
              DROPDOWN_WIDTH / 2;

            break;

          case "left":
            top =
              y +
              height / 2 -
              DROPDOWN_HEIGHT / 2;

            left =
              x -
              DROPDOWN_WIDTH -
              GAP;

            break;

          case "right":
            top =
              y +
              height / 2 -
              DROPDOWN_HEIGHT / 2;

            left =
              x +
              width +
              GAP;

            break;

          default:
            top = y + height + GAP;

            left =
              x +
              width / 2 -
              DROPDOWN_WIDTH / 2;
        }

        setPopupPosition({
          top: Math.max(10, top),
          left: Math.max(10, left),
        });

        setOpen(true);
      },
    );
  };

  /*
   * Open picker
   */
  const handleOpen = () => {
    if (disabled) {
      return;
    }

    const year = value ?? currentYear;

    setSelectedYear(year);
    setStartYear(getStartYear(year));

    requestAnimationFrame(() => {
      calculatePosition();
    });
  };

  /*
   * Close picker
   */
  const handleClose = () => {
    setOpen(false);
  };

  /*
   * Previous decade
   */
  const handlePrevious = () => {
    setStartYear((previous) => previous - 10);
  };

  /*
   * Next decade
   */
  const handleNext = () => {
    setStartYear((previous) => previous + 10);
  };

  /*
   * Select year
   */
  const handleYearSelect = (
    year: number,
  ) => {
    setSelectedYear(year);

    onChange(year);

    handleClose();
  };

  return (
    <View style={styles.container}>
      {/* Label */}

      {label && (
        <AppText
          size="sm"
          weight="medium"
          style={styles.label}
        >
          {label}

          {required && (
            <AppText
              size="sm"
              weight="medium"
              style={styles.required}
            >
              {" "}
              *
            </AppText>
          )}
        </AppText>
      )}

      {/* Input */}

      <TouchableOpacity
        ref={inputRef}
        activeOpacity={0.8}
        disabled={disabled}
        onPress={handleOpen}
        style={[
          styles.inputContainer,
          error && styles.inputError,
          disabled &&
            styles.inputDisabled,
        ]}
      >
        <TextInput
          editable={false}
          pointerEvents="none"
          value={
            value !== undefined
              ? String(value)
              : ""
          }
          placeholder={placeholder}
          placeholderTextColor={
            Colors.text.placeholder
          }
          style={styles.input}
        />

        <Ionicons
          name="calendar-outline"
          size={18}
          color={
            disabled
              ? Colors.text.disabled
              : Colors.text.secondary
          }
        />
      </TouchableOpacity>

      {/* Error */}

      {error && (
        <AppText
          size="xs"
          style={styles.error}
        >
          {error}
        </AppText>
      )}

      {/* Picker */}

      <Modal
        visible={open}
        transparent
        animationType="fade"
        onRequestClose={handleClose}
      >
        <View style={styles.modalContainer}>
          {/* Outside press */}

          <Pressable
            style={styles.backdrop}
            onPress={handleClose}
          />

          {/* Dropdown */}

          <View
            style={[
              styles.picker,
              {
                top: popupPosition.top,
                left: popupPosition.left,
              },
            ]}
          >
            {/* Header */}

            <View style={styles.header}>
              {/* Previous */}

              <TouchableOpacity
                activeOpacity={0.7}
                onPress={handlePrevious}
                style={styles.arrowButton}
              >
                <Ionicons
                  name="chevron-back"
                  size={20}
                  color={
                    Colors.text.primary
                  }
                />
              </TouchableOpacity>

              {/* Decade */}

              <AppText
                size="md"
                weight="medium"
                style={styles.headerTitle}
              >
                {`${startYear}-${startYear + 9}`}
              </AppText>

              {/* Next */}

              <TouchableOpacity
                activeOpacity={0.7}
                onPress={handleNext}
                style={styles.arrowButton}
              >
                <Ionicons
                  name="chevron-forward"
                  size={20}
                  color={
                    Colors.text.primary
                  }
                />
              </TouchableOpacity>
            </View>

            {/* Years */}

            <View style={styles.grid}>
              {years.map((year) => {
                const isSelected =
                  selectedYear === year;

                const isDisabled =
                  year === startYear - 1 ||
                  year === startYear + 10;

                return (
                  <TouchableOpacity
                    key={year}
                    activeOpacity={0.7}
                    disabled={isDisabled}
                    onPress={() =>
                      handleYearSelect(
                        year,
                      )
                    }
                    style={[
                      styles.gridItem,
                      isSelected &&
                        styles.selectedItem,
                    ]}
                  >
                    <AppText
                      size="md"
                      weight={
                        isSelected
                          ? "semiBold"
                          : "regular"
                      }
                      style={[
                        styles.itemText,
                        isSelected &&
                          styles.selectedText,
                        isDisabled &&
                          styles.disabledText,
                      ]}
                    >
                      {year}
                    </AppText>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default YearPicker;