import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import OnboardingScreen from "./screens/onloarding";
import Navigation from "./navigation";
export default function App() {
  return (
    <View>
      <Navigation />
    </View>
  );
}

const styles = StyleSheet.create({});
