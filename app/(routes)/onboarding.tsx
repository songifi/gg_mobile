import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";

export default function Onboarding() {
  const handleSubmit = async () => {
    await AsyncStorage.setItem("loggedIn", "true");
    router.push("/(drawer)");
  };
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text onPress={() => handleSubmit()}>Login</Text>
    </View>
  );
}

const styles = StyleSheet.create({});