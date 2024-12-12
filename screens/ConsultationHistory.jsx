import { View, Text } from "react-native";
import React, { useState } from "react";
import HistoryCard from "./historyCard";
const ConsultationHistory = () => {
  const [pastConsultations, setPastConsultations] = useState([
    { Illness: "Backpain", medications: ["para", "ekferalgan"] },
    { Illness: "Backpain", medications: ["para", "ekferalgan", "daniella"] },
  ]);
  return (
    <View>
      <Text style={{ padding: 5, textAlign: "center", marginTop: 5 }}>
        We keep your data here
      </Text>
      {pastConsultations.map((item) => (
        <HistoryCard props={item} />
      ))}
    </View>
  );
};

export default ConsultationHistory;
