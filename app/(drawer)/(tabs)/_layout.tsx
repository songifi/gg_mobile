import React from 'react';
import { Tabs } from 'expo-router';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Entypo from '@expo/vector-icons/Entypo';

import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import Octicons from '@expo/vector-icons/Octicons';

export default function _layout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: true,
                tabBarActiveTintColor: '#14542C', // green shade for active
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontFamily: 'Geist-Regular',
                    fontWeight: '400',
                    marginTop: 2,
                },
                tabBarStyle: { height: 70, paddingBottom: 10 },
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, focused }) => (
                        <MaterialCommunityIcons
                            name="home-variant"
                            size={24}
                            color={color}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="chats/index"
                options={{
                    tabBarLabel: 'Chats',
                    tabBarIcon: ({ color, focused }) => (
                        <Entypo name="chat" size={24} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="wallet/index"
                options={{
                    tabBarLabel: 'Wallet',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons
                            name="wallet-outline"
                            size={24}
                            color={color}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="NFTs/index"
                options={{
                    tabBarLabel: 'NFTS',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons
                            name="diamond-outline"
                            size={24}
                            color={color}
                        />
                    ),
                }}
            />

            <Tabs.Screen
                name="Profile/index"
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color, focused }) => (
                        <Octicons name="person" size={24} color={color} />
                    ),
                }}
            />
        </Tabs>
    );
}
