import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import { DrawerActions, useNavigation } from "@react-navigation/native";

export default function index() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      {/* <TouchableOpacity
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      >
        <EvilIcons name="navicon" size={24} color="black" />
      </TouchableOpacity> */}
      <Text>Home</Text>
    </View>
  );
}