import { colors } from "@/constants";
import { ForwardedRef, forwardRef, ReactNode } from "react";
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
  rightChild?: ReactNode;
}

const InputField = (
  {
    label,
    variant = "filled",
    error = "",
    rightChild = null,
    ...props
  }: InputFieldProps,
  ref?: ForwardedRef<TextInput>
) => {
  return (
    <View>
      {label && <Text style={styles.label}>{label}</Text>}
      <View
        style={[
          styles.container,
          styles[variant],
          props.multiline && styles.multiLine,
          Boolean(error) && styles.inputError,
        ]}
      >
        <TextInput
          ref={ref}
          placeholderTextColor={colors.GRAY_500}
          style={[styles.input, styles[`${variant}Text`]]}
          autoCapitalize="none"
          spellCheck={false}
          autoCorrect={false}
          {...props}
        />
        {rightChild}
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
  standard: {
    borderWidth: 1,
    borderColor: colors.GRAY_200,
  },
  outlined: {
    borderWidth: 1,
    borderColor: colors.ORANGE_600,
    fontWeight: "bold",
  },
  standardText: {
    color: colors.BLACK,
  },
  outlinedText: {
    color: colors.ORANGE_600,
  },
  filledText: {
    color: colors.BLACK,
  },

  input: {
    fontSize: 16,
    padding: 0,
    flex: 1,
  },
  error: {
    fontSize: 12,
    marginTop: 5,
    color: colors.RED_500,
  },
  inputError: {
    backgroundColor: colors.RED_100,
  },
  multiLine: {
    alignItems: "flex-start",
    paddingVertical: 10,
    height: 200,
  },
});
