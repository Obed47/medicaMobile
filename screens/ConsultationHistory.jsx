import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import HistoryCard from "./historyCard";
import axios from "axios";
import { useUserId } from "./context";
const ConsultationHistory = () => {
  const [pastConsultations, setPastConsultations] = useState([]);
  const { userid } = useUserId();
  //userid should contain the user id here
  const fetchData = () => {
    useEffect(() => {
      axios
        .get("http://192.168.23.157:8000/api/consultations?id=2")
        .then(function (response) {
          setPastConsultations(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    });
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
    </View>
  );
};

export default ConsultationHistory;
