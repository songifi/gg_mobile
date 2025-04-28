import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { chats } from "@/app/components/DemoData";
import { router } from "expo-router";
import { SearchBar } from "@/app/components/searchBar";

export default function Chats() {
  const [value, setValue] = useState("");

  return (
    <View>
      <FlatList
        style={{ backgroundColor: "#fff" }}
        data={chats}
        keyExtractor={(item, index) => index.toString()}
        ListHeaderComponent={() => (
          <>
            {/* Chat Page Header */}
            <View>
              <Text style={styles.header}>Chats</Text>
            </View>

            {/* Search Bar */}
            <View style={{ marginVertical: 20 }}>
              <SearchBar value={value} onChangeText={setValue} />
            </View>
          </>
        )}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              flex: 1,
              flexDirection: "row",
              paddingVertical: 6,
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
              <Text style={{ fontWeight: 500 }}>{item.name}</Text>
              <Text style={{ fontSize: 10, color: "#5A5B5C" }}>
                {item.message}
              </Text>
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
