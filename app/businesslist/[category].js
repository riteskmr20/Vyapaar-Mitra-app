import { View, Text, FlatList, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { collection, doc, getDocs, query, where } from "firebase/firestore";
import { db } from "../../configs/FirebaseConfig";
import BusinessListCard from "../../components/BusinessList/BusinessListCard";
import { Colors } from "../../constants/Colors";

export default function BusinessListbyCategory() {
  const navigation = useNavigation();
  const { category } = useLocalSearchParams(); //this name should be same as the file name.

  const [businessList, setBusinessList] = useState([]);
  const [loading,setloading]=useState(false);

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
    setloading(true);//set the loading indicator true
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
    setloading(false);//after the data is load indicator is false
  };
  return (
    <View>
      {businessList?.length > 0 &&loading==false? (
        <FlatList
        onRefresh={getBusinessList}//when ever the user pull the screen the refresh is occur 
        refreshing={loading}
          data={businessList}
          renderItem={({ item, index }) => (
            <BusinessListCard business={item} key={index} />
          )}
        />
      ) :
      loading?<ActivityIndicator  //if loading is true then activity indicator is showing
      size={'large'}
      color={Colors.PRIMARY}
      style={{marginTop:'70%'}}/>: (
        <Text>No Business Found</Text>
      )}
    </View>
  );
}
