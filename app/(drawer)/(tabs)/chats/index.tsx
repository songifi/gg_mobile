import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { time } from "framer-motion";
import { chats } from "@/app/components/DemoData";
import { router } from "expo-router";

export default function Chats() {
  const [value, setValue] = useState("");
  return (
    <View>
      <FlatList
        data={chats}
        keyExtractor={(item, index) => index.toString()}
        ListHeaderComponent={() => (
          <>
            {/* Chat Page Header */}
            <View>
              <Text style={styles.header}>Chats</Text>
            </View>

            {/* Search Bar */}
            <View style={styles.searchView}>
              <Ionicons
                name="search"
                size={20}
                color="#ADADAD"
                style={styles.searchIcon}
              />
              {value === "" && (
                <Text style={styles.customPlaceholder}>Search...</Text>
              )}
              <TextInput
                value={value}
                onChangeText={setValue}
                style={styles.searchInput}
              />
            </View>
          </>
        )}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              flex: 1,
              flexDirection: "row",
              padding: 10,
              paddingHorizontal: 20,
              marginTop: 10,
            }}
            onPress={() =>
              router.push(
                item.id === 1 ? "/(routes)/chat" : "/(routes)/alternateChat"
              )
            }
          >
            <Image
              source={item.dp}
              style={{ width: 50, height: 50, borderRadius: 25 }}
            />
            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
              <Text>{item.message}</Text>
            </View>
            <View style={{ marginLeft: "auto" }}>
              <Text>{item.time}</Text>
              {item.readReceipt === "sent" && (
                <Ionicons
                  name="checkmark"
                  size={18}
                  color="#5A5B5C"
                  style={{ marginLeft: "auto" }}
                />
              )}
              {item.readReceipt === "delivered" && (
                <Ionicons
                  name="checkmark-done"
                  size={18}
                  color="#5A5B5C"
                  style={{ marginLeft: "auto" }}
                />
              )}
              {item.readReceipt === "read" && (
                <Ionicons
                  name="checkmark-done-sharp"
                  size={18}
                  color="#0B501E"
                  style={{ marginLeft: "auto" }}
                />
              )}
              {item.readReceipt === "unread" && (
                <Text style={styles.messageLength}>4</Text>
              )}
            </View>
          </TouchableOpacity>
        )}
      />
      {/* Add New Chat */}
      <TouchableOpacity
        style={{
          position: "absolute",
          bottom: 20,
          right: 20,
          backgroundColor: "#0B501E",
          borderRadius: 50,
          padding: 12,
        }}
        onPress={() => {}}
      >
        <Ionicons name="add" size={30} color="#ffff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 16,
    fontWeight: 500,
    textAlign: "center",
    marginTop: 20,
  },
  searchView: {
    position: "relative",
  },
  searchInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#DBE1E7",
    borderRadius: 4,
    paddingLeft: 36,
    margin: 20,
    fontSize: 16,
    color: "#000",
  },
  customPlaceholder: {
    position: "absolute",
    top: 30,
    left: 55,
    color: "#ADADAD",
    fontSize: 16,
    zIndex: 1,
  },
  searchIcon: {
    position: "absolute",
    top: 32,
    left: 30,
    zIndex: 1,
  },
  messageLength: {
    color: "#FFFFFF",
    backgroundColor: "#0B501E",
    textAlign: "center",
    borderRadius: 20,
    marginLeft: "auto",
    marginTop: "auto",
    width: 20,
    height: 20,
    fontSize: 10,
    padding: 3,
  },
});
