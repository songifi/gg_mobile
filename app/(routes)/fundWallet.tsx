import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Pressable,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Animated, {
  useSharedValue,
  //   useAnimatedScale,
  withSpring,
} from "react-native-reanimated";
import { RelativePathString, router } from "expo-router";

export default function FundWalletScreen() {
  const navigation = useNavigation();

  const options = [
    {
      title: "Buy Crypto",
      subtitle: "Apple Pay, card or bank transfer",
      image: require("@/assets/images/apple.png"),
      navigateTo: "/(drawer)/(tabs)/wallet",
    },
    {
      title: "From STRK Wallet",
      subtitle: "Argent, Binance, e.t.c",
      image: require("@/assets/images/argent.png"),
      navigateTo: "/(routes)/fundFromStark",
    },
    {
      title: "From Other Chains",
      subtitle: "Argent, Binance, e.t.c",
      image: require("@/assets/images/apple.png"),
      navigateTo: "/(routes)/fromOtherChains",
    },
  ];

  interface Option {
    title: string;
    subtitle: string;
    image: any; // Use a more specific type if available for the image
    navigateTo: string;
  }

  const handleOptionPress = (navigateTo: string): void => {
    router.push(navigateTo as RelativePathString);
  };

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
        <Text style={styles.headerTitle}>Fund Wallet</Text>
        <View style={styles.placeholder} />
      </View>

      {/* Options */}
      <View style={styles.optionsContainer}>
        {options.map((option, index) => (
          <BouncePressable
            key={index}
            onPress={() => handleOptionPress(option.navigateTo)}
          >
            <View style={styles.optionContent}>
              <View style={styles.imageContainer}>
                <Image source={option.image} style={styles.optionImage} />
              </View>
              <View style={styles.optionText}>
                <Text style={styles.optionTitle}>{option.title}</Text>
                <Text style={styles.optionSubtitle}>{option.subtitle}</Text>
              </View>
            </View>
          </BouncePressable>
        ))}
      </View>
    </View>
  );
}

// Custom bounce pressable using Reanimated
function BouncePressable({
  children,
  onPress,
}: {
  children: React.ReactNode;
  onPress: () => void;
}) {
  //   const scale = useAnimatedScale(1);
  const scale = useSharedValue(1);

  return (
    <Pressable
      onPressIn={() => {
        scale.value = withSpring(0.97);
      }}
      onPressOut={() => {
        scale.value = withSpring(1);
      }}
      onPress={onPress}
    >
      <Animated.View
        style={{ transform: [{ scale }], ...styles.optionContainer }}
      >
        {children}
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
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
  placeholder: {
    width: 24,
  },
  optionsContainer: {
    marginTop: 8,
  },
  optionContainer: {
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  optionContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  imageContainer: {
    width: 48,
    height: 48,
    padding: 14,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: "#DBE1E7",
    backgroundColor: "#F8F8F8",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },

  optionImage: {
    width: 10,
    height: 10,
    padding: 14,
  },
  optionText: {
    flex: 1,
  },
  optionTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: "#08090A",
  },
  optionSubtitle: {
    fontSize: 14,
    color: "#5A5B5C",
    marginTop: 4,
  },
});
