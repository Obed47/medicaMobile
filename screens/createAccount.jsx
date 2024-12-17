import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
const CreateAccount = ({ navigation }) => {
  const [visible, setVisible] = useState(false);
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState();
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [dob, setDob] = useState("");
  const handleSetVisible = () => {
    setVisible(!visible);
  };

  const handlePost = () => {
    console.log(name, surname, pass);
    axios
      .post("https://httpbin.org/post", {
        first_name: name,
        last_name: surname,
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
    <ScrollView>
      <View style={styles.header}>
        <Text style={styles.headerText}>Welcome to Medica</Text>
      </View>
      <Text
        style={{
          textAlign: "center",
          fontSize: 19,
          fontWeight: 600,
          padding: 10,
        }}
      >
        Create Account
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
          placeholder="Enter DOB"
          onChangeText={(e) => setDob(e)}
          style={styles.field}
        />
        <TextInput
          placeholder="Enter Email"
          onChangeText={(e) => setEmail(e)}
          style={styles.field}
        />
        <TextInput
          placeholder="Enter Password"
          onChangeText={(e) => setPass(e)}
          secureTextEntry={true}
          style={styles.field}
        />
        <TextInput
          placeholder="Confirm Password"
          onChangeText={(e) => setConfirmPass(e)}
          secureTextEntry={true}
          style={styles.field}
        />
        <TextInput
          placeholder="Choose username"
          onChangeText={(e) => setUsername(e)}
          secureTextEntry={true}
          style={styles.field}
        />
        <TouchableOpacity style={styles.button} onPress={() => handlePost()}>
          <Text style={styles.buttonText}>Create Account</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default CreateAccount;

const styles = StyleSheet.create({
  header: {
    height: "15%",
    backgroundColor: "#B3B3FA",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  headerText: {
    textAlign: "center",
    margin: "auto",
    fontSize: 26,
  },
  form: {
    alignItems: "center",
    height: "100%",
  },
  field: {
    borderWidth: 1,
    borderColor: "gray",
    width: "80%",
    height: 60,
    marginTop: 10,
    borderRadius: 5,
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
    marginTop: 30,
    borderRadius: 10,
    elevation: 1,
  },
});
