import { colors } from "@/constants";
import { Stack } from "expo-router";

const SettingLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: colors.WHITE,
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
          title: "내 프로필",
        }}
      ></Stack.Screen>
    </Stack>
  );
};
export default SettingLayout;
