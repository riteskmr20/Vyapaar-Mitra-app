import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  Linking,
} from "react-native";
import React from "react";

export default function ActionButton({ business }) {
  const actionButtonMenu = [
    {
      id: 1,
      name: "Call",
      icon: require("./../../assets/images/call.png"),
      url: "tel:" + business?.contact,
    },
    {
      id: 2,
      name: "Location",
      icon: require("./../../assets/images/pin.png"),
      url:
        "https://www.google.com/maps/search/?api=1&query=" + business?.address,
    },
    {
      id: 3,
      name: "Web",
      icon: require("./../../assets/images/web.png"),
    },
    {
      id: 4,
      name:"Share",
      icon: require("./../../assets/images/share.png"),
      
    },
  ];
  
  const onPressHandle=(item)=>{
    if(item.name=='Share'||'Web')
    {
        return;
    }
    Linking.openURL(item.url)
  }

  return (
    <View style={{ backgroundColor: "#fff", padding: 20 }}>
      <FlatList
        data={actionButtonMenu}
        numColumns={4}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        renderItem={({ item, index }) => (
          <TouchableOpacity key={index} onPress={()=>onPressHandle(item)}>
            <Image source={item?.icon} style={styles.imageStyle} />
            <Text style={styles.textStyle}>{item?.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  imageStyle: {
    width: 50,
    height: 50,
    marginLeft: 10,
  },
  textStyle: {
    fontFamily: "outfit-medium",
    textAlign: "center",
    marginTop: 3,
    marginLeft: 10,
  },
});
