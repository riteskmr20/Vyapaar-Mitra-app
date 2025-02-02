import { View, Text, Image, StyleSheet, TextInput } from "react-native";
import React from "react";
import { useUser } from "@clerk/clerk-expo";
import { Colors } from "../../constants/Colors";
import { Ionicons } from '@expo/vector-icons';


export default function Header() {
  const { user } = useUser();
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image source={{ uri: user?.imageUrl }} style={styles.userInfo} />
        <View>
          <Text style={{ color: "#fff" }}>Welcome,</Text>
          <Text style={styles.nameText}>{user?.fullName}</Text>
        </View>
        
      </View>
      <View style={styles.searchContainer}>
            {/*Search bar*/}
            <Ionicons name="search" size={24} color={Colors.PRIMARY} />
            <TextInput placeholder="Search..." style={{fontFamily:'outfit',fontSize:15}}/>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 40,
    backgroundColor: Colors.PRIMARY,
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20,
  },
  imgContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  nameText: {
    fontSize: 19,
    fontFamily: "outfit-medium",
    color: "#fff",
  },
  userInfo: {
    width: 45,
    height: 45,
    borderRadius: 99,
  },
  searchContainer:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:'#fff',
    padding:10,
    marginVertical:10,
    marginTop:15,
    borderRadius:8,
    gap:10
  }
});
