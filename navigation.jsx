import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import OnboardingScreen from "./screens/onloarding";
import { NavigationContainer } from "@react-navigation/native";
const Navigation = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="onboarding">
        <Stack.Screen name="onboarding" component={OnboardingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
