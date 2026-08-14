
import AppButton from "@/components/ui/AppButton";
import { Colors, FontSize, Radius, Spacing } from "@/theme";
import { Modal, Pressable, Text, View } from "react-native";

type Props = {
    visible: boolean;
    notice: string;
    primaryText: string;
    secondaryText: string;
    loading?: boolean;
    onPrimary: () => void;
    onSecondary: () => void;
};

export function AlertModal({
    visible,
    notice,
    primaryText,
    secondaryText,
    loading,
    onPrimary,
    onSecondary,
}: Props) {

    return (
        <Modal
            visible={visible}
            transparent
            animationType="fade"
        >
            {/* Backdrop */}
            <Pressable
                onPress={onSecondary}
                style={{
                    flex: 1,
                    backgroundColor: "rgba(0,0,0,0.4)",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: Spacing.lg,
                }}
            >
                {/* Card */}
                <View
                    style={{
                        width: "100%",
                        maxWidth: 360,
                        backgroundColor: Colors.common.white,
                        borderRadius: Radius.lg,
                        padding: Spacing.lg,
                        paddingBottom: Spacing.md,
                    }}
                >
                    {/* Notice */}
                    <Text
                        style={{
                            color: Colors.common.black,
                            fontSize: FontSize.lg,
                            marginBottom: Spacing.xl,
                            textAlign: "center",
                        }}
                    >
                        {notice}
                    </Text>

                    {/* Actions */}
                    <View
                        style={{
                            flexDirection: "row",
                            gap: Spacing.md,
                            justifyContent: "flex-end"
                        }}
                    >
                        <AppButton
                            variant="secondary"
                            disabled={loading}
                            title={secondaryText}
                            onPress={onSecondary}
                            fullWidth={false}
                        />
                        <AppButton
                            variant="primary"
                            loading={loading}
                            title={primaryText}
                            onPress={onPrimary}
                            fullWidth={false}
                        />
                    </View>
                </View>
            </Pressable>
        </Modal>
    );
}