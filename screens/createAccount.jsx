import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import axios from "axios";
import React from "react";
import DatePicker from "react-native-ui-datepicker";
import { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import dayjs from "dayjs";
import Feather from "@expo/vector-icons/Feather";
const CreateAccount = ({ navigation }) => {
  const [visible, setVisible] = useState(false);
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState();
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [dob, setDob] = useState(dayjs());
  const [illnesses, setIllnesses] = useState("");
  const [allergies, setAlllergies] = useState("");
  const [showDate, setShowDate] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const handleSetVisible = () => {
    setVisible(!visible);
  };
  const handleShowDate = () => {
    setShowDate(!showDate);
  };
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handlePost = () => {
    console.log(name, surname, pass);
    axios
      .post("https://httpbin.org/post", {
        first_name: name,
        last_name: surname,
        maladie_heriditaire: illnesses,
        allergies: allergies,
        date_naissance: dob,
        add_email: email,
        username: username,
        password: pass,
        password1: confirmPass,
      })
      .then((response) => {
        console.log("success sent" + response);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <ScrollView style={styles.mainPage}>
      <Text
        style={{
          textAlign: "center",
          fontSize: 24,
          fontWeight: 600,
          paddingTop: 60,
        }}
      >
        Create Account
      </Text>
      <Text style={{ textAlign: "center", padding: 10, color: "gray" }}>
        Join Medica and enjoy professional health care
      </Text>
      <View style={styles.form}>
        <TextInput
          placeholder="Enter Name"
          onChangeText={(e) => setName(e)}
          style={styles.field}
        />
        <TextInput
          placeholder="Enter Surname"
          onChangeText={(e) => setSurname(e)}
          style={styles.field}
        />
        <TextInput
          placeholder="Enter Email"
          onChangeText={(e) => setEmail(e)}
          style={styles.field}
        />
        <View style={styles.passwordContainer}>
          <TextInput
            placeholder="Enter Password"
            onChangeText={(e) => setPass(e)}
            secureTextEntry={showPassword}
            style={styles.passwordField}
          />
          <TouchableOpacity onPress={handleShowPassword}>
            <Feather
              name={showPassword ? "eye-off" : "eye"}
              size={27}
              color="gray"
              style={styles.eye}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.passwordContainer}>
          <TextInput
            placeholder="Confirm Password"
            onChangeText={(e) => setConfirmPass(e)}
            secureTextEntry={showPassword}
            style={styles.passwordField}
          />
          <TouchableOpacity onPress={handleShowPassword}>
            <Feather
              name={showPassword ? "eye-off" : "eye"}
              size={27}
              color="gray"
              style={styles.eye}
            />
          </TouchableOpacity>
        </View>
        <TextInput
          placeholder="Choose username"
          onChangeText={(e) => setUsername(e)}
          secureTextEntry={false}
          style={styles.field}
        />
        <TouchableOpacity
          style={styles.calendarButton}
          onPress={() => handleShowDate()}
        >
          <Feather name="calendar" size={24} color="gray" />
          <Text style={{ padding: 5 }}>Choose DOB</Text>
        </TouchableOpacity>
        {showDate && (
          <DatePicker
            mode="single"
            onChange={(e) => setDob(e.date)}
            date={dob}
            visible={false}
          />
        )}
        <TextInput
          placeholder="Allergies."
          onChangeText={(e) => setAlllergies(e)}
          secureTextEntry={false}
          style={styles.field}
        />
        <TextInput
          placeholder="Illnesses"
          onChangeText={(e) => setIllnesses(e)}
          secureTextEntry={false}
          style={styles.field}
        />
        <Text style={{ width: "80%", textAlign: "center" }}>
          By cliking create account you agree to our terms and conditions
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            handlePost(), navigation.navigate("homePage");
          }}
        >
          <Text style={styles.buttonText}>Create Account</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttomStyle}> </View>
    </ScrollView>
  );
};

export default CreateAccount;

const styles = StyleSheet.create({
  mainPage: {
    backgroundColor: "#DDDDFF",
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
  },
  header: {
    height: "18%",
    backgroundColor: "#B3B3FA",
    borderBottomRightRadius: 50,
  },
  headerText: {
    textAlign: "left",
    margin: "auto",
    fontSize: 24,
    paddingLeft: "20",
  },
  form: {
    alignItems: "center",
    height: "100%",
  },
  field: {
    borderWidth: 1,
    borderColor: "gray",
    width: "85%",
    height: 60,
    marginTop: 10,
    borderRadius: 10,
  },
  buttonText: {
    textAlign: "center",

    margin: "auto",
  },
  button: {
    width: "40%",
    alignSelf: "center",
    textAlign: "center",
    borderWidth: 1,
    height: 50,
    marginTop: 20,
    borderRadius: 10,
    elevation: 1,
    backgroundColor: "#B3B3FA",
    elevation: 2,
  },
  calendarButton: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    width: "40%",
    height: 50,
    marginTop: 10,
    justifyContent: "center",
    borderRadius: 5,
    borderColor: "gray",
  },
  passwordContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "gray",
    height: 65,
    marginTop: 10,
    borderRadius: 10,
  },
  passwordField: {
    width: "75%",
    height: 60,
  },
  eye: {
    marginRight: 20,
  },
});
