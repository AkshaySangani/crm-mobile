import React, { useState } from "react";
import {
  Alert,
  Platform,
  Pressable,
  ScrollView,
  TextInput,
  View,
} from "react-native";
// import DateTimePicker from "@react-native-community/datetimepicker";
import { Ionicons } from "@expo/vector-icons";

import AppText from "@/components/ui/AppText";
import AppSelect from "@/components/ui/AppSelect";

import { styles } from "./styles";
import { AppInput, Header, Screen } from "@/components";
import { useNavigation } from "@react-navigation/native";
import { AppNavigationProp } from "@/navigation/types";

interface SelectedDocument {
  uri: string;
  name: string;
  size?: number;
  mimeType?: string;
}

const branchOptions = [
  { label: "Branch 1", value: "branch-1" },
  { label: "Branch 2", value: "branch-2" },
  { label: "Branch 3", value: "branch-3" },
];

const employeeOptions = [
  { label: "John Doe", value: "employee-1" },
  { label: "Jane Smith", value: "employee-2" },
  { label: "Robert Wilson", value: "employee-3" },
];

const formatDate = (date: Date) => {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${day}-${month}-${year}`;
};

const AddReimbursement = () => {
     const navigation = useNavigation<AppNavigationProp>();
  const [branch, setBranch] = useState("");
  const [employee, setEmployee] = useState("");
  const [expenseName, setExpenseName] = useState("");
  const [expenseDate, setExpenseDate] = useState<Date | null>(null);
  const [amount, setAmount] = useState("");
  const [comment, setComment] = useState("");

  const [documents, setDocuments] = useState<SelectedDocument[]>([]);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDateChange = (
    event: any,
    selectedDate?: Date,
  ) => {
    setShowDatePicker(Platform.OS === "ios");

    if (selectedDate) {
      setExpenseDate(selectedDate);
    }
  };

  const handlePickDocuments = async () => {
    // try {
    //   const result = await DocumentPicker.getDocumentAsync({
    //     type: "*/*",
    //     multiple: true,
    //     copyToCacheDirectory: true,
    //   });

    //   if (result.canceled) {
    //     return;
    //   }

    //   const selectedDocuments: SelectedDocument[] = result.assets.map(
    //     (file) => ({
    //       uri: file.uri,
    //       name: file.name,
    //       size: file.size,
    //       mimeType: file.mimeType,
    //     }),
    //   );

    //   setDocuments((prev) => [...prev, ...selectedDocuments]);
    // } catch (error) {
    //   Alert.alert("Error", "Unable to select documents.");
    // }
  };

  const handleRemoveDocument = (index: number) => {
    setDocuments((prev) =>
      prev.filter((_, documentIndex) => documentIndex !== index),
    );
  };

  const handleSubmit = () => {
    if (!branch) {
      Alert.alert("Validation", "Please select a branch.");
      return;
    }

    if (!expenseName.trim()) {
      Alert.alert("Validation", "Please enter expense name.");
      return;
    }

    if (!expenseDate) {
      Alert.alert("Validation", "Please select expense date.");
      return;
    }

    if (!amount.trim()) {
      Alert.alert("Validation", "Please enter expense amount.");
      return;
    }

    const payload = {
      branch,
      employee,
      expenseName,
      expenseDate: formatDate(expenseDate),
      amount,
      comment,
      documents,
    };

    console.log("Reimbursement Payload:", payload);

    Alert.alert("Success", "Reimbursement submitted successfully.");
  };

  return (
    <Screen padding={false}
      scroll={true}
      showBackground
      header={
        <Header
          title={"Add Reimbursement"}
          showBack
          onBackPress={() => navigation.goBack()}
        />
      }>
    <View
      style={styles.container}
    >

      <View style={styles.form}>

        {/* Expense Name */}
        <AppInput 
        label="Expense Name"
        value={expenseName}
            onChangeText={setExpenseName}
            placeholder="Enter expense name"
            placeholderTextColor={styles.placeholder.color}
        />

        {/* Expense Date */}
        <View style={styles.field}>
          <AppText style={styles.label}>
            Expense Date <AppText style={styles.required}>*</AppText>
          </AppText>

          <Pressable
            style={styles.dateInput}
            onPress={() => setShowDatePicker(true)}
          >
            <AppText
              style={[
                styles.dateText,
                !expenseDate && styles.placeholderText,
              ]}
            >
              {expenseDate
                ? formatDate(expenseDate)
                : "dd-mm-yyyy"}
            </AppText>

            <Ionicons
              name="calendar-outline"
              size={19}
              style={styles.calendarIcon}
            />
          </Pressable>

          {/* {showDatePicker && (
            <DateTimePicker
              value={expenseDate ?? new Date()}
              mode="date"
              display={Platform.OS === "ios" ? "spinner" : "default"}
              onChange={handleDateChange}
            />
          )} */}
        </View>

        {/* Amount */}
        <AppInput 
        label="Amount"
        value={expenseName}
            onChangeText={setExpenseName}
            placeholder="Enter amount"
            placeholderTextColor={styles.placeholder.color}
        />

        {/* Comment */}
        <AppInput 
        label="Comment"
        multiline
        value={expenseName}
            onChangeText={setExpenseName}
            placeholder="Enter expense name"
            placeholderTextColor={styles.placeholder.color}
        />

        {/* Documents */}
        <View style={styles.field}>
          <AppText style={styles.label}>
            Upload Documents
          </AppText>

          <Pressable
            style={styles.uploadBox}
            onPress={handlePickDocuments}
          >
            <View style={styles.uploadButton}>
              <Ionicons
                name="cloud-upload-outline"
                size={18}
                style={styles.uploadIcon}
              />

              <AppText style={styles.uploadButtonText}>
                Choose Files
              </AppText>
            </View>

            <AppText
              style={[
                styles.fileCount,
                documents.length === 0 && styles.placeholderText,
              ]}
            >
              {documents.length === 0
                ? "No file chosen"
                : `${documents.length} file${
                    documents.length > 1 ? "s" : ""
                  } selected`}
            </AppText>
          </Pressable>

          {/* Selected Documents */}
          {documents.length > 0 && (
            <View style={styles.documentsList}>
              {documents.map((document, index) => (
                <View
                  key={`${document.uri}-${index}`}
                  style={styles.documentItem}
                >
                  <View style={styles.documentInfo}>
                    <Ionicons
                      name="document-text-outline"
                      size={20}
                      style={styles.documentIcon}
                    />

                    <AppText
                      style={styles.documentName}
                      numberOfLines={1}
                    >
                      {document.name}
                    </AppText>
                  </View>

                  <Pressable
                    hitSlop={8}
                    onPress={() => handleRemoveDocument(index)}
                  >
                    <Ionicons
                      name="close-circle-outline"
                      size={21}
                      style={styles.removeIcon}
                    />
                  </Pressable>
                </View>
              ))}
            </View>
          )}
        </View>

        {/* Submit */}
        <Pressable
          style={styles.submitButton}
          onPress={handleSubmit}
        >
          <AppText style={styles.submitButtonText}>
            Submit
          </AppText>
        </Pressable>
      </View>
    </View>
    </Screen>
  );
};

export default AddReimbursement;