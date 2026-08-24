import { statusEnum } from "./enums";

export const statusMessage: Record<statusEnum, string> = {
  [statusEnum.ACTIVE]: "Active",
  [statusEnum.INACTIVE]: "Inactive",
  [statusEnum.DELETED]: "Deleted",
  [statusEnum.ACCEPTED]: "Accepted",
  [statusEnum.APPROVED]: "Approved",
  [statusEnum.REJECTED]: "Rejected",
  [statusEnum.PENDING]: "Pending",
  [statusEnum.CANCEL]: "Cancel",
  [statusEnum.TERMINATE]: "Terminate",
  [statusEnum.PROMOTED]: "Promoted",
  [statusEnum.HOLD]: "Hold",
};

export const currency = {
  INR: "₹"
}