import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Onboarding from "react-native-onboarding-swiper";
const OnboardingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Onboarding
        //the following code permits navigation to the initial path when the onboading is done
        onDone={() => navigation.navigate("buttomNavigation")}
        pages={[
          //page 1
          {
            backgroundColor: "#B3B3FA",
            image: (
              <Image
                style={styles.image}
                source={require("../assets/robot.png")}
              />
            ),
            title: <Text style={styles.mainText}>Welcome To Medica</Text>,
            subtitle: (
              <Text style={styles.subtext}>
                You may not have to meet a doctor again
              </Text>
            ),
          },
          //page 2
          {
            backgroundColor: "#B3B3FA",
            image: (
              <Image
                style={styles.image}
                source={require("../assets/sick.png")}
              />
            ),
            title: <Text style={styles.mainText}>Consult</Text>,
            subtitle: (
              <Text style={styles.subtext}>
                Talk to medica and get consulted
              </Text>
            ),
          },
          //page 3
          {
            backgroundColor: "#B3B3FA",
            image: (
              <Image
                style={styles.image}
                source={require("../assets/presciption.png")}
              />
            ),
            title: (
              <Text style={styles.mainText}>Get Medical Prescription</Text>
            ),
            subtitle: (
              <Text style={styles.subtext}>
                Medica will prescribe medications
              </Text>
            ),
          },
          //page 3
          {
            backgroundColor: "#B3B3FA",
            image: (
              <Image
                style={styles.image}
                source={require("../assets/pharma.png")}
              />
            ),
            title: (
              <Text style={styles.mainText}>Visit Pharmacy and get well</Text>
            ),
            subtitle: (
              <Text style={styles.subtext}>Visit a pharmacy and get well</Text>
            ),
          },
        ]}
      />
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "#B3B3FA",
  },
  image: {
    width: 180,
    height: 200,
  },
  mainText: {
    fontSize: 28,
    fontWeight: "bold",
  },
  subtext: {
    fontSize: 18,
  },
});
