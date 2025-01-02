import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import AntDesign from "@expo/vector-icons/AntDesign";
import { BackHandler } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Ionicons from "@expo/vector-icons/Ionicons";
const Profile = () => {
  const alertMessage = () => {
    alert("alert");
    const [userId, setUserId] = useState("");
    const [userProfile, setUserProfile] = useState({});
    useEffect(() => {
      const fetchUserId = async () => {
        const user = AsyncStorage.getItem("userId");
        await setUserId(JSON.parse(user));
      };
    });
  };
  return (
    <ScrollView>
      <TouchableOpacity style={styles.editButton} onPress={alertMessage}>
        <AntDesign
          name="edit"
          size={25}
          color="#black"
          style={{ padding: 10 }}
        />
      </TouchableOpacity>

      <View>
        <Image
          style={styles.profileImage}
          source={require("../assets/robot.png")}
        />
        <View>
          <Text style={styles.credentials}>Daniel Decks</Text>
        </View>
      </View>
      <View style={styles.box}>
        <Text style={styles.innnerText}>Name: Daniel Ecircks</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.innnerText}>Email : danielericks4@gmail.com</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.innnerText}>Password : ...................</Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <AntDesign name="delete" size={23} color="red" />
        <Text style={{ color: "red" }}> Delete Account!</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.exitButton}
        onPress={() => BackHandler.exitApp()}
      >
        <Ionicons name="exit-outline" size={24} color="black" />
        <Text>Exit app</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  profileImage: {
    width: 200,
    height: 200,
    marginHorizontal: "auto",
    marginTop: 60,
    backgroundColor: "blue",
    borderRadius: 100,
    borderWidth: 5,
    borderColor: "#B3B3FA",
  },
  box: {
    borderWidth: 1,
    width: "90%",
    marginHorizontal: "auto",
    height: 50,
    borderColor: "gray",
    borderRadius: 10,
    margin: 10,
  },
  innnerText: {
    margin: 13,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: 200,
    margin: "auto",
    height: 60,
    borderRadius: 10,
    color: "red",
  },
  editButton: {
    flexDirection: "row",
    alignItems: "right",
    justifyContent: "flex-end",
  },
  credentials: {
    textAlign: "center",
    fontSize: 24,
    padding: "10",
    fontWeight: "bold",
  },
  exitButton: {
    elevation: 1,
    width: "40%",
    margin: "auto",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
