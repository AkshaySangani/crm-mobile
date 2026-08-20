import React, {
  createContext,
  useContext,
  useRef,
  useState,
} from "react";
import { Animated, Pressable, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Colors, Radius, Spacing } from "@/theme";
import { AppText } from "@/components";
import { registerToast } from "@/utils/toast";

export type ToastType = "success" | "error" | "info";

type Toast = {
  id: number;
  message: string;
  type: ToastType;
};

type ToastContextType = {
  show: (message: string, type?: ToastType) => void;
};

const ToastContext = createContext<ToastContextType | null>(null);

export function ToastProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const insets = useSafeAreaInsets();

  const [toasts, setToasts] = useState<Toast[]>([]);
  const id = useRef(0);

  const show = (message: string, type: ToastType = "info") => {
    const toastId = ++id.current;

    setToasts((prev) => [
      ...prev,
      {
        id: toastId,
        message,
        type,
      },
    ]);

    setTimeout(() => {
      setToasts((prev) =>
        prev.filter((toast) => toast.id !== toastId)
      );
    }, 3000);
  };

  // Register global toast handler
  React.useEffect(() => {
    registerToast(show);
  }, []);

  return (
    <ToastContext.Provider value={{ show }}>
      {children}

      <View
        pointerEvents="box-none"
        style={{
          position: "absolute",
          top: insets.top + Spacing.md,
          left: 0,
          right: 0,
          alignItems: "center",
        }}
      >
        {toasts.map((toast) => (
          <ToastItem
            key={toast.id}
            toast={toast}
            onClose={() =>
              setToasts((prev) =>
                prev.filter((t) => t.id !== toast.id)
              )
            }
          />
        ))}
      </View>
    </ToastContext.Provider>
  );
}

function ToastItem({
  toast,
  onClose,
}: {
  toast: Toast;
  onClose: () => void;
}) {
  const opacity = useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [opacity]);

  const bg =
    toast.type === "success"
      ? Colors.status.success
      : toast.type === "error"
        ? Colors.status.danger
        : Colors.status.pending;

  return (
    <Animated.View
      style={{
        opacity,
        marginBottom: Spacing.sm,
        paddingHorizontal: Spacing.md,
        paddingVertical: Spacing.sm,
        borderRadius: Radius.md,
        backgroundColor: bg,
        minWidth: "80%",
      }}
    >
      <Pressable onPress={onClose}>
        <AppText
          size="sm"
          weight="semiBold"
          color={Colors.common.white}
          center
        >
          {toast.message}
        </AppText>
      </Pressable>
    </Animated.View>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);

  if (!ctx) {
    throw new Error(
      "useToast must be inside ToastProvider"
    );
  }

  return ctx;
}