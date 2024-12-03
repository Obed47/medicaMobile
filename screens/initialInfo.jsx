import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Pressable, ScrollView, TextInput } from "react-native-gesture-handler";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
const InitialInfo = () => {
  const [allergies, setAllergies] = useState([]);
  const [illnesses, setIllnesses] = useState([]);
  const [currentIllness, setCurrentIllness] = useState("");
  const [currentAllergy, setCurrentAllergy] = useState("");
  const addAllergy = (newAllergy) => {
    setAllergies([...allergies, newAllergy]);
  };
  const addIllness = (newIllness) => {
    setIllnesses([...illnesses, newIllness]);
  };
  const deleteAllergy = (allergyName) => {
    setAllergies(allergies.filter((item) => item != allergyName));
  };
  const deleteIllness = (illnessName) => {
    setIllnesses(illnesses.filter((item) => item != illnessName));
  };
  return (
    <ScrollView>
      <View>
        <View>
          <Text style={styles.header}>Welcome to Medica</Text>
        </View>
        <View>
          <Text style={styles.headText}>
            Let us know about your health state
          </Text>
          <Text style={styles.headText}>
            This will help medica's performance
          </Text>
        </View>
        <View>
          <Text style={styles.subtitle}>Allergies</Text>
          <View style={styles.textInputContainer}>
            <TextInput
              onChangeText={(e) => setCurrentAllergy(e)}
              style={styles.textInput}
              placeholder="Add allergy:"
            />
            <Pressable
              onPress={() => addAllergy(currentAllergy)}
              style={styles.addButton}
            >
              <MaterialIcons name="add" size={30} color="black" />
            </Pressable>
          </View>

          <Text style={styles.subtitle}>Heriditary Illnesses</Text>
          <View style={styles.textInputContainer}>
            <TextInput
              onChangeText={(e) => setCurrentIllness(e)}
              style={styles.textInput}
              placeholder="Add allergy:"
            />
            <Pressable
              onPress={() => addIllness(currentIllness)}
              style={styles.addButton}
            >
              <MaterialIcons name="add" size={30} color="black" />
            </Pressable>
          </View>
        </View>
        <Text style={{ textAlign: "center", padding: "10" }}>
          Something here
        </Text>
        <View>
          <View style={styles.addedAll}>
            <View style={styles.allergies}>
              <Text style={styles.title}>Allergies</Text>
              {allergies.map((item) => {
                return (
                  <View style={styles.oneItem} key={item}>
                    <Text>{item}</Text>
                    <FontAwesome
                      onPress={() => deleteAllergy(item)}
                      name="remove"
                      size={20}
                      color="red"
                    />
                  </View>
                );
              })}
            </View>
            <View style={styles.illnesses}>
              <Text style={styles.title}>Illnesses</Text>
              {illnesses.map((item) => {
                return (
                  <View style={styles.oneItem} key={item}>
                    <Text>{item}</Text>
                    <FontAwesome
                      onPress={() => deleteIllness(item)}
                      name="remove"
                      size={20}
                      color="red"
                    />
                  </View>
                );
              })}
            </View>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text
          style={{ margin: "auto", textAlign: "center", fontWeight: "bold" }}
        >
          Proceed
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default InitialInfo;

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    paddingVertical: 30,
    textAlign: "center",
    backgroundColor: "#B3B3FA",
    fontSize: 27,
  },
  headText: {
    textAlign: "center",
    paddingVertical: 10,
    paddingHorizontal: "auto",
    textAlign: "center",
  },
  textInput: {
    height: 60,
    width: "80%",
    margin: "auto",
    borderRadius: 4,
  },
  subtitle: {
    paddingHorizontal: 50,
    paddingVertical: 10,
    color: "black",
  },
  textInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "80%",
    alignSelf: "center",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
  },
  addButton: {
    margin: 20,
    backgroundColor: "#B3B3FA",
    borderRadius: 5,
  },
  addedAll: {
    width: "90%",
    height: 450,
    borderWidth: 1,
    alignSelf: "center",
    borderColor: "gray",
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  allergies: {
    width: "45%",
    height: "95%",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
  },
  illnesses: {
    width: "45%",
    height: "95%",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
  },
  button: {
    width: "50%",
    height: 50,
    backgroundColor: "#B3B3FA",
    alignSelf: "center",
    textAlign: "center",
    fontWeight: "bold",
    borderRadius: 5,
    margin: 10,
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    paddingTop: 10,
  },
  oneItem: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    width: "90%",
    alignSelf: "center",
    margin: 5,
    borderRadius: 3,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
