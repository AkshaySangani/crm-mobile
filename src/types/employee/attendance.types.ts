import { AttendanceMethodEnum } from "@/utils/enums";

export interface PunchInPunchOutPayload {
  latitude: number;
  longitude: number;
  address: string;
  method: AttendanceMethodEnum;
}