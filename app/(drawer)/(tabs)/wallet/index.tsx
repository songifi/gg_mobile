import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
  StatusBar,
  Modal,
  FlatList,
  Pressable,
} from "react-native";
import {
  Ionicons,
  Feather,
  FontAwesome5,
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome,
} from "@expo/vector-icons";
import { router, useNavigation } from "expo-router";
import { currencies } from "@/app/components/DemoData";
import { transactions } from "@/app/components/DemoData";

export default function WalletScreen() {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]);
  const [addFund, setAddFund] = useState(false);
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  const walletAddress = "0x0Bbed4Daf99d43D4aBa58fa6eD5A7550f6555327";

  const copyToClipboard = () => {
    // Implement copy logic here (e.g., using expo-clipboard)
    console.log("Copied:", walletAddress);
  };

  // Function to show currency dropdown
  const showCurrencyDropdown = () => {
    setDropdownVisible(true);
  };

  // Function to hide currency dropdown
  const hideCurrencyDropdown = () => {
    setDropdownVisible(false);
  };

  // Function to handle currency selection
  const handleCurrencySelect = (currency: any) => {
    setSelectedCurrency(currency);
    hideCurrencyDropdown();
  };

  // Render transaction item
  const renderTransactionItem = (item: any) => {
    let IconComponent;

    switch (item.iconType) {
      case "feather":
        IconComponent = <Feather name={item.icon} size={24} />;
        break;
      case "material":
        IconComponent = (
          <MaterialIcons name={item.icon} size={24} color="#6B82A2" />
        );
        break;
      case "fontawesome":
        IconComponent = <FontAwesome name={item.icon} size={24} />;
        break;
      default:
        IconComponent = <Ionicons name={item.icon} size={24} color="#6B82A2" />;
    }

    return (
      <TouchableOpacity key={item.id} style={styles.transactionItem}>
        <View style={styles.transactionIconContainer}>{IconComponent}</View>

        <View style={styles.transactionInfo}>
          <Text style={styles.transactionTitle}>{item.title}</Text>
          <Text style={styles.transactionDate}>{item.date}</Text>
        </View>

        <View style={styles.transactionAmount}>
          <Text
            style={[
              styles.transactionAmountText,
              item.positive ? styles.positiveAmount : styles.negativeAmount,
            ]}
          >
            {item.amount}
          </Text>
          <Text style={styles.transactionTokens}>{item.tokens}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  // Currency item renderer for dropdown
  const renderCurrencyItem = (item: any) => (
    <TouchableOpacity
      style={styles.currencyItem}
      onPress={() => handleCurrencySelect(item)}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          source={{ uri: item.flag }}
          style={{ height: 10, width: 20, marginRight: 10 }}
        />
        <Text>
          {item.name} ({item.code})
        </Text>
      </View>
      {selectedCurrency.code === item.code && (
        <View style={{ marginLeft: "auto" }}>
          <Ionicons name="checkmark" size={24} color="#006400" />
        </View>
      )}
    </TouchableOpacity>
  );

  // Get currency symbol
  const getCurrencySymbol = (code: string) => {
    switch (code) {
      case "USD":
        return "$";
      case "EUR":
        return "€";
      case "GBP":
        return "£";
      case "JPY":
        return "¥";
      case "CNY":
        return "¥";
      case "AUD":
        return "A$";
      case "CAD":
        return "C$";
      case "CHF":
        return "Fr";
      case "INR":
        return "₹";
      case "BRL":
        return "R$";
      default:
        return "";
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* <StatusBar barStyle="dark-content" />*/}

      {/* Header */}
      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: 10,
          alignItems: "center",
          justifyContent: "flex-end",
          gap: 108,
          marginTop: 8,
        }}
      >
        <Text style={{ fontSize: 16, fontWeight: 500 }}>Wallet</Text>
        <Text
          style={{
            borderWidth: 1,
            borderColor: "#DBE1E7",
            width: 40,
            height: 40,
            borderRadius: 50,
            padding: 8,
          }}
        >
          <Ionicons name="notifications-outline" size={20} color="black" />
        </Text>
      </View>

      <ScrollView style={styles.scrollView}>
        {/* Currency Selector */}
        <View style={styles.currencySelectorContainer}>
          <TouchableOpacity
            style={styles.currencySelector}
            onPress={showCurrencyDropdown}
            activeOpacity={0.7}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={{ uri: selectedCurrency.flag }}
                style={styles.flagIcon}
              />
              <Text style={styles.currencyText}>{selectedCurrency.code}</Text>
            </View>
            <View style={styles.dropdownIcon}>
              <Ionicons name="chevron-down" size={20} color="black" />
            </View>
          </TouchableOpacity>
        </View>

        {/* Wallet Balance */}
        <View style={styles.balanceContainer}>
          <Text style={styles.balanceLabel}>Wallet balance</Text>
          <Text style={styles.balanceAmount}>
            {getCurrencySymbol(selectedCurrency.code)} 689.00
          </Text>
          <Text style={styles.tokenAmount}>24.9876 STRK</Text>
        </View>

        {/* Action Buttons */}
        <View style={styles.actionButtonsContainer}>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => router.push("/(routes)/sendMoney")}
          >
            <View style={styles.actionIconContainer}>
              <Feather name="arrow-up-right" size={24} color="black" />
            </View>
            <Text style={styles.actionText}>Send</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.actionButton}
            // onPress={() => setModalVisible(true)}
            onPress={() => router.push("/(routes)/fundWallet")}
          >
            <View
              style={[styles.actionIconContainer, styles.primaryActionIcon]}
            >
              <Feather name="plus" size={24} color="white" />
            </View>
            <Text style={styles.actionText}>Fund</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => setModalVisible(true)}
          >
            <View style={styles.actionIconContainer}>
              <MaterialCommunityIcons
                name="bank-outline"
                size={24}
                color="black"
              />
            </View>
            <Text style={styles.actionText}>Details</Text>
          </TouchableOpacity>
        </View>

        {/* Recent Transactions */}
        <View style={styles.transactionsHeaderContainer}>
          <Text style={styles.transactionsTitle}>Recent Transaction</Text>
          <TouchableOpacity style={styles.seeAllButton}>
            <Text style={styles.seeAllText}>See all</Text>
            <Ionicons
              name="chevron-forward-outline"
              size={20}
              color="#0B501E"
            />
          </TouchableOpacity>
        </View>

        {/* Transaction List */}
        <View style={styles.transactionsList}>
          {transactions.map(renderTransactionItem)}
        </View>
      </ScrollView>

      {/* Currency Dropdown Modal*/}
      <Modal
        visible={dropdownVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={hideCurrencyDropdown}
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={hideCurrencyDropdown}
        >
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Select Currency</Text>
              <TouchableOpacity onPress={hideCurrencyDropdown}>
                <Ionicons name="close" size={24} color="#333" />
              </TouchableOpacity>
            </View>

            <FlatList
              data={currencies}
              renderItem={({ item }) => renderCurrencyItem(item)}
              keyExtractor={(item) => item.code}
              style={styles.currencyList}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </TouchableOpacity>
      </Modal>

      {/* Details Modal*/}
      <Modal
        transparent
        animationType="fade"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.overlay}>
          <View style={styles.modalView}>
            {/* Close Button */}
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Ionicons name="close-outline" size={24} color="black" />
            </TouchableOpacity>

            {/* Wallet Address */}
            <View style={styles.walletBox}>
              <Text style={styles.label}>Your Wallet Address</Text>
              <View style={styles.addressRow}>
                <Text style={styles.addressText}>{walletAddress}</Text>
                <TouchableOpacity
                  style={styles.copyButton}
                  onPress={copyToClipboard}
                >
                  <Ionicons
                    name="copy-outline"
                    size={22}
                    color="#5256A3"
                    margin="auto"
                  />
                </TouchableOpacity>
              </View>
            </View>

            {/* View Wallet Option */}
            <Pressable style={styles.viewWalletButton}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View style={styles.qrcode}>
                  <Ionicons name="qr-code-outline" size={24} color="black" />
                </View>
                <Text style={styles.viewWalletText}>
                  View your wallet address
                </Text>
              </View>
              <Ionicons
                name="chevron-forward-outline"
                size={24}
                color="#767676"
                onPress={() => router.push("/(routes)/walletQrCode")}
              />
            </Pressable>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollView: {
    flex: 1,
  },
  currencySelectorContainer: {
    alignItems: "center",
    marginTop: 30,
  },
  currencySelector: {
    flexDirection: "row",
    alignItems: "center",
    gap: 30,
    backgroundColor: "#F8F8F8",
    // paddingHorizontal: 15,
    padding: 8,
    borderRadius: 20,
  },
  flagIcon: {
    width: 24,
    height: 24,
    borderRadius: 50,
    marginRight: 8,
  },
  currencyText: {
    fontSize: 14,
    fontWeight: "500",
    marginRight: 5,
  },
  dropdownIcon: {
    borderRadius: 50,
    backgroundColor: "#FFFFFF",
    padding: 4,
  },
  balanceContainer: {
    alignItems: "center",
    marginTop: 30,
  },
  balanceLabel: {
    fontSize: 12,
    color: "#767676",
    marginBottom: 8,
  },
  balanceAmount: {
    fontSize: 40,
    fontWeight: 600,
    marginBottom: 4,
  },
  tokenAmount: {
    fontSize: 12,
    color: "#767676",
  },
  actionButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 40,
    marginBottom: 30,
  },
  actionButton: {
    alignItems: "center",
  },
  actionIconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#F8F8F8",
    borderColor: "#DBE1E7",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },
  primaryActionIcon: {
    backgroundColor: "#0B501E",
  },
  actionText: {
    fontSize: 12,
    fontWeight: 500,
  },
  transactionsHeaderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  transactionsTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: "#5A5B5C",
  },
  seeAllButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  seeAllText: {
    fontSize: 16,
    color: "#0B501E",
    fontWeight: "500",
  },
  transactionsList: {
    paddingHorizontal: 20,
  },
  transactionItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
  },
  transactionIconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#F5F6FA",
    borderColor: "#DBE1E7",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
  },
  transactionInfo: {
    flex: 1,
  },
  transactionTitle: {
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 4,
  },
  transactionDate: {
    fontSize: 12,
    color: "#767676",
  },
  transactionAmount: {
    alignItems: "flex-end",
  },
  transactionAmountText: {
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 4,
  },
  positiveAmount: {
    color: "#0AC660",
  },
  negativeAmount: {},
  transactionTokens: {
    fontSize: 12,
    color: "#666",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-end",
  },
  modalContent: {
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingBottom: 20,
    maxHeight: "70%",
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "600",
  },
  currencyList: {
    paddingHorizontal: 20,
  },
  currencyItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  // fund modal

  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  modalView: {
    width: "100%",
    backgroundColor: "white",
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    padding: 20,
    alignItems: "center",
    position: "relative",
  },
  closeButton: {
    position: "absolute",
    top: 15,
    right: 15,
    borderWidth: 1,
    borderColor: "#DBE1E7",
    borderRadius: 50,
    padding: 5,
  },
  walletBox: {
    width: "100%",
    paddingHorizontal: 16,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#DBE1E7",
    paddingVertical: 20,
    borderRadius: 12,
    marginTop: 60,
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    color: "#5B5B5B",
    marginBottom: 8,
  },
  addressRow: {
    flexDirection: "row",
    // alignItems: "center",
    // justifyContent: "space-between",
  },
  addressText: {
    flex: 1,
    fontSize: 15,
    fontWeight: "600",
    color: "#090909",
    marginRight: 10,
  },
  copyButton: {
    padding: 10,
    borderRadius: 20,
    backgroundColor: "#F2F2F8",
  },
  viewWalletButton: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 12,
  },
  qrcode: {
    width: 48,
    height: 48,
    borderRadius: 50,
    backgroundColor: "#F8F8F8",
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
    // marginRight: 8,
  },
  viewWalletText: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: "#000",
  },
});
