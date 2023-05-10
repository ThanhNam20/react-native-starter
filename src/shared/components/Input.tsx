import { View, Text, TextInput, TextInputProps } from "react-native";
import React from "react";


export interface InputProps extends TextInputProps {
  errorMessage?: string;
  classNameInput?: string;
  classNameError?: string;
  classNameContainerInput?: string;
}

const Input = ({
  errorMessage,
  classNameError,
  classNameInput,
  classNameContainerInput,
  ...rest
}: InputProps) => {
  return (
    <View className={classNameContainerInput}>
      <TextInput
        {...rest}
        className={classNameInput}
        placeholderTextColor="#000"
      />
      <Text className={classNameError}>{errorMessage}</Text>
    </View>
  );
};

export default Input;
