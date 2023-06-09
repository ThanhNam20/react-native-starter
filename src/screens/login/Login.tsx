import {
  View,
  Text,
  SafeAreaView,
  Pressable,
  TextInput,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import React, { useContext } from "react";
import { SCREENS, STORAGE_KEY } from "@shared-constants";
import * as NavigationService from "react-navigation-helpers";
import { Controller, useForm } from "react-hook-form";
import Input from "@shared-components/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginSchema, loginSchema } from "utils/schema";
import { useMutation } from "@tanstack/react-query";
import { authApi } from "@services/apis/auth.api";
import { AppContext } from "contexts/app.context";
import { asyncStorage } from "utils/storage";

const Login = () => {
  const { setIsAuthenticated } = useContext(AppContext);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: yupResolver(loginSchema),
  });

  const handleSubmitButton = () => {
    NavigationService.push(SCREENS.DRAWER);
  };

  const loginMutation = useMutation({
    mutationFn: authApi.login,
  });

  const submitLogin = handleSubmit((data) => {
    loginMutation.mutate(data, {
      onSuccess(response) {
        console.log(response);
        asyncStorage.setValue(STORAGE_KEY.ACCESS_TOKEN, response.data.data.access_token)
        asyncStorage.setValue(STORAGE_KEY.PROFILE, response.data.data.user)
        setIsAuthenticated(true);
        handleSubmitButton();
      },
    });
  });

  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-slate-50">
      {loginMutation.isLoading && (
        <View>
          <ActivityIndicator />
        </View>
      )}

      <View className="p-8 w-full max-w-sm">
        <Text className="text-5xl font-bold mb-6 text-slate-900">Login</Text>
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

        <View className="flex flex-row justify-between items-center my-8">
          <View className="flex-row items-center">
            <Pressable className="bg-white border border-slate-200 h-6 w-6 rounded-sm mr-2 flex items-center justify-center">
              {/* selected state */}
              <View className="bg-green-400 w-4 h-4 rounded-sm" />
            </Pressable>
            <Text className="text-slate-900">Remember me</Text>
          </View>
          <Pressable>
            <Text className="text-blue-400 font-bold">Reset password</Text>
          </Pressable>
        </View>

        <Pressable
          onPress={submitLogin}
          className="h-12 bg-purple-500 rounded-md flex flex-row justify-center items-center px-6"
        >
          <View className="flex-1 flex items-center">
            <Text className="text-white text-base font-medium">Login</Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};
export default Login;
