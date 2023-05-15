import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useContext } from "react";
import { useColorScheme } from "react-native";
import { isReadyRef, navigationRef } from "react-navigation-helpers";
/**
 * ? Local & Shared Imports
 */
import { SCREENS } from "@shared-constants";
import { DarkTheme, LightTheme } from "@theme/themes";
// ? Screens
import Login from "@screens/login";
import Register from "@screens/register";
import DrawerNavigation from "./DrawerNavigation";
import { AppContext } from "contexts/app.context";
import { asyncStorage } from "utils/storage";

// ? If you want to use stack or tab or both
const Stack = createStackNavigator();

const Navigation = () => {
  const { isAuthenticated } = useContext(AppContext);
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
        {isAuthenticated ? (
          <Stack.Group>
            <Stack.Screen name={SCREENS.DRAWER} component={DrawerNavigation} />
          </Stack.Group>
        ) : (
          <Stack.Group screenOptions={{ headerShown: false }}>
            <Stack.Screen name={SCREENS.LOGIN} component={Login} />
            <Stack.Screen name={SCREENS.REGISTER} component={Register} />
          </Stack.Group>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
