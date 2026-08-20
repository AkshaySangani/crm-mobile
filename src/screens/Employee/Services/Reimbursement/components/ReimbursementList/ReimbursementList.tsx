import React from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppCard from "@/components/ui/AppCard";
import AppText from "@/components/ui/AppText";
import { Colors } from "@/theme";

import { styles } from "./styles";
import StatusBadge from "@/components/ui/StatusBadge/StatusBadge";
import { statusEnum } from "@/utils/enums";
import { getFirstCharacter } from "@/utils/helper";
import { useNavigation } from "@react-navigation/native";
import { AppNavigationProp } from "@/navigation/types";
import { pathNames } from "@/utils/path-names";

type ReimbursementStatus = "Approved" | "Pending" | "Rejected";

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
    approvedDate: "May 6, 2025",
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
    approvedDate: "May 6, 2025",
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

const ReimbursementList = () => {
  const navigation =
                useNavigation<AppNavigationProp>();
  const renderItem = ({ item }: { item: ReimbursementItem }) => {

    return (
      <AppCard style={styles.card} >
        <TouchableOpacity activeOpacity={0.8} style={styles.cardContent} onPress={() => navigation.navigate(pathNames.employee.ReimbursementDetails)}>
          <View style={styles.leftSideContent}>
            {/* Left icon */}
            <View
              style={[
                styles.iconContainer,
                {
                  backgroundColor: item.iconBackground,
                },
              ]}
            >
                <AppText
                size="sm"
                weight="semiBold"
                color={Colors.text.primary}
                numberOfLines={1}
              >
               {getFirstCharacter(item.title, 2)}
              </AppText>
              
            </View>

            {/* Details */}
            <View style={styles.details}>
              <AppText
                size="sm"
                weight="semiBold"
                color={Colors.text.primary}
                numberOfLines={1}
              >
                {item.title}
              </AppText>

              <AppText size="xs" color={Colors.text.secondary}>
                {item.date}
              </AppText>
            </View>
          </View>

          {/* Right section */}
          <View style={styles.rightSection}>
            <View style={[styles.details, { alignItems: "flex-end" }]}>
              <AppText size="sm" weight="bold" color={Colors.text.primary}>
                {item.amount}
              </AppText>

              <StatusBadge status={statusEnum.APPROVED} />

              {item.approvedDate && (
                <AppText size="xs" color={Colors.text.secondary}>
                  {item.approvedDate}
                </AppText>
              )}
            </View>
          

          {/* Arrow */}
          <MaterialCommunityIcons
            name="chevron-right"
            size={22}
            color={Colors.brand.primary}
          />
          </View>
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
