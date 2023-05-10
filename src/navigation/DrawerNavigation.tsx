import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { SCREENS } from "@shared-constants";
import BottomTabNavigation from "./BottomTabNavigation";
import Login from "@screens/login";
import Register from "@screens/register";

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name={SCREENS.BOTTOM} component={BottomTabNavigation} />
      <Drawer.Screen name={SCREENS.LOGIN} component={Login} />
      <Drawer.Screen name={SCREENS.REGISTER} component={Register} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
