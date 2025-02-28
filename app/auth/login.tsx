import FixedBottomCTA from "@/components/FixedBottomCTA";
import InputField from "@/components/InputField";
import { colors } from "@/constants";
import { View, Text, StyleSheet } from "react-native";

const LoginScreen = () => {
  return (
    <>
      <View style={styles.container}>
        <InputField label="이메일" placeholder="이메일을 입력해주세요." />
        <InputField label="비밀번호" placeholder="비밀번호를 입력해주세요." />
      </View>
      <FixedBottomCTA label="로그인 하기" onPress={() => {}} />
    </>
  );
};
export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
    gap: 16,
  },
});
