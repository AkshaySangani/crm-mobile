import { AppCard, AppText } from "@/components";
import { styles } from "./styles";
import { TouchableOpacity, View } from "react-native";
import { Colors } from "@/theme";
import { getFirstCharacter, getFloatValue } from "@/utils/helper";
import StatusBadge from "@/components/ui/StatusBadge/StatusBadge";
import { pathNames } from "@/utils/path-names";
import { DateFormat, formatDate } from "@/utils/date-format";
import { currency } from "@/utils/constants";
import { IReimbursement } from "@/types/employee/reimbursement.types";
import { useNavigation } from "@react-navigation/native";
import { AppNavigationProp } from "@/navigation/types";

const ReimbursementCard = ({ item }: { item: IReimbursement }) => {
  const navigation = useNavigation<AppNavigationProp>();
  return (
    <AppCard style={styles.card}>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.cardContent}
        onPress={() =>
          navigation.navigate(pathNames.employee.ReimbursementDetails, {
            id: item._id,
          })
        }
      >
        <View style={styles.leftSideContent}>
          {/* Left icon */}
          <View style={[styles.iconContainer]}>
            <AppText
              size="md"
              weight="semiBold"
              color={Colors.text.primary}
              numberOfLines={1}
            >
              {getFirstCharacter(item.name, 2)}
            </AppText>
          </View>

          {/* Details */}
          <View style={styles.details}>
            <AppText
              size="md"
              weight="semiBold"
              color={Colors.text.primary}
              numberOfLines={1}
            >
              {item.name}
            </AppText>

            {item.createdAt && (
              <AppText size="xs" color={Colors.text.secondary}>
                {formatDate(item.createdAt, DateFormat.FULL_DATE)}
              </AppText>
            )}
          </View>
        </View>

        {/* Right section */}
        <View style={styles.rightSection}>
          <View style={[styles.details, { alignItems: "flex-end" }]}>
            <AppText size="sm" weight="bold" color={Colors.text.primary}>
              {currency.INR}
              {getFloatValue(item.amount)}
            </AppText>

            <StatusBadge status={item.status} />

            {item.date && (
              <AppText size="xs" color={Colors.text.secondary}>
                {formatDate(item.date, DateFormat.FULL_DATE)}
              </AppText>
            )}
          </View>
        </View>
      </TouchableOpacity>
    </AppCard>
  );
};

export default ReimbursementCard;
