import { Link, router, Stack } from "expo-router";
import Foundation from "@expo/vector-icons/Foundation";
import { colors } from "@/constants";
import { Feather } from "@expo/vector-icons";

const PostLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerTintColor: colors.BLACK,
        contentStyle: {
          backgroundColor: colors.WHITE,
        },
      }}
    >
      {/* 여기에 현재 경로의 index.tsx가 연결된다 */}
      <Stack.Screen
        name="write"
        options={{
          title: "글쓰기",
          headerShown: true,
          headerLeft: () => (
            <Link href={"/"} replace>
              <Feather name="arrow-left" color="black" size={28} />
            </Link>
          ),
        }}
      />

      <Stack.Screen
        name="update/[id]"
        options={{
          title: "수정",
          headerShown: true,
          headerLeft: () => (
            <Link href={"/"} replace>
              <Feather
                name="arrow-left"
                color="black"
                size={28}
                onPress={() => router.back()}
              />
            </Link>
          ),
        }}
      />

      <Stack.Screen
        name="[id]"
        options={{
          title: "",
          headerShown: true,
          headerLeft: () => (
            <Link href={"/"} replace>
              <Feather
                name="arrow-left"
                color="black"
                size={28}
                onPress={() =>
                  router.canGoBack() ? router.back() : router.replace("/")
                }
              />
            </Link>
          ),
        }}
      />
    </Stack>
  );
};
export default PostLayout;
