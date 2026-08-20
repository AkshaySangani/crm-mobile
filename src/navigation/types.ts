import { pathNames } from "@/utils/path-names";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";


export type AuthStackParamList = {
  Login: undefined;
  ForgotPassword: undefined;
};

export type AuthNavigationProp =
  NativeStackNavigationProp<AuthStackParamList>;

  export type AppNavigationProp =
  NativeStackNavigationProp<AppStackParamList>;

export type AppStackParamList = {
  MainTabs: undefined;
  
  [pathNames.employee.Attendance]: undefined;
  [pathNames.employee.Leave]: undefined;
  [pathNames.employee.LeaveDetails]: undefined;
  [pathNames.employee.ApplyLeave]: undefined;
  [pathNames.employee.Reimbursement]: undefined;
  [pathNames.employee.AddReimbursement]: undefined;
  [pathNames.employee.ReimbursementDetails]: undefined;
  [pathNames.employee.ManualPunch]: undefined;
  [pathNames.employee.Payslip]: undefined;
  [pathNames.employee.Resign]: undefined;
};