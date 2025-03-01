import { colors } from "@/constants";
import { ForwardedRef, forwardRef } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TextInputProps,
} from "react-native";

interface InputFieldProps extends TextInputProps {
  label?: string;
  variant?: "filled" | "standard" | "outlined";
  error?: string;
}

const InputField = (
  { label, variant = "filled", error = "", ...props }: InputFieldProps,
  ref?: ForwardedRef<TextInput>
) => {
  return (
    <View>
      {label && <Text style={styles.label}>{label}</Text>}
      <View
        style={[
          styles.container,
          styles[variant],
          Boolean(error) && styles.inputError,
        ]}
      >
        <TextInput
          ref={ref}
          placeholderTextColor={colors.GRAY_500}
          style={styles.input}
          autoCapitalize="none"
          spellCheck={false}
          autoCorrect={false}
          {...props}
        />
      </View>
      {Boolean(error) && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};
export default forwardRef(InputField);

const styles = StyleSheet.create({
  container: {
    height: 44,
    borderRadius: 8,
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  label: {
    fontSize: 12,
    color: colors.GRAY_700,
    marginBottom: 5,
  },
  filled: {
    backgroundColor: colors.GRAY_100,
  },
  standard: {},
  outlined: {},
  input: {
    fontSize: 16,
    color: colors.GRAY_700,
    marginBottom: 5,
  },
  error: {
    fontSize: 12,
    marginTop: 5,
    color: colors.RED_100,
  },
  inputError: {
    backgroundColor: colors.RED_500,
  },
});
