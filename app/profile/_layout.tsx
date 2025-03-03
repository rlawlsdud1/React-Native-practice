import { router, Stack } from "expo-router";
import { colors } from "@/constants";
import { Pressable } from "react-native";
import { Feather } from "@expo/vector-icons";

const ProfileLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerTintColor: colors.BLACK,
        contentStyle: {
          backgroundColor: colors.WHITE,
        },
      }}
    >
      <Stack.Screen
        name="[id]"
        options={{
          headerShown: true,
          headerBackButtonDisplayMode: "minimal",
          headerShadowVisible: false,
          headerTitle: "",
          headerLeft: () => (
            <Pressable onPress={() => router.back()}>
              <Feather name="arrow-left" color="black" size={28} />
            </Pressable>
          ),
        }}
      />
      <Stack.Screen
        name="update"
        options={{
          headerShown: true,
          headerBackButtonDisplayMode: "minimal",
          headerShadowVisible: false,
          headerTitle: "프로필 편집",
          headerLeft: () => (
            <Pressable onPress={() => router.back()}>
              <Feather name="arrow-left" color="black" size={28} />
            </Pressable>
          ),
        }}
      />
      <Stack.Screen
        name="avatar"
        options={{
          headerShown: true,
          headerBackButtonDisplayMode: "minimal",
          headerShadowVisible: false,
          headerTitle: "",
          headerLeft: () => (
            <Pressable onPress={() => router.back()}>
              <Feather name="arrow-left" color="black" size={28} />
            </Pressable>
          ),
        }}
      />
    </Stack>
  );
};
export default ProfileLayout;
