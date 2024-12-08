import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import OnboardingScreen from "./onloarding";
import { NavigationContainer } from "@react-navigation/native";
import InitialInfo from "./initialInfo";
import ButtomNavigation from "./buttomNavigation";
const Navigation = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="onboarding">
        <Stack.Screen
          name="onboarding"
          component={OnboardingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="initial"
          component={InitialInfo}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="buttomNavigation"
          component={ButtomNavigation}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
