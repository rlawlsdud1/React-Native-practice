import { Controller, useFormContext } from "react-hook-form";
import InputField from "./InputField";

const TitleInput = () => {
  const { control, setFocus } = useFormContext();

  return (
    <Controller
      name="title"
      control={control}
      rules={{
        validate: (data: string) => {
          if (!data.length) return "제목을 입력해주세요";
        },
      }}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <InputField
          autoFocus
          label="제목"
          placeholder="제목을 입력해주세요."
          submitBehavior="submit"
          returnKeyType="next"
          onSubmitEditing={() => setFocus("description")}
          value={value}
          onChangeText={onChange}
          error={error?.message}
        />
      )}
    />
  );
};
export default TitleInput;
