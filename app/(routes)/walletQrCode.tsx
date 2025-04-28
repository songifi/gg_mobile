import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Pressable,
  ToastAndroid,
  Platform,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import * as Clipboard from "expo-clipboard";
import { router } from "expo-router";

export default function WalletQRCode() {
  const navigation = useNavigation();

  const walletAddress = "0x0Bbed4Daf99d43D4aBa58fa6eD5A7550f6555327";

  const handleClose = () => {
    navigation.goBack();
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
    <View style={styles.container}>
      {/* Close Button */}
      <TouchableOpacity
        style={styles.closeButton}
        onPress={() => router.push("/(drawer)/(tabs)/wallet")}
      >
        <Ionicons name="close" size={20} color="black" />
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.title}>Wallet Address</Text>

      {/* QR Code Card */}
      <Pressable style={styles.qrContainer} onPress={copyToClipboard}>
        <Text style={styles.tapToCopy}>TAP TO COPY</Text>

        <Image
          source={require("@/assets/images/qrCode.png")}
          style={styles.qrImage}
          resizeMode="contain"
        />
      </Pressable>

      {/* Wallet Address */}
      <Text style={styles.walletText}>{walletAddress}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    paddingTop: 60,
  },
  closeButton: {
    position: "absolute",
    top: 20,
    right: 20,
    borderWidth: 1,
    borderColor: "#DBE1E7",
    borderRadius: 50,
    padding: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "black",
    marginTop: 36,
    marginBottom: 20,
  },
  qrContainer: {
    backgroundColor: "#F7F8F9",
    borderWidth: 1,
    borderColor: "#DBE1E7",
    padding: 20,
    borderRadius: 20,
    alignItems: "center",
    marginBottom: 20,
  },
  qrImage: {
    width: 200,
    height: 200,
  },
  tapToCopy: {
    marginBottom: 8,
    fontSize: 12,
    color: "#0B501E",
  },
  walletText: {
    marginTop: 20,
    fontSize: 15,
    fontWeight: "400",
    color: "#090909",
    textAlign: "center",
    paddingHorizontal: 30,
  },
});
