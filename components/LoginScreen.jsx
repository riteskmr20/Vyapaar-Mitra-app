import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import * as WebBrowser from "expo-web-browser";
import { useWarmUpBrowser } from "./SignInWithOAuth";
import { useOAuth } from "@clerk/clerk-expo";
import * as Linking from "expo-linking"

WebBrowser.maybeCompleteAuthSession();
export default function LoginScreen() {
  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow({ redirectUrl: Linking.createURL("/dashboard", { scheme: "myapp" })});

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);

  return (
    <View>
      <View style={styles.loginImage}>
        <Image
          source={require("./../assets/images/login.png")}
          style={{
            width: 260,
            height: 450,
            borderRadius: 20,
            borderWidth: 6,
            borderColor: "#000",
          }}
        />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.businessText}>
          Your Ultimate
          <Text style={{ color: Colors.PRIMARY }}> Vyapaar Mitra </Text>
          <Text>App</Text>
        </Text>
        <Text style={styles.vyaparText}>
          Find your favourite business near you and post your own business to
          your community
        </Text>
      </View>
      <TouchableOpacity style={styles.loginButton}
      onPress={onPress}>
        <Ionicons
          name="logo-google"
          size={24}
          color="#fff"
          style={styles.icon}
        />
        <Text style={styles.loginText}>Sign In with Google</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  loginImage: {
    display: "flex",
    alignItems: "center",
    marginTop: 100,
  },
  textContainer: {
    backgroundColor: "#fff",
    padding: 20,
    marginTop: -20,
  },
  businessText: {
    fontSize: 30,
    fontFamily: "outfit-bold",
    textAlign: "center",
  },
  vyaparText: {
    fontSize: 15,
    fontFamily: "outfit",
    textAlign: "center",
    marginTop:5,
    color: Colors.GRAY,
  },
  loginButton: {
    backgroundColor: Colors.PRIMARY,
    padding: 10,
    margin: 30,
    borderRadius: 99,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  loginText: {
    textAlign: "center",
    color: "#fff",
    fontFamily: "outfit",
  },
  icon: {
    marginRight: 10,
    color: "#fff",
  },
});
