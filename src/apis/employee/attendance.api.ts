import { apiRequest } from "@/services/request";
import { PunchInPunchOutPayload } from "@/types/employee/attendance.types";

export const punchInPunchOut = (payload: PunchInPunchOutPayload) =>
  apiRequest.post("/performance/attendance/punch", payload, {
    showSuccessToast: true,
  });