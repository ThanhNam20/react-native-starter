import React from "react";
import { useColorScheme } from "react-native";
import Icon, { IconType } from "react-native-dynamic-vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { isReadyRef, navigationRef } from "react-navigation-helpers";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
/**
 * ? Local & Shared Imports
 */
import { SCREENS } from "@shared-constants";
import { DarkTheme, LightTheme, palette } from "@theme/themes";
// ? Screens
import HomeScreen from "@screens/home/HomeScreen";
import SearchScreen from "@screens/search/SearchScreen";
import DetailScreen from "@screens/detail/DetailScreen";
import ProfileScreen from "@screens/profile/ProfileScreen";
import NotificationScreen from "@screens/notification/NotificationScreen";
import Login from "@screens/login";
import Register from "@screens/register";
import DrawerNavigation from "./DrawerNavigation";
import BottomTabNavigation from "./BottomTabNavigation";

// ? If you want to use stack or tab or both
const Stack = createStackNavigator();

const Navigation = () => {
  const scheme = useColorScheme();
  const isDarkMode = scheme === "dark";

  React.useEffect((): any => {
    return () => (isReadyRef.current = false);
  }, []);

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        isReadyRef.current = true;
      }}
      theme={isDarkMode ? DarkTheme : LightTheme}
    >
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={SCREENS.LOGIN} component={Login} />
        <Stack.Screen name={SCREENS.REGISTER} component={Register} />
        <Stack.Screen name={SCREENS.DRAWER} component={DrawerNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
