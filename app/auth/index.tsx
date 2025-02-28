import CustomButton from "@/components/CustomButton";
import { Link, router } from "expo-router";
import { View, Text, StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const AuthScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("@/assets/images/logo.png")}
          style={styles.logo}
        />
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton
          label="이미지 로그인"
          onPress={() => router.push("/auth/login")}
        />
        <Link href={"/auth/signup"} style={styles.signUpText}>
          이메일로 가입하기
        </Link>
      </View>
    </SafeAreaView>
  );
};
export default AuthScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    width: 112,
    height: 112,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  signUpText: {
    textAlign: "center",
    textDecorationLine: "underline",
    marginTop: 20,
  },
  buttonContainer: {
    paddingHorizontal: 32,
    flex: 1,
  },
});
