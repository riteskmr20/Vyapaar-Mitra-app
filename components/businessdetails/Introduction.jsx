import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function Introduction({ business }) {
  const router = useRouter();
  return (
    <View>
      <View style={styles.iconConatiner}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back-circle" size={34} color="white" />
        </TouchableOpacity>

        <Ionicons name="heart-outline" size={34} color="white" />
      </View>

      <Image
        source={{ uri: business?.imageUrl }}
        style={{ width: "100%", height: 340 }}
      />

      <View style={styles.businessDetails}>
        <Text style={styles.name}>{business?.name}</Text>
        <Text style={styles.address}>{business?.address}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  iconConatiner: {
    position: "absolute",
    zIndex: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    padding: 20,
    marginTop: 10,
  },
  businessDetails:{
    padding:20,
    marginTop:-20,
    backgroundColor:'#fff',
    borderTopLeftRadius:25,
    borderTopRightRadius:25
  },
  name:{
    fontFamily:'outfit-bold',
    fontSize:26,

  },
  address:{
    fontFamily:'outfit'

  }


});
