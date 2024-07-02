import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "./../../configs/FirebaseConfig";

export default function Slider() {
  const [sliderList, setsliderList] = useState([]);

  useEffect(() => {
    GetSliderList();
  }, []);

  const GetSliderList = async () => {
    setsliderList([]);
    try {
      const q = query(collection(db, "Slider"));
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        console.log(doc.data());
        setsliderList((prev) => [...prev, doc.data()]);
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View>
      <Text style={styles.text}>#Special for you</Text>
      <FlatList
        data={sliderList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{ paddingLeft: 20 }}
        renderItem={({ item, index }) => (
          <Image
            source={{ uri: item.imageUrl }}
            style={styles.imageContainer}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "outfit-bold",
    fontSize: 20,
    
    paddingLeft:20,
    paddingTop:20,
    marginBottom:5
  },
  imageContainer: {
    width: 300,
    height: 150,
    borderRadius: 15,
    marginRight: 15,
  },
});
