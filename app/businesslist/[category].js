import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { collection, doc, getDocs, query, where } from "firebase/firestore";
import { db } from "../../configs/FirebaseConfig";
import BusinessListCard from "../../components/BusinessList/BusinessListCard";

export default function BusinessListbyCategory() {
  const navigation = useNavigation();
  const { category } = useLocalSearchParams(); //this name should be same as the file name.

  const [businessList, setBusinessList] = useState([]);

  useEffect(() => {
    //when ever the component get load
    navigation.setOptions({
      headerShown: true,
      //if want to change the header title name
      headerTitle: category,
    });
    getBusinessList();
  }, []);

  /*
   get business list by category
  */

  const getBusinessList = async () => {
    setBusinessList([]);
    const q = query(
      collection(db, "CategoryList"),
      where("category", "==", category)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
      setBusinessList((prev) => [...prev, doc.data()]);
    });
  };
  return (
    <View>
      {businessList?.length > 0 ? (
        <FlatList
          data={businessList}
          renderItem={({ item, index }) => (
            <BusinessListCard business={item} key={index} />
          )}
        />
      ) : (
        <Text>No Business Found</Text>
      )}
    </View>
  );
}
