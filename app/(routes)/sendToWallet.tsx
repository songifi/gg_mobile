import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "expo-router";

export default function SendToWallet() {
  const navigate = useNavigation();
  return (
    <View>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Entypo
            name="chevron-thin-left"
            size={24}
            color="#08090A"
            onPress={() => navigate.goBack()}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Send</Text>
        <View></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  backButton: {
    padding: 5,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: "#08090A",
  },
  chatButton: {
    padding: 5,
  },
});
