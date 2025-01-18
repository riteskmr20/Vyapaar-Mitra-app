import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function About({ business }) {
  return (
    <View style={styles.aboutContainer}>
      <Text style={styles.aboutText}>About</Text>
      <Text style={styles.aboutDetail}>{business?.about}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  aboutContainer: {
    padding: 20,
    backgroundColor: "#fff",
   
  },
  aboutText: {
    fontFamily: "outfit-bold",
    fontSize: 20,
  },
  aboutDetail: {
    fontFamily: "outfit",
    padding: 2,
    lineHeight: 25,
  },
});
