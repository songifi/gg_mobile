import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { Image } from "react-native";
import { router, useNavigation } from "expo-router";
import { chatMessages } from "@/app/components/DemoData";
import ChatBox from "../components/chatBox";

export default function chat() {
  const navigation = useNavigation();
  const [messages, setMessages] = useState(chatMessages);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        {/* Back Button */}
        <TouchableOpacity>
          <Entypo
            name="chevron-thin-left"
            size={24}
            color="#08090A"
            onPress={() => navigation.goBack()}
          />
        </TouchableOpacity>

        {/* Header Title and Avatar */}
        <View style={styles.headerCenter}>
          <Image
            source={require("@/assets/images/nft-7.png")} // replace with your avatar URL
            style={styles.avatar}
          />
          <TouchableOpacity style={styles.user}>
            <Text style={styles.username}>theXaxxo Outlook</Text>
            <Entypo
              name="chevron-thin-right"
              size={12}
              color="#5A5B5C"
              onPress={() => navigation.goBack()}
            />
          </TouchableOpacity>
        </View>

        {/* Ellipsis Icon */}
        <TouchableOpacity>
          <Ionicons name="ellipsis-vertical" size={24} color="#08090A" />
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.messages}>
        {/* Time */}
        <Text
          style={{
            textAlign: "center",
            color: "#5A5B5C",
            fontSize: 12,
            // marginTop: 24,
            marginVertical: 20,
          }}
        >
          Today 16:23
        </Text>
        {messages.map((message: any) => (
          <View>
            <View
              key={message.id}
              style={[
                styles.messageContainer,
                message.sender === "me"
                  ? styles.myMessage
                  : styles.otherMessage,
              ]}
            >
              <Text style={styles.messageText}>{message.text}</Text>
            </View>
            <View>
              {message.sender === "me"
                ? message.time && (
                    <Text style={styles.mytimeText}>
                      Delivered {message.time}
                    </Text>
                  )
                : message.time && (
                    <Text style={styles.othertimeText}>
                      Read {message.time}
                    </Text>
                  )}
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Input Box */}
      <ChatBox />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    // marginTop: 13,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 13,
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#DBE1E7",
    backgroundColor: "#F7F8F9",
  },
  headerCenter: {
    flex: 1,
    alignItems: "center",
    marginTop: 20,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 18,
    marginRight: 10,
  },
  user: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 3,
  },
  username: {
    fontSize: 12,
    color: "#5A5B5C",
  },
  messages: {
    padding: 10,
  },
  messageContainer: {
    marginVertical: 18,
    padding: 10,
    borderRadius: 10,
    maxWidth: "80%",
  },
  myMessage: {
    alignSelf: "flex-end",
    backgroundColor: "#DFECE2",
    fontSize: 12,
  },
  otherMessage: {
    alignSelf: "flex-start",
    backgroundColor: "#E9E9EB",
    fontSize: 12,
  },
  messageText: {
    fontSize: 16,
  },
  mytimeText: {
    fontSize: 10,
    color: "#5A5B5C",
    // marginTop: 4,
    textAlign: "right",
  },
  othertimeText: {
    fontSize: 10,
    color: "#5A5B5C",
    // marginTop: 4,
    textAlign: "left",
  },

  sendText: {
    fontSize: 20,
  },
});
