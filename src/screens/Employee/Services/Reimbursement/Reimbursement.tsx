import React, { useCallback, useEffect, useState } from "react";

import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  TouchableOpacity,
  View,
} from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";

import { Header, Screen } from "@/components";

import AppText from "@/components/ui/AppText";

import { Colors } from "@/theme";

import { AppNavigationProp } from "@/navigation/types";

import { pathNames } from "@/utils/path-names";

import YearPicker, {
  YearPickerValue,
} from "@/components/ui/YearPicker/YearPicker";

import StatCards, { StatItem } from "./components/StatCards/StatCards";

import { styles } from "./styles";
import {
  getReimbursementCount,
  getReimbursementList,
} from "@/apis/employee/reimbursement.api";
import ReimbursementCard from "./components/ReimbursementList/ReimbursementCard";
import { statusEnum } from "@/utils/enums";
import { ApiResponse } from "@/types/api.types";
import { IReimbursement, ReimbursementStats } from "@/types/employee/reimbursement.types";



/* =====================================================
   CONSTANTS
===================================================== */

const PAGE_LIMIT = 10;

/* =====================================================
   COMPONENT
===================================================== */

const Reimbursement = () => {
  const navigation = useNavigation<AppNavigationProp>();

  /* ===================================================
     FILTERS
  =================================================== */

  const [status, setStatus] = useState<string>("");

  const [year, setYear] = useState<YearPickerValue>(new Date().getFullYear());

  /* ===================================================
     PAGINATION
  =================================================== */

  const [page, setPage] = useState<number>(1);

  const [total, setTotal] = useState<number>(0);

  /* ===================================================
     LOADING
  =================================================== */

  const [loading, setLoading] = useState<boolean>(false);

  const [loadingMore, setLoadingMore] = useState<boolean>(false);

  const [refreshing, setRefreshing] = useState<boolean>(false);

  /* ===================================================
     LIST
  =================================================== */

  const [reimbursementList, setReimbursementList] = useState<IReimbursement[]>(
    [],
  );

  /* ===================================================
     STATISTICS
  =================================================== */

  const [cards, setCards] = useState<StatItem[]>([
    {
      id: "",
      label: "Total Requests",
      count: 0,
      amount: 0,
      icon: "calendar-check-outline",
      iconColor: "#4CAF50",
      backgroundColor: "#EAF7EC",
    },
    {
      id: statusEnum.APPROVED,
      label: "Approved",
      count: 0,
      amount: 0,
      icon: "check-circle-outline",
      iconColor: "#3D7BFF",
      backgroundColor: "#EDF3FF",
    },
    {
      id: statusEnum.PENDING,
      label: "Pending",
      count: 0,
      amount: 0,
      icon: "clock-outline",
      iconColor: "#FF9F43",
      backgroundColor: "#FFF4E8",
    },
    {
      id: statusEnum.REJECTED,
      label: "Rejected",
      count: 0,
      amount: 0,
      icon: "close-circle-outline",
      iconColor: "#FF4D4F",
      backgroundColor: "#FFF0F0",
    },
  ]);

  /* ===================================================
     HAS MORE
  =================================================== */

  const hasMore = reimbursementList.length < total;

  /* ===================================================
     FETCH REIMBURSEMENT LIST
  =================================================== */

  const fetchReimbursementList = useCallback(
    async (pageNumber: number, isRefresh: boolean = false) => {
      try {
        /*
         * Loading state
         */
        if (isRefresh) {
          setRefreshing(true);
        } else if (pageNumber === 1) {
          setLoading(true);
        } else {
          setLoadingMore(true);
        }

        /*
         * API payload
         */
        const payload: any = {
          page: pageNumber,
          limit: PAGE_LIMIT,
          search: "",
          status,
          year,
        };

        /*
         * API call
         */
        const response = (await getReimbursementList(
          payload,
        )) as ApiResponse;

        /*
         * Success
         */
        if (response?.success) {
          const newData = response.data?.reimbursements ?? [];

          const responseTotal = response.data?.total ?? 0;

          /*
           * Update total
           */
          setTotal(responseTotal);

          /*
           * First page
           *
           * Replace existing data.
           */
          if (pageNumber === 1) {
            setReimbursementList(newData);
          } else {
            /*
             * Next pages
             *
             * Append data.
             */
            setReimbursementList((previousData) => {
              /*
               * Existing IDs
               */
              const existingIds = new Set(previousData.map((item) => item._id));

              /*
               * Remove duplicates
               */
              const uniqueData = newData.filter(
                (item: IReimbursement) => !existingIds.has(item._id),
              );

              /*
               * Append
               */
              return [...previousData, ...uniqueData];
            });
          }

          /*
           * Update current page
           */
          setPage(pageNumber);
        } else {
          /*
           * API failed
           */
          if (pageNumber === 1) {
            setReimbursementList([]);

            setTotal(0);
          }
        }
      } catch (error) {
        console.log("Reimbursement List Error:", error);
      } finally {
        setLoading(false);
        setLoadingMore(false);
        setRefreshing(false);
      }
    },
    [status, year],
  );

  /* ===================================================
     FETCH STATISTICS
  =================================================== */

  const fetchReimbursementCount = useCallback(async () => {
    try {
      const response = await getReimbursementCount({
        year: String(year),
      });

      if (response?.success && response?.data) {
        updateCards(response.data);
      }
    } catch (error) {
      console.log("Reimbursement Count Error:", error);
    }
  }, [year]);

  // update cards
  const updateCards = (stats: ReimbursementStats) => {
    setCards((prev) =>
      prev.map((card) => {
        switch (card.id) {
          case "":
            return { ...card, count: stats.total, amount: stats.amount.total };

          case statusEnum.APPROVED:
            return {
              ...card,
              count: stats.approved,
              amount: stats.amount.approved,
            };

          case statusEnum.PENDING:
            return {
              ...card,
              count: stats.pending,
              amount: stats.amount.pending,
            };

          case statusEnum.REJECTED:
            return {
              ...card,
              count: stats.rejected,
              amount: stats.amount.rejected,
            };

          default:
            return card;
        }
      }),
    );
  };

  /* ===================================================
     INITIAL API CALL
  =================================================== */

  useEffect(() => {
    /*
     * Reset pagination
     */
    setPage(1);

    /*
     * Clear previous list
     */
    setReimbursementList([]);

    /*
     * Reset total
     */
    setTotal(0);

    /*
     * Get first page
     */
    fetchReimbursementList(1);

    /*
     * Get statistics
     */
    fetchReimbursementCount();
  }, [status, year, fetchReimbursementList, fetchReimbursementCount]);

  /* ===================================================
     LOAD MORE
  =================================================== */

  const handleLoadMore = useCallback(() => {
    /*
     * Don't call API when:
     *
     * 1. Initial loading
     * 2. Already loading more
     * 3. Pull-to-refresh running
     * 4. No more data
     */
    if (loading || loadingMore || refreshing || !hasMore) {
      return;
    }

    /*
     * Next page
     */
    fetchReimbursementList(page + 1);
  }, [loading, loadingMore, refreshing, hasMore, page, fetchReimbursementList]);

  /* ===================================================
     PULL TO REFRESH
  =================================================== */

  const handleRefresh = useCallback(() => {
    /*
     * Get first page again
     */
    fetchReimbursementList(1, true);

    /*
     * Refresh statistics
     */
    fetchReimbursementCount();
  }, [fetchReimbursementList, fetchReimbursementCount]);

  /* ===================================================
     YEAR CHANGE
  =================================================== */

  const handleYearChange = (value: YearPickerValue) => {
    setYear(value);
    setPage(1);
  };

  /* ===================================================
     STATUS CHANGE
  =================================================== */

  const handleStatusChange = (value: string) => {
    setStatus(value);
  };

  /* ===================================================
     RENDER LIST ITEM
  =================================================== */

  const renderItem = ({ item }: { item: IReimbursement }) => {
    return <ReimbursementCard item={item} />;
  };

  /* ===================================================
     FOOTER LOADER
  =================================================== */

  const renderFooter = () => {
    /*
     * Don't show footer loader
     * if not loading more.
     */
    if (!loadingMore) {
      return null;
    }

    return (
      <View style={styles.footerLoader}>
        <ActivityIndicator size="small" color={Colors.brand.primary} />
      </View>
    );
  };

  /* ===================================================
     EMPTY STATE
  =================================================== */

  const renderEmpty = () => {
    /*
     * Don't show empty state
     * during initial loading.
     */
    if (loading) {
      return null;
    }

    return (
      <View style={styles.emptyContainer}>
        <AppText size="sm" color={Colors.text.secondary}>
          No reimbursement requests found.
        </AppText>
      </View>
    );
  };

  /* ===================================================
     SCREEN
  =================================================== */

  return (
    <Screen
      padding={false}
      scroll={false}
      showBackground
      header={
        <Header
          title="Reimbursement"
          showBack
          onBackPress={() => navigation.goBack()}
          rightComponent={
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() =>
                navigation.navigate(pathNames.employee.AddReimbursement)
              }
            >
              <MaterialCommunityIcons
                name="file-document-outline"
                size={20}
                color={Colors.common.white}
              />
            </TouchableOpacity>
          }
        />
      }
    >
      <View style={styles.container}>
        {/* =========================================
          FIXED FILTER
      ========================================= */}

        <View style={styles.fixedHeader}>
          <View style={styles.filtersRow}>
            <YearPicker
              value={year}
              onChange={handleYearChange}
            />
          </View>

          {/* =========================================
            FIXED STAT CARDS
        ========================================= */}

          <StatCards
            cards={cards}
            activeStatus={status}
            onStatusChange={handleStatusChange}
          />

          {/* =========================================
            FIXED LIST TITLE
        ========================================= */}

          <View style={styles.listSection}>
            <AppText size="sm" weight="bold" color={Colors.text.primary}>
              Reimbursement Requests
            </AppText>
          </View>
        </View>

        {/* =========================================
          ONLY THIS PART SCROLLS
      ========================================= */}

        <FlatList
          data={reimbursementList}
          keyExtractor={(item) => item._id}
          renderItem={renderItem}
          ListFooterComponent={renderFooter}
          ListEmptyComponent={renderEmpty}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.5}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={handleRefresh}
              tintColor={Colors.brand.primary}
              colors={[Colors.brand.primary]}
            />
          }
          showsVerticalScrollIndicator={false}
          contentContainerStyle={
            reimbursementList.length === 0
              ? styles.emptyListContent
              : styles.listContent
          }
        />
      </View>
    </Screen>
  );
};

export default Reimbursement;
