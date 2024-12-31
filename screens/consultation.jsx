import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from "react-native";
import AwesomeAlert from "react-native-awesome-alerts";
import { CheckBox } from "react-native-elements";
import React, { useState } from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
const Consultation = ({ navigation }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const handleIsChecked = () => {
    setIsChecked(!isChecked);
  };
  const handleShowAlert = () => {
    setShowAlert(!showAlert);
  };
  const NavigateToWebsite = () => {
    //enter bot link here
    Linking.openURL("https://example.com");
  };
  return (
    <View style={styles.container}>
      <AwesomeAlert
        show={showAlert}
        message="Please accept the terms and conditions first"
        cancelText="Alright"
        showCancelButton={true}
        onCancelPressed={() => setShowAlert(false)}
      />
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/robot1.png")}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      <View style={styles.text}>
        <Text style={{ fontSize: 20 }}>
          Hello
          <Text style={{ color: "#0000FF", fontWeight: 600 }}> clientName</Text>
        </Text>
        <Text style={{ fontSize: 17 }}>
          Feel at home and express yourself to me. Keenly listening and taking
          note!
        </Text>
        <CheckBox
          title={"Accept terms and conditions"}
          checked={isChecked}
          onPress={handleIsChecked}
          checkedColor="blue"
          uncheckedColor="#578fff"
        />
      </View>
      <TouchableOpacity
        onPress={isChecked ? NavigateToWebsite : handleShowAlert}
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
