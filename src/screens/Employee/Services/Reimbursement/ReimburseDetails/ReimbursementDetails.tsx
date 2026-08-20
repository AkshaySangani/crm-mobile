import React from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

import ReimbursementHeader from "./components/ReimbursementHeader";
import DateInfoCard from "./components/DateInfoCard";
import ExpenseDetails from "./components/ExpenseDetails";
import DescriptionCard from "./components/DescriptionCard";
import AttachmentsCard from "./components/AttachmentsCard";
import ApprovalDetails from "./components/ApprovalDetails";
import { Header, Screen } from "@/components";
import { useNavigation } from "@react-navigation/native";
import { AppNavigationProp } from "@/navigation/types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Colors } from "@/theme";

export interface ReimbursementAttachment {
  id: string;
  name: string;
  uri: string;
  type?: "image" | "pdf" | "file";
}

export interface ReimbursementDetailsData {
  id: string;
  expenseType: string;
  category: string;
  amount: number;
  totalAmount: number;
  status: "Approved" | "Pending" | "Rejected";
  requestDate: string;
  expenseDate: string;
  description: string;

  attachments: ReimbursementAttachment[];

  submittedOn: string;
  approvedOn?: string;
  approvedBy?: string;
  approvedByRole?: string;
}

const reimbursementData: ReimbursementDetailsData = {
  id: "1",
  expenseType: "Fuel Expense",
  category: "Travel",
  amount: 2500,
  totalAmount: 2500,
  status: "Approved",

  requestDate: "May 20, 2025",
  expenseDate: "May 20, 2025",

  description:
    "Fuel expenses for client meeting travel from Ahmedabad to Vadodara and return.",

  attachments: [
    {
      id: "1",
      name: "Receipt 1",
      uri: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8",
      type: "image",
    },
    {
      id: "2",
      name: "Receipt 2",
      uri: "https://images.unsplash.com/photo-1554224155-6726b3ff858f",
      type: "image",
    },
  ],

  submittedOn: "May 20, 2025  |  11:30 AM",
  approvedOn: "May 22, 2025  |  03:45 PM",
  approvedBy: "Arjunsinh Rathod",
  approvedByRole: "Reporting Manager",
};

const ReimbursementDetails = () => {
     const navigation = useNavigation<AppNavigationProp>();
  return (
    <Screen padding={false}
      scroll={true}
      showBackground
      header={
        <Header
          title={"Reimbursement Details"}
          showBack
          onBackPress={() => navigation.goBack()}
        />
      }>

      <View
        style={styles.contentContainer}
      >
        <ReimbursementHeader data={reimbursementData} />

        <DateInfoCard
          requestDate={reimbursementData.requestDate}
          expenseDate={reimbursementData.expenseDate}
        />

        <ExpenseDetails
          expenseType={reimbursementData.expenseType}
          amount={reimbursementData.amount}
          totalAmount={reimbursementData.totalAmount}
        />

        <DescriptionCard description={reimbursementData.description} />

        <AttachmentsCard
          attachments={reimbursementData.attachments}
        />

        <ApprovalDetails
          submittedOn={reimbursementData.submittedOn}
          approvedOn={reimbursementData.approvedOn}
          approvedBy={reimbursementData.approvedBy}
          approvedByRole={reimbursementData.approvedByRole}
        />
      </View>
    </Screen>
  );
};

export default ReimbursementDetails;