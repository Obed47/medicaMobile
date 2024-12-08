import { View, Text } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Consultation from "./consultation";
import ConsultationHistory from "./ConsultationHistory";
import Profile from "./Profile";
const Tab = createBottomTabNavigator();

const ButtomNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "red",
        tabBarInactiveTintColor: "black",
      }}
    >
      <Tab.Screen
        name="Consult"
        component={Consultation}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <FontAwesome5
              name={focused ? "hospital-symbol" : "hospital-symbol"}
              size={24}
              color={focused ? "red" : "black"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Past consultations"
        component={ConsultationHistory}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <FontAwesome5
              name={focused ? "history" : "history"}
              size={24}
              color={focused ? "red" : "black"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons
              name={focused ? "face-man-profile" : "face-man-profile"}
              size={24}
              color={focused ? "red" : "black"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default ButtomNavigation;
