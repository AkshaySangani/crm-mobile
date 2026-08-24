import { ApiResponse } from "@/types/api.types";
import { apiRequest } from "@/services/request";
import { IReimbursementPayload } from "@/types/employee/reimbursement.types";

export const getReimbursementList = (payload: IReimbursementPayload) => {
  const { page, limit, search, status, year, month, isDownload = false, password = "" } = payload;
  return apiRequest.get<ApiResponse>(
    `/expense/reimbursements?page=${page}${limit ? `&limit=${limit}`:""}${search ? `&search=${search}` : ""}${status ? `&status=${status}` : ""}${year ? `&year=${year}` : ""}${month ? `&month=${month}` : ""}${isDownload ? `&isDownload=${isDownload}` : ""}${password ? `&csvPassword=${password}` : ""}`,
  );
};

export const addReimbursement = (payload: FormData) =>
  apiRequest.post(`/expense/reimbursements`, payload, {
    showSuccessToast: true,
  });

export const getReimbursementById = (reimbursementId: string) => {
  return apiRequest.get<ApiResponse>(`/expense/reimbursements/${reimbursementId}`);
};

export const getReimbursementCount = ({
    month = "",
    year = ""
}: {month?: string;year?: string}) => {
  return apiRequest.get<ApiResponse>(`/expense/reimbursements/count${`?year=${year}`}&month=${month}`);
};
