import { StyleSheet, Text, TouchableOpacity, View, Button } from "react-native";
import React, { useState } from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
const HistoryCard = ({ props }) => {
  const date = new Date();
  return (
    <TouchableOpacity>
      <View style={styles.cardMain}>
        <View style={styles.content}>
          <Text>
            <Text style={{ color: "#B3B3FA", fontWeight: 800, fontSize: 17 }}>
              Illness :
            </Text>
            {props.Illness}
          </Text>

          <View style={styles.remedies}>
            <Text style={{ color: "#B3B3FA", fontWeight: 800, fontSize: 17 }}>
              Proposed Medication:
            </Text>
            {props.medications.map((medication) => (
              <Text key={medication}> {medication}, </Text>
            ))}
          </View>
          <View style={styles.date}>
            <MaterialIcons name="date-range" size={24} color="black" />
            <Text>
              {date.getDay()} : {date.getMonth()} : {date.getYear()}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default HistoryCard;

const styles = StyleSheet.create({
  cardMain: {
    width: "90%",
    height: 100,
    elevation: 1,
    marginHorizontal: "auto",
    marginTop: 15,
    borderRadius: 10,
  },
  content: {
    marginVertical: "auto",
    paddingHorizontal: 20,
  },
  remedies: {
    flexDirection: "row",
  },
  date: {
    flexDirection: "row",
    width: "60%",
    alignItems: "center",
    paddingTop: 5,
  },
});
