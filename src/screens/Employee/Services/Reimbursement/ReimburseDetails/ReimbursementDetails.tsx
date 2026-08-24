import React, { useEffect, useState } from "react";
import { View } from "react-native";

import { styles } from "./styles";

import ReimbursementHeader from "./components/ReimbursementHeader";
import DateInfoCard from "./components/DateInfoCard";
import DescriptionCard from "./components/DescriptionCard";
import AttachmentsCard from "./components/AttachmentsCard";
import ApprovalDetails from "./components/ApprovalDetails";

import { Header, Screen } from "@/components";

import { useNavigation } from "@react-navigation/native";

import { AppNavigationProp } from "@/navigation/types";

import { getReimbursementById } from "@/apis/employee/reimbursement.api";
import { ApiResponse } from "@/types/api.types";
import { useAppRoute } from "@/hooks/useAppRoute";
import { IReimbursement } from "@/types/employee/reimbursement.types";
import { RoleEnum, statusEnum } from "@/utils/enums";
import { DateFormat, formatDate } from "@/utils/date-format";

/* =====================================================
   COMPONENT
===================================================== */

const ReimbursementDetails = () => {
  const navigation = useNavigation<AppNavigationProp>();

  const route = useAppRoute<"ReimbursementDetails">();

  const params = route.params;

  /*
   * If your navigation route contains:
   *
   * {
   *   id: string
   * }
   *
   * then use that ID here.
   */
  const reimbursementId = params.id;

  /* ===================================================
     STATE
  =================================================== */

  const initialReimbursement: IReimbursement = {
    _id: "",
    companyId: "",
    branchId: "",
    userId: {
      _id: "",
      firstName: "",
      lastName: "",
      profileImage: "",
      role: RoleEnum.EMPLOYEE,
    },
    name: "",
    date: "",
    description: "",
    amount: 0,
    status: statusEnum.APPROVED,
    documents: [],
    assignedBy: "",
    createdAt: "",
    updatedAt: "",
  };
  const [reimbursement, setReimbursement] =
    useState<IReimbursement>(initialReimbursement);

  const [loading, setLoading] = useState<boolean>(false);

  /* ===================================================
     GET REIMBURSEMENT DETAILS
  =================================================== */

  const fetchReimbursementDetails = async () => {
    if (!reimbursementId) {
      return;
    }

    try {
      setLoading(true);

      const response = (await getReimbursementById(
        reimbursementId,
      )) as ApiResponse;

      if (response?.success && response?.data) {
        setReimbursement(response.data);
      } else {
        setReimbursement(initialReimbursement);
      }
    } catch (err) {
      console.log("Get reimbursement details error:", err);

      setReimbursement(initialReimbursement);
    } finally {
      setLoading(false);
    }
  };

  /* ===================================================
     API CALL
  =================================================== */

  useEffect(() => {
    fetchReimbursementDetails();
  }, [reimbursementId]);

  return (
    <Screen
      padding={false}
      scroll={true}
      showBackground
      header={
        <Header
          title={"Reimbursement Details"}
          showBack
          onBackPress={() => navigation.goBack()}
        />
      }
    >
      <View style={styles.contentContainer}>
        <ReimbursementHeader data={reimbursement} />

        <DateInfoCard
          requestDate={formatDate(reimbursement.createdAt, DateFormat.FULL_DATE)}
          expenseDate={formatDate(reimbursement.date, DateFormat.FULL_DATE)}
        />

        {reimbursement.description ? <DescriptionCard description={reimbursement.description} /> : <></>}

        {reimbursement.documents?.length > 0 ? <AttachmentsCard attachments={reimbursement.documents} />: <></>}

        <ApprovalDetails
          submittedOn={formatDate(reimbursement.createdAt, DateFormat.FULL_DATE)}
          approvedOn={formatDate(reimbursement.date, DateFormat.FULL_DATE)}
          approvedBy={reimbursement.assignedBy}
          approvedByRole={""}
        />
      </View>
    </Screen>
  );
};

export default ReimbursementDetails;
