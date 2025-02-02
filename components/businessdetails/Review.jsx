import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
  FlatList,
  Image,
} from "react-native";
import React, { useState } from "react";
import { Rating } from "react-native-ratings";
import { Colors } from "../../constants/Colors";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "../../configs/FirebaseConfig";
import { useUser } from "@clerk/clerk-expo";

const Review = ({ business }) => {
  const [rating, setRating] = useState(4);
  const [userInput, setUserInput] = useState();
  const { user } = useUser();

  //here save the data in firebase on click submit
  const onSubmit = async () => {
    const docRef = doc(db, "CategoryList", business?.id);
    await updateDoc(docRef, {
      reviews: arrayUnion({
        rating: rating,
        comment: userInput,
        userName: user?.fullName,
        userImage: user?.imageUrl,
        userEmail: user?.primaryEmailAddress?.emailAddress,
      }),
    });

    ToastAndroid.show("Comment Added Sucsessfully !", ToastAndroid.BOTTOM);
  };

  return (
    <View style={styles.reviewContainer}>
      <Text style={styles.reviewText}>Review</Text>

      <View>
        <Rating
          showRating={false}
          onFinishRating={(rating) => setRating(rating)}
          style={{ paddingVertical: 10 }}
        />
        <TextInput
          onChangeText={(value) => setUserInput(value)}
          placeholder="Write your comment"
          numberOfLines={4}
          style={styles.text}
        />
        <TouchableOpacity
          disabled={!userInput} //if user not enter anything then it is disable
          onPress={() => onSubmit()}
          style={styles.touchButton}
        >
          <Text
            style={{ color: "#fff", fontFamily: "outfit", textAlign: "center" }}
          >
            Submit
          </Text>
        </TouchableOpacity>
      </View>

      {/*Display previous Reviews*/}
      <View>
        {business?.reviews?.map((item, index) => (
          <View style={{display:'flex',flexDirection:'row',gap:10,alignItems:'center',padding:10,      borderWidth:1,borderColor:Colors.GRAY,
            borderRadius:15,
            marginTop:10
          }}>
            <Image
              source={{ uri: item.userImage }}
              style={{ width: 50, height: 50, borderRadius: 99 }}
            />
            <View style={{display:'flex',gap:5}}>
              <Text style={{fontFamily:'outfit-medium'}}>{item.userName}</Text>
              <Rating imageSize={20} ratingCount={item.rating} 
              style={{alignItems:'flex-start'}}/>
              <Text>{item.comment}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Review;

const styles = StyleSheet.create({
  reviewContainer: {
    padding: 20,
    backgroundColor: "#fff",
  },
  reviewText: {
    fontFamily: "outfit-bold",
    fontSize: 20,
  },
  text: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderColor: Colors.GRAY,
    textAlignVertical: "top",
  },
  touchButton: {
    padding: 10,
    backgroundColor: Colors.PRIMARY,
    borderRadius: 6,
    marginTop: 10,
  },
});
