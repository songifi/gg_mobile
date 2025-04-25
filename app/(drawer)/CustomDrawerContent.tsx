import { View, Text, Pressable, Image, StyleSheet } from "react-native";
import React from "react";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { router, usePathname } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";
import Octicons from "@expo/vector-icons/Octicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function CustomDrawerContent(props: any) {
  const pathname = usePathname();
  const { top, bottom } = useSafeAreaInsets();

  const isActiveRoute = (routePath: string) => {
    return pathname === routePath;
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#dde3fe",
      }}
    >
      <DrawerContentScrollView
        {...props}
        scrollEnabled={false}
        contentContainerStyle={{
          gap: 5,
        }}
      >
        <View style={{ padding: 5, paddingBottom: 20 }}>
          <Image
            source={{
              uri: "https://avatars.githubusercontent.com/u/87035691?v=4",
            }}
            style={{
              width: 100,
              height: 100,
              backgroundColor: "red",
              alignSelf: "center",
              borderRadius: 100,
            }}
          />
          <Text
            style={{
              textAlign: "center",
              paddingTop: 10,
              fontSize: 20,
              fontWeight: "700",
            }}
          >
            Shahriar Sajeeb
          </Text>
        </View>
        <DrawerItem
          label={"Home"}
          onPress={() => router.push("/")}
          labelStyle={{
            color: isActiveRoute("/") ? "#665CFF" : "#000",
          }}
          icon={(props) => (
            <Feather
              name="home"
              size={typeof props.size === 'number' ? props.size : 24}
              color={isActiveRoute("/") ? "#665CFF" : props.color}
            />
          )}
        />
        <DrawerItem
          label={"NFTs"}
          labelStyle={{
            color: isActiveRoute("/NFTs") ? "#665CFF" : "#000",
          }}
          onPress={() => router.push("/NFTs")}
          icon={(props) => (
            <Ionicons
              name="cube-outline"
              size={typeof props.size === 'number' ? props.size : 24}
              color={isActiveRoute("/NFTs") ? "#665CFF" : props.color}
            />
          )}
        />
        <DrawerItem
          label={"Chats"}
          labelStyle={{
            color: isActiveRoute("/chats") ? "#665CFF" : "#000",
          }}
          onPress={() => router.push("/chats")}
          icon={(props) => (
            <AntDesign
              name="message1"
              size={typeof props.size === 'number' ? props.size : 24}
              color={isActiveRoute("/chats") ? "#665CFF" : props.color}
            />
          )}
        />
        <DrawerItem
          label={"Wallet"}
          labelStyle={{
            color: isActiveRoute("/wallet") ? "#665CFF" : "#000",
          }}
          onPress={() => router.push("/wallet")}
          icon={(props) => (
            <Feather
              name="credit-card"
              size={typeof props.size === 'number' ? props.size : 24}
              color={isActiveRoute("/wallet") ? "#665CFF" : props.color}
            />
          )}
        />
        <DrawerItem
          label={"Profile"}
          onPress={() => router.push("/Profile")}
          labelStyle={{
            color: isActiveRoute("/Profile") ? "#665CFF" : "#000",
          }}
          icon={(props) => (
            <Octicons
              name="person"
              size={typeof props.size === 'number' ? props.size : 24}
              color={isActiveRoute("/Profile") ? "#665CFF" : props.color}
            />
          )}
        />
      </DrawerContentScrollView>
      {/* footer */}
      <View
        style={{
          borderBottomColor: "#999",
          borderBottomWidth: StyleSheet.hairlineWidth,
        }}
      />
      <Pressable
        style={{
          padding: 20,
          paddingBottom: bottom + 20,
          flexDirection: "row",
          gap: 5,
          alignItems: "center",
        }}
        onPress={async () => {
          await AsyncStorage.removeItem("loggedIn");
          router.push("/onboarding");
        }}
      >
        <MaterialIcons name="logout" size={24} color="black" />
        <Text style={{ color: "#000", fontSize: 18 }}>Log out</Text>
      </Pressable>
    </View>
  );
}