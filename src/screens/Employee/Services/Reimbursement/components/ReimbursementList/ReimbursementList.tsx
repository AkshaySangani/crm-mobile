import React from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppCard from "@/components/ui/AppCard";
import AppText from "@/components/ui/AppText";
import { Colors } from "@/theme";

import { styles } from "./styles";

type ReimbursementStatus =
  | "Approved"
  | "Pending"
  | "Rejected";

type ReimbursementItem = {
  id: string;
  title: string;
  date: string;
  category: string;
  amount: string;
  status: ReimbursementStatus;
  approvedDate?: string;
  icon: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
  iconColor: string;
  iconBackground: string;
};

const reimbursementData: ReimbursementItem[] = [
  {
    id: "1",
    title: "Fuel Expense",
    date: "May 20, 2025",
    category: "Travel",
    amount: "₹ 2,500",
    status: "Approved",
    approvedDate: "May 22, 2025",
    icon: "gas-station-outline",
    iconColor: "#4CAF50",
    iconBackground: "#EAF7EC",
  },
  {
    id: "2",
    title: "Client Meeting - Travel",
    date: "May 18, 2025",
    category: "Travel",
    amount: "₹ 5,800",
    status: "Pending",
    icon: "gas-station-outline",
    iconColor: "#9B5CFF",
    iconBackground: "#F3EAFF",
  },
  {
    id: "3",
    title: "Team Lunch",
    date: "May 15, 2025",
    category: "Food",
    amount: "₹ 1,250",
    status: "Approved",
    approvedDate: "May 17, 2025",
    icon: "silverware-fork-knife",
    iconColor: "#508BFF",
    iconBackground: "#EAF1FF",
  },
  {
    id: "4",
    title: "Hotel Stay – Mumbai",
    date: "May 10, 2025",
    category: "Accommodation",
    amount: "₹ 8,750",
    status: "Rejected",
    approvedDate: "May 13, 2025",
    icon: "office-building-outline",
    iconColor: "#F15B5B",
    iconBackground: "#FFECEC",
  },
  {
    id: "5",
    title: "Office Supplies",
    date: "May 8, 2025",
    category: "Other",
    amount: "₹ 950",
    status: "Pending",
    icon: "file-document-outline",
    iconColor: "#FF9F43",
    iconBackground: "#FFF3E6",
  },
  {
    id: "6",
    title: "Fuel Expense",
    date: "May 5, 2025",
    category: "Travel",
    amount: "₹ 2,300",
    status: "Approved",
    approvedDate: "May 6, 2025",
    icon: "gas-station-outline",
    iconColor: "#4CAF50",
    iconBackground: "#EAF7EC",
  },
  {
    id: "7",
    title: "Client Visit – Outstation",
    date: "Apr 28, 2025",
    category: "Travel",
    amount: "₹ 6,200",
    status: "Rejected",
    approvedDate: "Apr 30, 2025",
    icon: "gas-station-outline",
    iconColor: "#9B5CFF",
    iconBackground: "#F3EAFF",
  },
];

const statusColors = {
  Approved: {
    text: "#46A758",
    background: "#EAF7EC",
  },
  Pending: {
    text: "#E89A32",
    background: "#FFF3E2",
  },
  Rejected: {
    text: "#E04B4B",
    background: "#FFECEC",
  },
};

const ReimbursementList = () => {
  const renderItem = ({
    item,
  }: {
    item: ReimbursementItem;
  }) => {
    const statusStyle = statusColors[item.status];

    return (
      <AppCard style={styles.card}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.cardContent}
        >
          {/* Left icon */}
          <View
            style={[
              styles.iconContainer,
              {
                backgroundColor: item.iconBackground,
              },
            ]}
          >
            <MaterialCommunityIcons
              name={item.icon}
              size={17}
              color={item.iconColor}
            />
          </View>

          {/* Details */}
          <View style={styles.details}>
            <AppText
              size="xs"
              weight="semiBold"
              color={Colors.text.primary}
              numberOfLines={1}
            >
              {item.title}
            </AppText>

            <AppText
              size="xs"
              color={Colors.text.secondary}
              style={styles.date}
            >
              {item.date}
            </AppText>

            <AppText
              size="xs"
              color={Colors.text.secondary}
            >
              {item.category}
            </AppText>
          </View>

          {/* Right section */}
          <View style={styles.rightSection}>
            <AppText
              size="xs"
              weight="bold"
              color={Colors.text.primary}
              style={styles.amount}
            >
              {item.amount}
            </AppText>

            <View
              style={[
                styles.statusBadge,
                {
                  backgroundColor: statusStyle.background,
                },
              ]}
            >
              <AppText
                size="xs"
                weight="semiBold"
                color={statusStyle.text}
                style={styles.statusText}
              >
                {item.status}
              </AppText>
            </View>

            {item.approvedDate && (
              <AppText
                size="xs"
                color={Colors.text.secondary}
                style={styles.approvedDate}
              >
                {item.approvedDate}
              </AppText>
            )}
          </View>

          {/* Arrow */}
          <MaterialCommunityIcons
            name="chevron-right"
            size={18}
            color={Colors.brand.primary}
            style={styles.arrow}
          />
        </TouchableOpacity>
      </AppCard>
    );
  };

  return (
    <FlatList
      data={reimbursementData}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.listContent}
      nestedScrollEnabled
    />
  );
};

export default ReimbursementList;