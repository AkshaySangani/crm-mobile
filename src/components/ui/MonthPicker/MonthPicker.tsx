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
import { Colors, Radius, Spacing } from "@/theme";
import { styles } from "./styles";

export interface MonthPickerValue {
  month: number; // 1 - 12
  year: number;
}

export type PickerPosition =
  | "top"
  | "bottom"
  | "left"
  | "right";

interface MonthPickerProps {
  label?: string;
  required?: boolean;
  error?: string;
  value?: MonthPickerValue;
  placeholder?: string;
  disabled?: boolean;
  position?: PickerPosition;
  onChange: (value: MonthPickerValue) => void;
}

const MONTHS: Record<number, string> = {
  1: "Jan",
  2: "Feb",
  3: "Mar",
  4: "Apr",
  5: "May",
  6: "Jun",
  7: "Jul",
  8: "Aug",
  9: "Sep",
  10: "Oct",
  11: "Nov",
  12: "Dec",
};

const DROPDOWN_WIDTH = 235;
const DROPDOWN_HEIGHT = 285;
const GAP = 8;

const getStartYear = (year: number) => {
  return Math.floor(year / 10) * 10;
};

const MonthPicker: React.FC<MonthPickerProps> = ({
  label,
  required = false,
  error,
  value,
  placeholder = "Select Month",
  disabled = false,
  position = "bottom",
  onChange,
}) => {
  const inputRef = useRef<View>(null);

  const today = new Date();

  const initialYear =
    value?.year ?? today.getFullYear();

  const [open, setOpen] = useState(false);

  const [showYears, setShowYears] =
    useState(false);

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
   * Sync selected year with value
   */
  useEffect(() => {
    if (value?.year) {
      setSelectedYear(value.year);
      setStartYear(getStartYear(value.year));
    }
  }, [value?.year]);

  /*
   * Generate 12 years
   *
   * Example:
   * 2025
   * 2026
   * ...
   * 2035
   */
  const years = useMemo(() => {
    return Array.from(
      { length: 12 },
      (_, index) => startYear - 1 + index,
    );
  }, [startYear]);

  /*
   * Display value
   */
  const inputValue = useMemo(() => {
    if (!value) {
      return "";
    }

    return `${MONTHS[value.month]} ${value.year}`;
  }, [value]);

  /*
   * Calculate popup position
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

    const year =
      value?.year ?? today.getFullYear();

    setSelectedYear(year);
    setStartYear(getStartYear(year));
    setShowYears(false);

    requestAnimationFrame(() => {
      calculatePosition();
    });
  };

  /*
   * Close picker
   */
  const handleClose = () => {
    setOpen(false);
    setShowYears(false);
  };

  /*
   * Previous
   */
  const handlePrevious = () => {
    if (showYears) {
      setStartYear((previous) => previous - 10);
    } else {
      setSelectedYear(
        (previous) => previous - 1,
      );
    }
  };

  /*
   * Next
   */
  const handleNext = () => {
    if (showYears) {
      setStartYear((previous) => previous + 10);
    } else {
      setSelectedYear(
        (previous) => previous + 1,
      );
    }
  };

  /*
   * Select year
   */
  const handleYearSelect = (
    year: number,
  ) => {
    setSelectedYear(year);
    setShowYears(false);
  };

  /*
   * Select month
   */
  const handleMonthSelect = (
    month: number,
  ) => {
    onChange({
      month,
      year: selectedYear,
    });

    handleClose();
  };

  /*
   * Render year
   */
  const renderYear = (year: number) => {
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
          handleYearSelect(year)
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
  };

  /*
   * Render month
   */
  const renderMonth = (
    month: number,
  ) => {
    const isSelected =
      value?.month === month &&
      value?.year === selectedYear;

    return (
      <TouchableOpacity
        key={month}
        activeOpacity={0.7}
        onPress={() =>
          handleMonthSelect(month)
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
          ]}
        >
          {MONTHS[month]}
        </AppText>
      </TouchableOpacity>
    );
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
          value={inputValue}
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

      {/* Picker Modal */}

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

          {/* Picker */}

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

              {/* Current year */}

              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() =>
                  setShowYears(
                    (previous) =>
                      !previous,
                  )
                }
                style={
                  styles.headerTitleButton
                }
              >
                <AppText
                  size="md"
                  weight="medium"
                  style={
                    styles.headerTitle
                  }
                >
                  {showYears
                    ? `${startYear}-${startYear + 9}`
                    : selectedYear}
                </AppText>

                <Ionicons
                  name={
                    showYears
                      ? "chevron-up"
                      : "chevron-down"
                  }
                  size={15}
                  color={
                    Colors.text.primary
                  }
                />
              </TouchableOpacity>

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

            {/* Content */}

            {showYears ? (
              <View style={styles.grid}>
                {years.map(renderYear)}
              </View>
            ) : (
              <View style={styles.grid}>
                {Object.keys(
                  MONTHS,
                ).map((month) =>
                  renderMonth(
                    Number(month),
                  ),
                )}
              </View>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default MonthPicker;