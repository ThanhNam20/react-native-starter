import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Login from "@screens/login";
import Register from "@screens/register";
import { SCREENS } from "@shared-constants";
import HomeScreen from "@screens/home/HomeScreen";
import SearchScreen from "@screens/search/SearchScreen";
import ProfileScreen from "@screens/profile/ProfileScreen";
import NotificationScreen from "@screens/notification/NotificationScreen";

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator  screenOptions={{ headerShown: false }}>
      <Drawer.Screen name={SCREENS.LOGIN} component={Login} />
      <Drawer.Screen name={SCREENS.REGISTER} component={Register} />
      <Drawer.Screen name={SCREENS.HOME} component={HomeScreen} />
      <Drawer.Screen name={SCREENS.SEARCH} component={SearchScreen} />
      <Drawer.Screen name={SCREENS.PROFILE} component={ProfileScreen} />
      <Drawer.Screen
        name={SCREENS.NOTIFICATION}
        component={NotificationScreen}
      />
    </Drawer.Navigator>
  );
}



export default DrawerNavigation;
