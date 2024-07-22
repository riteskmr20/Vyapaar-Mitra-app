import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors';
import { useRouter } from 'expo-router';

export default function BusinessListCard({business}) {

  const router=useRouter();
  return (
   
    <TouchableOpacity style={styles.container} onPress={()=>router.push('/businessDetails/'+business.id)}>
      
      <Image source={{uri:business.imageUrl}}
      style={styles.imageContainer}/>
      <View style={{flex:1,gap:8}} > 
        <Text style={{fontFamily:'outfit-bold',fontSize:18}}>{business.name}</Text>
        <Text style={{fontFamily:'outfit',color:Colors.GRAY,fontSize:15}}>{business.address}</Text>
        <View style={styles.starContainer}>

            <Image
              source={require("./../../assets/images/star.png")}
              style={styles.starImage}
            />
            <Text>{business.rating}</Text>
          </View>
      </View>
    </TouchableOpacity>

  )
}

const styles=StyleSheet.create({
    container:{
      display:'flex',
      flexDirection:'row',
      gap:10,
     padding:10,
     margin:10,
     borderRadius:15,
     backgroundColor:'#fff',
     
    },
    imageContainer:{
      width:120,
      height:120,
      borderRadius:15
    },
    starImage: {
      width: 15,
      height: 15,
    },
    starContainer: {
      display: "flex",
      flexDirection: "row",
      gap: 5,
      alignItems: "center",
      
    }
});