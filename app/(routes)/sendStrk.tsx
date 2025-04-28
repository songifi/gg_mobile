import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  SafeAreaView,
  StatusBar,
  FlatList,
} from "react-native";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import { nftData } from "@/app/components/DemoData";

export default function SendScreen() {
  const [amount, setAmount] = useState("500.00");
  const [activeTab, setActiveTab] = useState("STRK");
  const navigation = useNavigation();
  const [selectedNft, setSelectedNft] = useState<number | null>(null);

  const handleNumberPress = (num: string) => {
    if (amount === "0.00" || amount === "500.00") {
      setAmount(num);
    } else {
      setAmount(amount + num);
    }
  };

  const handleBackspace = () => {
    if (amount.length > 0) {
      setAmount(amount.slice(0, -1));
      if (amount.length === 1) {
        setAmount("0.00");
      }
    }
  };

  const formatCurrency = (value: string) => {
    return `$${value}`;
  };

  const calculateSTRK = (value: string) => {
    // This would be a real conversion in your app
    const numValue = parseFloat(value) || 0;
    return (numValue * 25.3579).toFixed(2);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Entypo
            name="chevron-thin-left"
            size={24}
            color="#08090A"
            onPress={() => navigation.goBack()}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Send</Text>
        <TouchableOpacity style={styles.chatButton}>
          <Entypo name="chat" fill="none" size={24} color="#0B501E " />
        </TouchableOpacity>
      </View>

      {/* Tabs */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === "STRK" && styles.activeTab]}
          onPress={() => setActiveTab("STRK")}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "STRK" && styles.activeTabText,
            ]}
          >
            Send STRK
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === "NFT" && styles.activeTab]}
          onPress={() => setActiveTab("NFT")}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "NFT" && styles.activeTabText,
            ]}
          >
            Send NFT
          </Text>
        </TouchableOpacity>
      </View>

      {/* Profile */}
      <View style={styles.profileContainer}>
        <View style={styles.profileImageContainer}>
          <Image
            source={require("@/assets/images/anna.png")}
            style={styles.profileImage}
          />
        </View>
        <Text style={styles.profileName}>Anna</Text>
      </View>

      {/* STRK Content */}
      {activeTab === "STRK" && (
        <>
          {/* Amount */}
          <View style={styles.amountContainer}>
            <Text style={styles.amountLabel}>How much?</Text>
            <Text style={styles.amountValue}>{formatCurrency(amount)}</Text>
            <Text style={styles.conversionText}>
              {calculateSTRK(amount)} STRK
            </Text>
          </View>

          {/* Keypad */}
          <View style={styles.keypadContainer}>
            <View style={styles.keypadRow}>
              <TouchableOpacity
                style={styles.keypadButton}
                onPress={() => handleNumberPress("1")}
              >
                <Text style={styles.keypadButtonText}>1</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.keypadButton}
                onPress={() => handleNumberPress("2")}
              >
                <Text style={styles.keypadButtonText}>2</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.keypadButton}
                onPress={() => handleNumberPress("3")}
              >
                <Text style={styles.keypadButtonText}>3</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.keypadRow}>
              <TouchableOpacity
                style={styles.keypadButton}
                onPress={() => handleNumberPress("4")}
              >
                <Text style={styles.keypadButtonText}>4</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.keypadButton}
                onPress={() => handleNumberPress("5")}
              >
                <Text style={styles.keypadButtonText}>5</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.keypadButton}
                onPress={() => handleNumberPress("6")}
              >
                <Text style={styles.keypadButtonText}>6</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.keypadRow}>
              <TouchableOpacity
                style={styles.keypadButton}
                onPress={() => handleNumberPress("7")}
              >
                <Text style={styles.keypadButtonText}>7</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.keypadButton}
                onPress={() => handleNumberPress("8")}
              >
                <Text style={styles.keypadButtonText}>8</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.keypadButton}
                onPress={() => handleNumberPress("9")}
              >
                <Text style={styles.keypadButtonText}>9</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.keypadRow}>
              <TouchableOpacity
                style={styles.keypadButton}
                onPress={() => handleNumberPress("")}
              >
                <Text style={styles.keypadButtonText}></Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.keypadButton}
                onPress={() => handleNumberPress("0")}
              >
                <Text style={styles.keypadButtonText}>0</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.keypadButton}
                onPress={handleBackspace}
              >
                <Entypo name="chevron-left" size={18} color="#08090A" />
              </TouchableOpacity>
            </View>
          </View>
        </>
      )}

      {/* NFT Content */}
      {activeTab === "NFT" && (
        <View style={styles.nftContainer}>
          <View style={styles.nftHeader}>
            <TouchableOpacity
              onPress={() => {
                setActiveTab("STRK");
              }}
            >
              <Text style={styles.cancelButton}>Cancel</Text>
            </TouchableOpacity>
            <Text style={styles.nftTitle}>Your NFTs (24)</Text>
            <View style={{ width: 50 }} />
          </View>

          <FlatList
            data={nftData}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={[
                  styles.nftItem,
                  selectedNft === item.id && styles.selectedNftItem,
                ]}
                onPress={() => setSelectedNft(item.id)}
              >
                <View style={styles.priceTag}>
                  <Text style={styles.priceText}>${item.price}</Text>
                </View>
                <Image source={item.image} style={styles.nftImage} />
              </TouchableOpacity>
            )}
            keyExtractor={(item: any) => item.id}
            numColumns={4}
            // contentContainerStyle={styles.nftGrid}
          />
        </View>
      )}

      {/* Send Button */}
      <TouchableOpacity style={styles.sendButton}>
        <Text style={styles.sendButtonText}>Send</Text>
      </TouchableOpacity>
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
  tabContainer: {
    flexDirection: "row",
    marginHorizontal: 20,
    marginTop: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#DBE1E7",
    overflow: "hidden",
  },
  tab: {
    flex: 1,
    paddingVertical: 9,
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  activeTab: {
    borderWidth: 1,
    borderColor: "#DBE1E7",
    borderRadius: 4,
    backgroundColor: "#FFFFFF",
  },
  tabText: {
    fontSize: 14,
    color: "#888",
  },
  activeTabText: {
    color: "#0B501E",
    fontWeight: "600",
  },
  profileContainer: {
    alignItems: "center",
    marginTop: 44,
  },
  profileImageContainer: {
    width: 80,
    height: 80,
    borderRadius: 50,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: "#f0f0f0",
  },
  profileImage: {
    width: "100%",
    height: "100%",
  },
  profileName: {
    marginTop: 16,
    fontSize: 24,
    fontWeight: "500",
    color: "#0B501E",
  },
  amountContainer: {
    alignItems: "center",
    marginTop: 3,
  },
  amountLabel: {
    fontSize: 14,
    color: "#5A5B5C",
  },
  amountValue: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#090909",
    marginTop: 8,
  },
  conversionText: {
    fontSize: 14,
    color: "#5A5B5C",
    marginTop: 10,
  },
  keypadContainer: {
    marginTop: 40,
    paddingHorizontal: 30,
  },
  keypadRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  keypadButton: {
    width: 60,
    height: 38,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  keypadButtonText: {
    fontSize: 24,
    fontWeight: "400",
  },
  nftContainer: {
    flex: 1,
    marginTop: 10,
  },
  nftHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 13,
    borderWidth: 1,
    borderColor: "#DBE1E7",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "#F7F8F9",
  },
  cancelButton: {
    fontSize: 14,
    color: "#5A5B5C",
  },
  nftTitle: {
    fontSize: 14,
    fontWeight: "500",
    color: "#0B501E",
  },
  nftItem: {
    width: "25%",
    height: "25%",
    aspectRatio: 1,
    padding: 1,
  },
  selectedNftItem: {
    borderWidth: 2,
    borderColor: "#006400",
    borderRadius: 8,
  },
  nftImage: {
    width: "100%",
    height: "100%",
    // borderRadius: 8,
    backgroundColor: "#f0f0f0",
  },
  priceTag: {
    position: "absolute",
    top: 8,
    left: 8,
    backgroundColor: "#EDFDF1",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderColor: "#C8F9D4",
    borderRadius: 10,

    zIndex: 1,
  },
  priceText: {
    fontSize: 8,
    fontWeight: "500",
    color: "#0B501E",
  },
  sendButton: {
    backgroundColor: "#0B501E",
    marginHorizontal: 16,
    marginTop: 24,
    marginBottom: 30,
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: "center",
  },
  sendButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },
});
