import { ToastType } from "@/components/ui/Toast/ToastProvider";


type ToastHandler = (
  message: string,
  type?: ToastType
) => void;

let toastHandler: ToastHandler | null = null;

export const registerToast = (handler: ToastHandler) => {
  toastHandler = handler;
};

export const toastMessage = {
  show: (message: string, type: ToastType = "info") => {
    toastHandler?.(message, type);
  },

  success: (message: string) => {
    toastHandler?.(message, "success");
  },

  error: (message: string) => {
    toastHandler?.(message, "error");
  },

  info: (message: string) => {
    toastHandler?.(message, "info");
  },
};