import { statusEnum } from "@/utils/enums";
import { IUser } from "../user.types";

export interface ReimbursementFormData {
  name: string;
  date: string;
  description: string;
  amount: string;
  userId: string;
  branchId: string;
  documents: any[];
}

export interface IReimbursementPayload {
  search: string;
  status?: string;
  page: number;
  limit: number;
  year?: string;
  month?: string;
  isDownload?: boolean;
  password?: string;
}
export interface IReimbursement {
  _id: string;
  companyId: string;
  branchId: string;

  userId: IUser;

  name: string;
  date: string;
  description: string;
  amount: number;

  status: statusEnum;

  documents: string[];

  assignedBy: string;

  createdAt: string;
  updatedAt: string;
}

export interface ReimbursementListResponse {
  reimbursements: IReimbursement[];
  total: number;
}

export interface ReimbursementStats {
  total: number;
  pending: number;
  approved: number;
  rejected: number;

  amount: Omit<ReimbursementStats, "amount">;
}