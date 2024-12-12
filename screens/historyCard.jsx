import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

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
          <Text>
            <Text style={{ color: "#B3B3FA", fontWeight: 800, fontSize: 17 }}>
              Date :
            </Text>{" "}
            {date.getDay()} : {date.getMonth()} : {date.getYear()}
          </Text>
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
    elevation: 2,
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
});
