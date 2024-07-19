import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { Colors } from "./../../constants/Colors";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../../configs/FirebaseConfig";
import CategoryItem from "./CategoryItem";
import { useRouter } from "expo-router";

export default function Category() {
  const [categoryList, setCategoryList] = useState([]);
  const router=useRouter();

  useEffect(() => {
    GetCategoryList();
  }, []);

  const GetCategoryList = async () => {
    setCategoryList([]);
    try {
      const q = query(collection(db, "Category"));
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        console.log(doc.data());
        setCategoryList((prev) => [...prev, doc.data()]);
      });
    } catch (err) {
      console.log(err);
    }
  };



  return (
    <View>
      <View style={styles.textContainer}>
        <Text style={styles.categoryText}>Category</Text>
        <Text style={styles.viewText} >View All</Text>
      </View>

      <FlatList
        data={categoryList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{marginLeft:20}}
        renderItem={({ item, index }) => 
           (
            <CategoryItem category={item} key={index}
              onCategoryPress={(category)=>router.push('/businesslist/'+item.name )}/>
           )
          
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  categoryText: {
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
