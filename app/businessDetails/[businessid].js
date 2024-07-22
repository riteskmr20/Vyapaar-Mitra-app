import { View, Text, ActivityIndicator, ScrollView,  } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { collection, doc, getDoc, query } from "firebase/firestore";
import { db } from "../../configs/FirebaseConfig";
import { Colors } from "../../constants/Colors";
import Introduction from "../../components/businessdetails/Introduction";
import ActionButton from "../../components/businessdetails/ActionButton";
import About from "../../components/businessdetails/About";

export default function businessid() {
  const { businessid } = useLocalSearchParams();
  const [businessDetails, setBusinessDetails] = useState();
  const [loading, setloading] = useState(false);
  useEffect(() => {
    GetBusinessDetailsByid();
  }, []);

  // get business Details by id
  const GetBusinessDetailsByid = async () => {
    setloading(true);
    //no need of query here because we are fetching the single documents
    const docRef = doc(db, "CategoryList", businessid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("Document found:", docSnap.data());
      setBusinessDetails(docSnap.data());
      setloading(false);
    } else {
      console.log("No such data exists");
    }
  };

  return (
    <View>
      {loading ? (
        <ActivityIndicator
          size={"large"}
          color={Colors.PRIMARY}
          style={{ marginTop: "100%" }}
        />
      ) : (
        <View>
          {/*Intro*/}
          <Introduction business={businessDetails} />

          {/*Action buttons*/}
          <ActionButton business={businessDetails}/>

          {/* About Section*/}
          <About business={businessDetails}/>

          {/*Details*/}
        </View>
      )}
    </View>
  );
}
