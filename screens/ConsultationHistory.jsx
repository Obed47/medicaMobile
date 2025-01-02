import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import HistoryCard from "./historyCard";
import axios from "axios";
import LottieView from "lottie-react-native";
import { StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
const ConsultationHistory = () => {
  const [pastConsultations, setPastConsultations] = useState([]);
  const [userId, setUserId] = useState("");
  //fetching the user id in the code below
  useEffect(() => {
    const fetchUserId = async () => {
      try {
        const identifier = await AsyncStorage.getItem("userId");
        if (identifier) {
          setUserId(JSON.parse(identifier));
        }
      } catch (error) {
        console.error("Error parsing userId:", error);
      }
    };

    fetchUserId();
  }, []);

  const fetchData = () => {
    useEffect(() => {
      axios
        .get(`http://37.60.244.227:2001/api/consultations/${userId}`)
        .then(function (response) {
          setPastConsultations(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
          console.log(userId);
        });
    }, []);
  };
  fetchData();

  return (
    <View>
      <Text
        style={{
          padding: 5,
          textAlign: "center",
          marginTop: 5,
          fontSize: 16,
        }}
      >
        We keep your data here
      </Text>
      {pastConsultations?.map((item) => (
        <HistoryCard props={item} />
      ))}
      {pastConsultations.length == 0 && (
        <View>
          <LottieView
            //lootie animation here
            source={require("../assets/Animation - 1735824771809.json")}
            autoPlay
            loop
            style={styles.animation}
          />
        </View>
      )}
      <Text style={{ textAlign: "center", fontWeight: "bold" }}>
        No Past Consultations
      </Text>
    </View>
  );
};

export default ConsultationHistory;

const styles = StyleSheet.create({
  animation: {
    width: 500,
    height: 500,
    marginVertical: "auto",
    marginHorizontal: "auto",
    marginTop: 100,
  },
});
