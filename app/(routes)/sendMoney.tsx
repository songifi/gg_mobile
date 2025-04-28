import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; // for the back arrow icon
import { router, useNavigation } from "expo-router";

export default function SendMoney() {
  const navigate = useNavigation();

  const options = [
    {
      id: 1,
      icon: require("@/assets/images/strkIcon.png"), // updated image
      title: "Send via chat",
      subtitle: "Send STRK to your chat list",
      onPress: () => {
        router.push("/(routes)/sendViaChat");
      },
    },
    {
      id: 2,
      icon: require("@/assets/images/diamond.png"),
      title: "Send NFT",
      subtitle: "Send NFTs via chat",
      onPress: () => {
        router.push("/(routes)/sendStrk");
      },
    },
    {
      id: 3,
      icon: require("@/assets/images/argent.png"),
      title: "Send to Wallet",
      subtitle: "Send to external wallet",
      onPress: () => {
        router.push("/(routes)/sendToWallet");
      },
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigate.goBack()}
          style={styles.backButton}
        >
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Send Money</Text>
        <View style={{ width: 24 }} />
      </View>
      {/* Options */}
      <View>
        {options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={styles.option}
            onPress={option.onPress}
          >
            <View style={styles.imageContainer}>
              <Image source={option.icon} style={styles.icon} />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.title}>{option.title}</Text>
              <Text style={styles.subtitle}>{option.subtitle}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  backButton: {
    padding: 4,
  },
  headerTitle: {
    flex: 1,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "600",
    color: "#000",
  },
  content: {
    paddingVertical: 16,
  },
  option: {
    flexDirection: "row",
    // alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  imageContainer: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: "#DBE1E7",
    borderRadius: 50,
    backgroundColor: "#F8F8F8",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },

  icon: {
    width: 20,
    height: 20,
    margin: "auto",
  },
  textContainer: {
    // flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
  },
});
