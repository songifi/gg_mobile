import {
  FontAwesome,
  FontAwesome6,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import { router, useNavigation } from "expo-router";
import { useState } from "react";
import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { chatMessages } from "./DemoData";

const modalContent = [
  {
    id: 1,
    image: require("@/assets/images/starkIcon.png"),
    title: "STRK",
    pressAction: "/(routes)/sendStrk",
  },
  {
    id: 2,
    title: "NFTs",
    icon: <FontAwesome name="diamond" color={"#0B501E"} size={20} />,
    pressAction: "/(routes)/sendStrk",
  },
  {
    id: 3,
    title: "Camera",
    icon: <FontAwesome6 name="camera" color="#0B501E" size={20} />,
    pressAction: "/(routes)/sendStrk",
  },
  {
    id: 4,
    title: "Photo",
    icon: <MaterialIcons name="photo" color="#0B501E" size={20} />,
    pressAction: "/(routes)/sendStrk",
  },
];

export default function ChatBox() {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState(chatMessages);

  const sendMessage = () => {
    if (input.trim().length > 0) {
      setMessages([
        ...messages,
        {
          id: Date.now(),
          text: input,
          sender: "me",
          time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        },
      ]);
      setInput("");
    }
  };

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      {/* Add Button */}
      <TouchableOpacity
        style={styles.attachButton}
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Ionicons name="add" size={30} color="#0B501E" />
        {modalVisible && (
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
          >
            <View style={styles.modalOverlay}>
              {modalContent.map((item) => (
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <TouchableOpacity
                    key={item.id}
                    style={styles.modalItem}
                    onPress={() => {
                      if (item.pressAction) {
                        router.push("/(routes)/sendStrk");
                      }
                      setModalVisible(false);
                    }}
                  >
                    {item.icon || (
                      <Image
                        source={item.image}
                        style={{ width: 40, height: 40, borderRadius: 50 }}
                      />
                    )}
                  </TouchableOpacity>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "600",
                      marginLeft: 10,
                    }}
                  >
                    {item.title}
                  </Text>
                </View>
              ))}
            </View>
          </Modal>
        )}
      </TouchableOpacity>

      {/* Input Field */}
      <View style={styles.inputContainer}>
        <TextInput
          value={input}
          onChangeText={setInput}
          style={styles.input}
          placeholder="Message"
        />
        {input === "" && (
          <TouchableOpacity onPress={sendMessage}>
            <Ionicons name="mic" size={28} />
          </TouchableOpacity>
        )}
        {input !== "" && (
          <TouchableOpacity>
            <FontAwesome6 name="telegram" color="#0B501E" size={30} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  attachButton: {
    padding: 10,
    backgroundColor: "#F3F5F6",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 16,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "#25402C33",
    justifyContent: "flex-end",
    alignItems: "flex-start",
  },

  modalItem: {
    backgroundColor: "#fff",
    borderRadius: 50,
    width: 40,
    height: 40,
    marginVertical: 20,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
    marginLeft: 20,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    // height: 44,
    paddingInline: 16,
    marginHorizontal: 16,
    marginVertical: 20,
    borderWidth: 1,
    borderRadius: 30,
    // position: "relative",
    zIndex: 10,
    backgroundColor: "#fff",
    borderColor: "#DBE1E7",
  },
  input: {
    height: "auto",
    width: "90%",
  },
});
