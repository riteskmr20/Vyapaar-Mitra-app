import React from "react";
import * as WebBrowser from "expo-web-browser";
import { Text, View, Button } from "react-native";
import { Link } from "expo-router";
import { useOAuth } from "@clerk/clerk-expo";


export const useWarmUpBrowser = () => {
  React.useEffect(() => {
    // Warm up the android browser to improve UX
    // https://docs.expo.dev/guides/authentication/#improving-user-experience
    void WebBrowser.warmUpAsync();
    return () => {
      void WebBrowser.coolDownAsync();
    };
  }, []);
};
