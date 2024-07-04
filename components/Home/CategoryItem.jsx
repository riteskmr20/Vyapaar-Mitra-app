import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

export default function CategoryItem({ category ,onCategoryPress}) {
  return (
    <TouchableOpacity onPress={()=>onCategoryPress(category)}>
      
        <View style={styles.imageCategory}>
          <Image
            source={{ uri: category.icon }}
            style={styles.imageContainer}
          />
        </View>
        <Text style={styles.categoryName}>{category.name}</Text>
      
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    width: 40,
    height: 40,
  },
  imageCategory: {
    padding: 15,
    backgroundColor: "#a187e81a",
    borderRadius: 99,
    marginRight: 15,
    alignItems: "center",
  },
  categoryName: {
    fontFamily: "outfit-medium",
    textAlign: "center",
    fontSize: 12,
    marginTop:5
    
  },
});
