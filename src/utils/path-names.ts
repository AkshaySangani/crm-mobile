export const pathNames = {
  // auth routes
  auth: {
    LOGIN: "Login",
    FORGOT_PASSWORD: "ForgotPassword",
    OTP_VERIFY: "OptVerify",
    RESET_PASSWORD: "ResetPassword",
  },
  employee: {
    // main screen
    Dashboard: "Dashboard",
    Services: "Services",
    Menu: "Menu",

    // sub screens
    Attendance: "Attendance",
    Leave: "Leave",
    ApplyLeave: "ApplyLeave",
    Reimbursement: "Reimbursement",
    ManualPunch: "ManualPunch",
    Payslip: "Payslip",
    Resign: "Resign",
  },
} as const;
