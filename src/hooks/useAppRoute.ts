import { RouteProp, useRoute } from "@react-navigation/native";
import { AppStackParamList } from "@/navigation/types";

export const useAppRoute = <
  T extends keyof AppStackParamList
>() => {
  return useRoute<RouteProp<AppStackParamList, T>>();
};