import {
  Alert,
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useNavigation } from "expo-router";
import { Entypo } from "@expo/vector-icons";
import * as Clipboard from "expo-clipboard";

export default function FundFromStark() {
  const navigate = useNavigation();

  const walletAddress = "0x0Bbed4Daf99d43D4aBa58fa6eD5A7550f6555327";

  const handleClose = () => {
    navigate.goBack();
  };

  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(walletAddress);
    showToast("Wallet Address Copied!");
  };

  const showToast = (message: string) => {
    if (Platform.OS === "android") {
      ToastAndroid.show(message, ToastAndroid.SHORT);
    } else {
      Alert.alert(message);
    }
  };
  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: "#fff" }}>
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
      </View>

      {/* Sub Text */}
      <Text style={styles.subText}>
        Below is your wallet address. Copy or share to receive STRK into your
        Gasless Gossip wallet.
      </Text>

      <Pressable style={styles.qrContainer} onPress={copyToClipboard}>
        <Text style={styles.tapToCopy}>TAP TO COPY</Text>

        <Image
          source={require("@/assets/images/qrCode.png")}
          style={styles.qrImage}
          resizeMode="contain"
        />
      </Pressable>

      {/* Stark badge*/}
      <View style={styles.badgeContainer}>
        <Image
          source={require("@/assets/images/strkIcon.png")}
          style={{ width: 20, height: 20 }}
          resizeMode="contain"
        />
        <Text style={{ fontSize: 14, color: "#0B501E" }}>Starknet</Text>
      </View>

      {/* Wallet Address */}
      <Text style={styles.walletText}>{walletAddress}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    // paddingHorizontal: 16,
    paddingVertical: 20,
  },
  backButton: {
    padding: 5,
    marginRight: 110,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: "#08090A",
  },
  subText: {
    fontSize: 13,
    color: "#565656",
    marginBottom: 32,
  },
  qrContainer: {
    backgroundColor: "#F7F8F9",
    borderWidth: 1,
    borderColor: "#DBE1E7",
    padding: 20,
    borderRadius: 20,
    alignItems: "center",
    marginBottom: 20,
    width: 323,
    height: 345,
  },
  qrImage: {
    width: "95%",
    height: "95%",
  },
  tapToCopy: {
    marginBottom: 8,
    fontSize: 12,
    color: "#0B501E",
  },
  badgeContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
    borderWidth: 1,
    borderColor: "#C8F9D4",
    borderRadius: 20,
    backgroundColor: "#F6FEF8",
    padding: 4,
    marginHorizontal: "auto",
  },
  walletText: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: "400",
    color: "#090909",
    textAlign: "center",
  },
});
