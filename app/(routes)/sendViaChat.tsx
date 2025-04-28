import React from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { FontAwesome6, Ionicons } from "@expo/vector-icons"; // for back arrow
import { useNavigation } from "@react-navigation/native";
import { Search } from "lucide-react";
import { SearchBar } from "../components/searchBar";

const frequentContacts = [
  { id: "1", name: "Alexis", image: require("@/assets/images/alexis.png") },
  //   { id: "2", name: "Ralph", image: require("../assets/ralph.png") },
  { id: "3", name: "Victor", image: require("@/assets/images/victor.png") },
  { id: "4", name: "Anna", image: require("@/assets/images/anna.png") },
  { id: "5", name: "Jakub", image: require("@/assets/images/jakub.png") },
];

const allContacts = [
  {
    id: "1",
    name: "thetimileyin",
    message: "GM serrrr",
    image: require("@/assets/images/chipmunk.png"),
  },
  {
    id: "2",
    name: "thetimileyin",
    message: "GM serrrr",
    image: require("@/assets/images/nft-7.png"),
  },
  {
    id: "3",
    name: "thetimileyin",
    message: "GM serrrr",
    image: require("@/assets/images/nft-1.png"),
  },
  {
    id: "4",
    name: "thetimileyin",
    message: "GM serrrr",
    image: require("@/assets/images/nft-9.png"),
  },
  {
    id: "5",
    name: "thetimileyin",
    message: "GM serrrr",
    image: require("@/assets/images/nft-5.png"),
  },
  {
    id: "6",
    name: "thetimileyin",
    message: "Attachment: 2 NFTs",
    image: require("@/assets/images/nft-6.png"),
  },
  {
    id: "7",
    name: "thetimileyin",
    message: "Attachment: STRK",
    image: require("@/assets/images/nft-7.png"),
  },
];

const SendViaChat = () => {
  const navigation = useNavigation();
  const [value, setValue] = React.useState<string>("");

  return (
    <View style={{ flex: 1, backgroundColor: "#fff", paddingTop: 50 }}>
      {/* Header */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 16,
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-outline" size={24} color="black" />
        </TouchableOpacity>
        <Text style={{ fontSize: 16, fontWeight: "600" }}>Send via Chat</Text>
        <TouchableOpacity>
          <FontAwesome6 name="user-plus" size={19} color="#0B501E" />
        </TouchableOpacity>
      </View>

      {/* Search */}
      <SearchBar
        value={value}
        onChangeText={setValue}
        containerStyle={{
          height: 60,
          paddingVertical: "auto",
          justifyContent: "center",
        }}
      />

      {/* Frequent Gossips */}
      <View style={{ marginTop: 20, marginLeft: 16 }}>
        <Text style={{ fontWeight: "500", marginBottom: 20, color: "#4D4845" }}>
          Frequent Gossips
        </Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {frequentContacts.map((item) => (
            <View
              key={item.id}
              style={{
                alignItems: "center",
                marginRight: 36,
              }}
            >
              <Image
                source={item.image}
                style={{ width: 56, height: 56, borderRadius: 28 }}
              />
              <Text style={{ marginTop: 6 }}>{item.name}</Text>
            </View>
          ))}
        </ScrollView>
      </View>

      {/* All Contacts */}
      <View style={{ flex: 1, marginTop: 20, marginHorizontal: 16 }}>
        <FlatList
          ListHeaderComponent={() => (
            <Text
              style={{ fontWeight: "500", marginBottom: 20, color: "#4D4845" }}
            >
              All Contacts
            </Text>
          )}
          data={allContacts}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 32,
              }}
            >
              <Image
                source={item.image}
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 24,
                  marginRight: 12,
                }}
              />
              <View style={{ flex: 1 }}>
                <Text style={{ fontWeight: "500" }}>{item.name}</Text>
                <Text style={{ color: "gray", marginTop: 2 }}>
                  {item.message}
                </Text>
              </View>
              <TouchableOpacity>
                <Ionicons name="ellipsis-vertical" size={20} color="gray" />
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default SendViaChat;
