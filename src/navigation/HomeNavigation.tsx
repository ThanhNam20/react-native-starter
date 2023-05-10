import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { SCREENS } from "@shared-constants";
import HomeScreen from "@screens/home/HomeScreen";
import DetailScreen from "@screens/detail/DetailScreen";

const Stack = createStackNavigator();

const HomeNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={SCREENS.HOME}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name={SCREENS.HOME} component={HomeScreen} />
      <Stack.Screen name={SCREENS.DETAIL}>
          {(props) => <DetailScreen {...props} />}
        </Stack.Screen>
    </Stack.Navigator>
  );
};

export default HomeNavigation;
