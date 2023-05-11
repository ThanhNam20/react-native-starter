import { View, Text, Pressable, SafeAreaView, TextInput } from "react-native";
import React from "react";
import { RegisterSchema, registerSchema } from "utils/schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import Input from "@shared-components/Input";
import { useMutation } from "@tanstack/react-query";

const Register = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<RegisterSchema>({
    resolver: yupResolver(registerSchema),
  });

  const submitRegister = handleSubmit((data) => {

    console.log(data);
  });

  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-slate-50">
      <View className="p-8 w-full max-w-sm">
        <Text className="text-5xl font-bold mb-6 text-slate-900">Register</Text>

        <Controller
          control={control}
          name="fname"
          render={({ field }) => (
            <Input
              classNameInput="w-full bg-white border border-slate-200 rounded-md h-12 px-2"
              errorMessage={errors.fname?.message}
              classNameError="text-red-500"
              placeholder="First Name"
              value={field.value}
              onChangeText={field.onChange}
            />
          )}
        />

        <Controller
          control={control}
          name="lname"
          render={({ field }) => (
            <Input
              classNameInput="w-full bg-white border border-slate-200 rounded-md h-12 px-2"
              errorMessage={errors.lname?.message}
              classNameError="text-red-500"
              placeholder="Last Name"
              value={field.value}
              onChangeText={field.onChange}
            />
          )}
        />

        <Controller
          control={control}
          name="email"
          render={({ field }) => (
            <Input
              classNameInput="w-full bg-white border border-slate-200 rounded-md h-12 px-2"
              errorMessage={errors.email?.message}
              classNameError="text-red-500"
              placeholder="Enter email address"
              value={field.value}
              onChangeText={field.onChange}
            />
          )}
        />

        <Controller
          control={control}
          name="password"
          render={({ field }) => (
            <Input
              secureTextEntry={true}
              classNameError="text-red-500"
              classNameInput="w-full bg-white border border-slate-200 rounded-md h-12 px-2"
              errorMessage={errors.password?.message}
              placeholder="Enter password"
              value={field.value}
              onChangeText={field.onChange}
            />
          )}
        />

        <Controller
          control={control}
          name="confirm_password"
          render={({ field }) => (
            <Input
              secureTextEntry={true}
              classNameError="text-red-500"
              classNameInput="w-full bg-white border border-slate-200 rounded-md h-12 px-2"
              errorMessage={errors.confirm_password?.message}
              placeholder="Confirm password"
              value={field.value}
              onChangeText={field.onChange}
            />
          )}
        />

        <View className="flex flex-row justify-between items-center my-8">
          <View className="flex-row items-center">
            <Pressable className="bg-white border border-slate-200 h-6 w-6 rounded-sm mr-2 flex items-center justify-center">
              <View className="bg-green-400 w-4 h-4 rounded-sm" />
            </Pressable>
            <Text className="text-slate-900">Remember me</Text>
          </View>
          <Pressable>
            <Text className="text-blue-400 font-bold">Reset password</Text>
          </Pressable>
        </View>

        <Pressable
          onPress={submitRegister}
          className="h-12 bg-purple-500 rounded-md flex flex-row justify-center items-center px-6"
        >
          <View className="flex-1 flex items-center">
            <Text className="text-white text-base font-medium">Register</Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Register;
