import React from "react";
import { Tabs } from "expo-router";
import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import Octicons from "@expo/vector-icons/Octicons";

export default function _layout() {
  return (
    <Tabs screenOptions={{ headerShown: false, tabBarShowLabel: false }} initialRouteName="(drawer)">
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color }) => {
            return <Feather name="home" size={25} color={color} />;
          },
        }}
      />
      <Tabs.Screen
        name="courses/index"
        options={{
          title: "Courses",
          tabBarIcon: ({ color }) => {
            return <Feather name="book-open" size={25} color={color} />;
          },
        }}
      />
      <Tabs.Screen
        name="messages/index"
        options={{
          title: "Messages",
          tabBarIcon: ({ color }) => {
            return <AntDesign name="message1" size={24} color={color} />;
          },
        }}
      />
      <Tabs.Screen
        name="resources/index"
        options={{
          title: "Resources",
          tabBarIcon: ({ color }) => {
            return (
              <Ionicons name="document-text-outline" size={24} color={color} />
            );
          },
        }}
      />
      <Tabs.Screen
        name="profile/index"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => {
            return (
              <Octicons name="person" size={24} color={color} />
            );
          },
        }}
      />
    </Tabs>
  );
}