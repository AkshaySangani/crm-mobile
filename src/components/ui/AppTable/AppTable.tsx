import React from "react";
import {
  ScrollView,
  Text,
  View,
  ViewStyle,
} from "react-native";

import styles from "./styles";

export interface TableColumn<T> {
  key: keyof T | string;
  title: string;

  /**
   * Width of the column.
   * Example: 140, 100, 120
   */
  width?: number;

  /**
   * Custom cell renderer
   */
  render?: (value: any, row: T, rowIndex: number) => React.ReactNode;

  /**
   * Alignment of cell content
   */
  align?: "left" | "center" | "right";
}

export interface TableProps<T> {
  columns: TableColumn<T>[];
  data: T[];

  /**
   * Show / hide table header
   */
  showHeader?: boolean;

  /**
   * Width of a column when width is not provided
   */
  defaultColumnWidth?: number;

  /**
   * Row height
   */
  rowHeight?: number;

  /**
   * Custom style for table container
   */
  containerStyle?: ViewStyle;

  /**
   * Empty table message
   */
  emptyText?: string;
}

const Table = <T extends Record<string, any>>({
  columns,
  data,
  showHeader = true,
  defaultColumnWidth = 120,
  rowHeight = 72,
  containerStyle,
  emptyText = "No data found",
}: TableProps<T>) => {
  const getColumnWidth = (column: TableColumn<T>) =>
    column.width ?? defaultColumnWidth;

  const getTextAlign = (
    align?: "left" | "center" | "right"
  ): "left" | "center" | "right" => {
    return align ?? "left";
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.horizontalContent}
      >
        <View>
          {/* Header */}
          {showHeader && (
            <View style={styles.headerRow}>
              {columns.map((column) => (
                <View
                  key={String(column.key)}
                  style={[
                    styles.headerCell,
                    {
                      width: getColumnWidth(column),
                    },
                  ]}
                >
                  <Text
                    style={[
                      styles.headerText,
                      {
                        textAlign: getTextAlign(column.align),
                      },
                    ]}
                    numberOfLines={1}
                  >
                    {column.title}
                  </Text>
                </View>
              ))}
            </View>
          )}

          {/* Rows */}
          {data.length > 0 ? (
            data.map((row, rowIndex) => (
              <View
                key={`table-row-${rowIndex}`}
                style={[
                  styles.row,
                  {
                    minHeight: rowHeight,
                  },
                ]}
              >
                {columns.map((column) => {
                  const value = row[column.key as keyof T];

                  return (
                    <View
                      key={`${String(column.key)}-${rowIndex}`}
                      style={[
                        styles.cell,
                        {
                          width: getColumnWidth(column),
                          minHeight: rowHeight,
                        },
                      ]}
                    >
                      {column.render ? (
                        column.render(value, row, rowIndex)
                      ) : (
                        <Text
                          style={[
                            styles.cellText,
                            {
                              textAlign: getTextAlign(column.align),
                            },
                          ]}
                          numberOfLines={1}
                        >
                          {value ?? "-"}
                        </Text>
                      )}
                    </View>
                  );
                })}
              </View>
            ))
          ) : (
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>{emptyText}</Text>
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default Table;