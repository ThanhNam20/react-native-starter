import { useColorScheme } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "@screens/home/HomeScreen";
import NotificationScreen from "@screens/notification/NotificationScreen";
import ProfileScreen from "@screens/profile/ProfileScreen";
import SearchScreen from "@screens/search/SearchScreen";
import { SCREENS } from "@shared-constants";
import { palette } from "@theme/themes";
import Icon, { IconType } from "react-native-dynamic-vector-icons";
import HomeNavigation from "./HomeNavigation";

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  const scheme = useColorScheme();
  const isDarkMode = scheme === "dark";

  const renderTabIcon = (
    route: any,
    focused: boolean,
    color: string,
    size: number,
  ) => {
    let iconName = "home";
    switch (route.name) {
      case SCREENS.HOME:
        iconName = focused ? "home" : "home-outline";
        break;
      case SCREENS.SEARCH:
        iconName = focused ? "search" : "search-outline";
        break;
      case SCREENS.NOTIFICATION:
        iconName = focused ? "notifications" : "notifications-outline";
        break;
      case SCREENS.PROFILE:
        iconName = focused ? "person" : "person-outline";
        break;
      default:
        iconName = focused ? "home" : "home-outline";
        break;
    }
    return (
      <Icon
        name={iconName}
        type={IconType.Ionicons}
        size={size}
        color={color}
      />
    );
  };

  return (
    <>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) =>
            renderTabIcon(route, focused, color, size),
          tabBarActiveTintColor: palette.primary,
          tabBarInactiveTintColor: "gray",
          tabBarStyle: {
            backgroundColor: isDarkMode ? palette.black : palette.white,
          },
        })}
      >
        <Tab.Screen name={SCREENS.HOME} component={HomeNavigation} />
        <Tab.Screen name={SCREENS.SEARCH} component={SearchScreen} />
        <Tab.Screen
          name={SCREENS.NOTIFICATION}
          component={NotificationScreen}
        />
        <Tab.Screen name={SCREENS.PROFILE} component={ProfileScreen} />
      </Tab.Navigator>
    </>
  );
};

export default BottomTabNavigation;
