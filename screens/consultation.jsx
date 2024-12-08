import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from "react-native";
import { CheckBox } from "react-native-elements";
import React, { useState } from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
const Consultation = ({ navigation }) => {
  const [isChecked, setIsChecked] = useState(false);

  const NavigateToWebsite = () => {
    Linking.openURL("https://facebook.com");
  };
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/robot1.png")}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      <View style={styles.text}>
        <Text style={{ fontSize: 20 }}>
          Hello{" "}
          <Text style={{ color: "#0000FF", fontWeight: 600 }}>clientName</Text>{" "}
        </Text>
        <Text style={{ fontSize: 20 }}>
          Feel at home and express yourself to me. Keenly listening and taking
          note!
        </Text>
        <CheckBox
          title={"accept terms and conditions"}
          checked={isChecked}
          onPress={() => setIsChecked(!isChecked)}
          checkedColor="green"
          uncheckedColor="red"
        />
      </View>
      <TouchableOpacity
        onPress={NavigateToWebsite}
        style={isChecked ? styles.button : styles.buttonInActive}
      >
        <View style={styles.buttonContent}>
          <MaterialIcons name="admin-panel-settings" size={24} color="black" />
          <Text>Consult Now!</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Consultation;
const styles = StyleSheet.create({
  image: {
    width: "90%",
    height: "100%",
    marginHorizontal: "auto",
  },
  imageContainer: {
    height: "70%",
    marginTop: 20,
  },
  text: {
    width: "90%",
    marginHorizontal: "auto",
  },
  buttonContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: "auto",
  },
  button: {
    backgroundColor: "#B3B3FA",
    width: "60%",
    height: 60,
    marginHorizontal: "auto",
    borderRadius: 10,
    elevation: 5,
  },
  buttonInActive: {
    backgroundColor: "#E7E7FF",
    width: "50%",
    height: 60,
    marginHorizontal: "auto",
    borderRadius: 10,
    color: "gray",
  },
});
