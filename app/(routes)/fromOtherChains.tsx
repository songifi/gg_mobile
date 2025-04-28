import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { SearchBar } from "../components/searchBar";

const chains = [
  { name: "Arbitrum One", image: require("@/assets/images/arbitrum.png") },
  { name: "Base", image: require("@/assets/images/base.png") },
  { name: "Ethereum", image: require("@/assets/images/eth.png") },
  { name: "Immutable zkEVM", image: require("@/assets/images/zkEVM.png") },
  { name: "Abstract", image: require("@/assets/images/abstract.png") },
  {
    name: "Arbitrum Nova",
    image: require("@/assets/images/arbitrumNova.png"),
  },
  { name: "Avalanche", image: require("@/assets/images/avalanche.png") },
  { name: "BSC", image: require("@/assets/images/bsc.png") },
  { name: "Blast", image: require("@/assets/images/blast.png") },
  { name: "Bob", image: require("@/assets/images/bob.png") },
];

const FromOtherChains = () => {
  const navigation = useNavigation();
  const [value, setValue] = React.useState<string>("");

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Entypo name="chevron-thin-left" size={24} color="#08090A" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>From Other Chains</Text>
      </View>

      {/* Sub Text */}
      <Text style={styles.subText}>
        Select from the listed chains below how you which you like to fund your
        wallet.
      </Text>

      {/* Search Input */}
      <SearchBar
        value={value}
        onChangeText={setValue}
        containerStyle={{
          height: 60,
          paddingVertical: "auto",
        }}
      />

      {/* List of Chains */}
      <ScrollView contentContainerStyle={styles.listContainer}>
        {chains.map((chain, index) => (
          <TouchableOpacity key={index} style={styles.chainItem}>
            <View style={styles.imageContainer}>
              <Image source={chain.image} style={styles.chainImage} />
            </View>
            <Text style={styles.chainText}>{chain.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default FromOtherChains;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 15,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  backButton: {
    padding: 5,
    marginRight: 60,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: "#08090A",
  },
  subText: {
    color: "#565656",
    fontSize: 14,
    fontWeight: "400",
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  listContainer: {
    paddingVertical: 20,
  },
  chainItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderBottomColor: "#E5E7EB",
    borderBottomWidth: 1,
  },
  imageContainer: {
    width: 32,
    height: 32,
    padding: 14,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: "#DBE1E7",
    backgroundColor: "#F8F8F8",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },
  chainImage: {
    width: 20,
    height: 20,
  },
  chainText: {
    fontSize: 16,
    color: "#08090A",
    fontWeight: "500",
  },
});
