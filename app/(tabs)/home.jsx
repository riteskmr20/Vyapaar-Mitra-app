import { View, Text, ScrollView } from "react-native";
import React from "react";
import Header from "../../components/Home/Header";
import Slider from "../../components/Home/Slider";
import Category from "../../components/Home/Category";
import BusinessList from "../../components/Home/BusinessList";

export default function home() {
  return (
    <ScrollView>
      
        {/*Header*/}
        <Header />
        {/*slider*/}
        <Slider />
        {/*category*/}
        <Category />
        {/*Popular Business List*/}
        <BusinessList />
        <View style={{marginBottom:-20}}>

        </View>
      
    </ScrollView>
  );
}
