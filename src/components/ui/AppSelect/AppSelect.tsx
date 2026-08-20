import { Colors} from "@/theme";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles";

export interface SelectOption {
  label: string;
  value: string;
}

interface AppSelectProps {
  label?: string;
  value?: string;
  required?: boolean;
  options: SelectOption[];
  placeholder?: string;
  onSelect: (value: string) => void;
  error?: string;
  disabled?: boolean;
  searchable?: boolean;
}

const AppSelect = (
  (
    {
      label,
      value,
      options,
      required = false,
      placeholder = "Select option",
      onSelect,
      error = "",
      disabled = false,
      searchable = false,
    }: AppSelectProps) => {
    const [open, setOpen] = useState(false);

    const selectedOption = options.find(
      (option) => option.value === value
    );

    const handleSelect = (option: SelectOption) => {
      onSelect(option.value);
      setOpen(false);
    };

    return (
      <View style={styles.container}>
        {/* Label */}
        {label ? (
          <Text
            style={[
              styles.label,
              {
                color: Colors.input.label,
              },
            ]}
          >
            {label}{" "}
            {required && (
              <Text style={{ color: Colors.error }}>*</Text>
            )}
          </Text>
        ) : null}

        {/* Select */}
        <TouchableOpacity
          activeOpacity={0.8}
          disabled={disabled}
          onPress={() => setOpen((prev) => !prev)}
          style={[
            styles.select,
            {
              borderColor: error
                ? Colors.error
                : open
                ? Colors.brand.primary
                : Colors.brand.secondary,
              backgroundColor: disabled
                ? Colors.input.disabled
                : Colors.common.white,
              opacity: disabled ? 0.6 : 1,
            },
          ]}
        >
          <Text
            style={[
              styles.selectedText,
              {
                color: selectedOption
                  ? Colors.common.black
                  : Colors.input.label,
              },
            ]}
            numberOfLines={1}
          >
            {selectedOption?.label ?? placeholder}
          </Text>

          <Ionicons
            name={open ? "chevron-up" : "chevron-down"}
            size={18}
            color={Colors.brand.secondary}
          />
        </TouchableOpacity>

        {/* Error */}
        {error ? (
          <Text
            style={[
              styles.error,
              {
                color: Colors.error,
              },
            ]}
          >
            {error}
          </Text>
        ) : null}

        {/* Dropdown */}
        {open && !disabled && (
          <View
            style={[
              styles.dropdown,
              {
                borderColor: Colors.border.input,
                backgroundColor: Colors.common.white,
              },
            ]}
          >
            <ScrollView
              nestedScrollEnabled
              keyboardShouldPersistTaps="handled"
              showsVerticalScrollIndicator={false}
              style={styles.scrollView}
            >
              {options.length > 0 ? (
                options.map((option) => {
                  const selected = option.value === value;

                  return (
                    <Pressable
                      key={option.value}
                      onPress={() => handleSelect(option)}
                      style={({ pressed }) => [
                        styles.option,
                        {
                          backgroundColor: pressed
                            ? Colors.brand.primary
                            : selected
                            ? `${Colors.brand.primary}10`
                            : Colors.common.white,
                        },
                      ]}
                    >
                      <Text
                        style={[
                          styles.optionText,
                          {
                            color: selected
                              ? Colors.brand.primary
                              : Colors.common.black,
                            fontWeight: selected ? "600" : "400",
                          },
                        ]}
                      >
                        {option.label}
                      </Text>

                      {selected && (
                        <Ionicons
                          name="checkmark"
                          size={18}
                          color={Colors.brand.primary}
                        />
                      )}
                    </Pressable>
                  );
                })
              ) : (
                <View style={styles.emptyContainer}>
                  <Text
                    style={[
                      styles.emptyText,
                      {
                        color: Colors.status.info,
                      },
                    ]}
                  >
                    No options available
                  </Text>
                </View>
              )}
            </ScrollView>
          </View>
        )}
      </View>
    );
  }
);

export default AppSelect;