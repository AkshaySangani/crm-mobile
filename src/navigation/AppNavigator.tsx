import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AppStackParamList } from "./types";
import TabNavigator from "@/screens/Employee/TabNavigator/TabNavigator";
import Attendance from "@/screens/Employee/Services/Attendance/Attendance";
import { pathNames } from "@/utils/path-names";
import Leave from "@/screens/Employee/Services/Leave/Leave";
import ApplyLeave from "@/screens/Employee/Services/Leave/components/Leaves/ApplyLeave/ApplyLeave";
import Reimbursement from "@/screens/Employee/Services/Reimbursement/Reimbursement";

const Stack = createNativeStackNavigator<AppStackParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* Main Application */}
      <Stack.Screen
        name="MainTabs"
        component={TabNavigator}
      />

      <Stack.Screen
        name={pathNames.employee.Attendance}
        component={Attendance}
      />

      <Stack.Screen
        name={pathNames.employee.Leave}
        component={Leave}
      />

      <Stack.Screen
        name={pathNames.employee.ApplyLeave}
        component={ApplyLeave}
      />

      {/* Reimbursements */}
      <Stack.Screen
        name={pathNames.employee.Reimbursement}
        component={Reimbursement}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
