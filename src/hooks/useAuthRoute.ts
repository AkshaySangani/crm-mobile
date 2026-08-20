import { RouteProp, useRoute } from "@react-navigation/native";
import { AuthStackParamList } from "@/navigation/types";

export const useAuthRoute = <
  T extends keyof AuthStackParamList
>() => {
  return useRoute<RouteProp<AuthStackParamList, T>>();
};