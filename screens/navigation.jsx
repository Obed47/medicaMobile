import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import OnboardingScreen from "./onboarding";
import { NavigationContainer } from "@react-navigation/native";
import InitialInfo from "./initialInfo";
import Homepage from "./homePage";
import CreateAccount from "./createAccount";
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
          name="homePage"
          component={Homepage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="createAccount"
          component={CreateAccount}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
