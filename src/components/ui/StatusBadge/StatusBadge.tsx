import { View } from "react-native";
import AppText from "../AppText";
import { styles } from "./styles";
import { Colors } from "@/theme";
import { statusEnum } from "@/utils/enums";
import { statusMessage } from "@/utils/constants";

type StatusType = "info" | "pending" | "success" | "warning" | "danger";

interface StatusBadgeProps {
  status: statusEnum;
}

const statusColors: Record<
  StatusType,
  {
    text: string;
    background: string;
  }
> = {
  info: {
    text: Colors.status.info,
    background: Colors.statusLight.info,
  },
  pending: {
    text: Colors.status.pending,
    background: Colors.statusLight.pending,
  },
  success: {
    text: Colors.status.success,
    background: Colors.statusLight.success,
  },
  warning: {
    text: Colors.status.warning,
    background: Colors.statusLight.warning,
  },
  danger: {
    text: Colors.status.danger,
    background: Colors.statusLight.danger,
  },
};

const statusTypes: Record<statusEnum, StatusType> = {
  [statusEnum.ACCEPTED]: "success",
  [statusEnum.APPROVED]: "success",
  [statusEnum.ACTIVE]: "success",
  [statusEnum.PROMOTED]: "success",
  [statusEnum.INACTIVE]: "warning",
  [statusEnum.PENDING]: "pending",
  [statusEnum.DELETED]: "danger",
  [statusEnum.REJECTED]: "danger",
  [statusEnum.CANCEL]: "danger",
  [statusEnum.HOLD]: "pending",
  [statusEnum.TERMINATE]: "danger",
};

export default function StatusBadge({ status }: StatusBadgeProps) {
  const statusType = statusTypes[status];
  const { text, background } = statusColors[statusType];

  return (
    <View
      style={[
        styles.statusBadge,
        {
          backgroundColor: background,
        },
      ]}
    >
      <AppText size="xs" weight="semiBold" color={text}>
        {statusMessage[status]}
      </AppText>
    </View>
  );
}
