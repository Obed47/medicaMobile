import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import OnboardingScreen from "./screens/onboarding";
import Navigation from "./screens/navigation";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { UserIdProvider } from "./screens/context";
export default function App() {
  return (
    <UserIdProvider>
      <GestureHandlerRootView>
        <Navigation />
      </GestureHandlerRootView>
    </UserIdProvider>

    // the above themeProvider is meant to provide the context to the entire app
    //this is mean for the user id
  );
}

const styles = StyleSheet.create({});
