import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { Colors } from "../../constants/Colors";

export default function BusinessCard({ business }) {
  return (
    <View style={styles.businessContainer}>
      <Image
        source={{ uri: business?.imageUrl }}
        style={styles.businessImage}
      />
      <View style={{ marginTop: 7 }}>
        <Text style={styles.businessText}>{business.name}</Text>
        <Text style={styles.businessAddress}>{business.address}</Text>
        <View style={styles.businessInfo}>
          <View style={styles.starContainer}>
            <Image
              source={require("./../../assets/images/star.png")}
              style={styles.starImage}
            />
            <Text>{business.rating}</Text>
          </View>
          <Text style={styles.businessCategory}>{business.category}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  businessContainer: {
    marginLeft: 20,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 15,
    marginBottom: 30,
  },
  businessImage: {
    width: 200,
    height: 130,
    borderRadius: 5,
  },
  businessText: {
    fontFamily: "outfit-bold",
    fontSize: 15,
    
  },
  businessAddress: {
    color: Colors.GRAY, 
    flexWrap:'wrap'
  },
  starImage: {
    width: 15,
    height: 15,
  },
  starContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
    
  },
  businessCategory: {
    fontFamily: "outfit",
    backgroundColor: Colors.PRIMARY,
    color: "#fff",
    borderRadius: 10,
    padding: 3,
    fontSize: 12,
  },
  businessInfo: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop:4
  },
});
