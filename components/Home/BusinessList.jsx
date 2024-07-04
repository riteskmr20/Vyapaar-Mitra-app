import { View, Text, StyleSheet, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { collection, getDocs, limit, query } from "firebase/firestore";
import { db } from "../../configs/FirebaseConfig";
import { Colors } from "../../constants/Colors";
import BusinessCard from "./BusinessCard";

export default function BusinessList() {
  const [businessList, setBusinessList] = useState([]);

  useEffect(() => {
    GetBusinessList();
  },[]);

  const GetBusinessList = async () => {
    setBusinessList([]);

    const q = query(collection(db, "BusinessList"), limit(10));
    const querySelect = await getDocs(q);

    querySelect.forEach((doc) => {
      console.log(doc.data());
      setBusinessList((prev) => [...prev, doc.data()]);
    });
  };

  return (
    <View>
      <View style={styles.textContainer}>
        <Text style={styles.businessText}>Popular Business</Text>
        <Text style={styles.viewText} >View All</Text>
      </View>

      <FlatList
        data={businessList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => ( 
        <BusinessCard business={item} key={index}/>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  businessText: {
    fontSize: 20,
    fontFamily: "outfit-bold",
  },
  textContainer: {
    padding: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  viewText: {
    color: Colors.PRIMARY,
    fontFamily: "outfit-medium",
  },
});
