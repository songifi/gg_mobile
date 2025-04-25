import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { frequentGossips } from '../components/DemoData';
import Entypo from '@expo/vector-icons/Entypo';

import { FlatList } from 'react-native';
import { nftGallery } from '../components/DemoData';

export default function SendScreen() {
    const [activeTab, setActiveTab] = React.useState<'strk' | 'nft'>('strk');
    const [selectedNFTs, setSelectedNFTs] = React.useState<number[]>([]); // indices of selected

    const handleNFTPress = (idx: number) => {
        setSelectedNFTs((prev) => {
            if (prev.includes(idx)) {
                // Remove
                return prev.filter((i) => i !== idx);
            } else {
                // Add
                return [...prev, idx];
            }
        });
    };

    const getNFTSelectionOrder = (idx: number) => {
        const order = selectedNFTs.indexOf(idx);
        return order !== -1 ? order + 1 : null;
    };

    const router = useRouter();
    const { name } = useLocalSearchParams<{ name?: string }>();
    const gossip = frequentGossips.find((g) => g.name === name);
    const imageSource = gossip?.image || require('@/assets/images/avatar.png');
    const [amount, setAmount] = useState('0');
    // Demo balance
    const balance = '12,678.97 STRK';
    // Conversion rate: 1 USD = 45.28 STRK
    const USD_TO_STRK = 45.28;
    const parsedAmount = parseFloat(amount.replace(/[^\d.]/g, '')) || 0;
    const strkEquivalent = parsedAmount * USD_TO_STRK;
    const strkFormatted = strkEquivalent.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });
    const dollarFormatted = parsedAmount.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });

    const handleKeyPress = (key: string) => {
        if (key === '<') {
            setAmount((prev) => (prev.length > 1 ? prev.slice(0, -1) : '0'));
        } else {
            setAmount((prev) => (prev === '0' ? key : prev + key));
        }
    };

    const KEYS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '<'];

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            {/* Header */}
            <View style={styles.headerRow}>
                <TouchableOpacity
                    onPress={() => router.back()}
                    style={styles.iconBtn}
                >
                    <Ionicons name="chevron-back" size={24} color="#222" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Send</Text>
                <Entypo name="chat" size={24} color="#185C2C" />
            </View>

            {/* Tabs */}
            <View style={styles.tabsRow}>
                <TouchableOpacity
                    style={[
                        styles.tab,
                        activeTab === 'strk' && styles.tabActive,
                    ]}
                    onPress={() => setActiveTab('strk')}
                >
                    <Text
                        style={[
                            styles.tabText,
                            activeTab === 'strk' && styles.tabTextActive,
                        ]}
                    >
                        Send STRK
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                        styles.tab,
                        activeTab === 'nft' && styles.tabActive,
                    ]}
                    onPress={() => setActiveTab('nft')}
                >
                    <Text
                        style={[
                            styles.tabText,
                            activeTab === 'nft' && styles.tabTextActive,
                        ]}
                    >
                        Send NFT
                    </Text>
                </TouchableOpacity>
            </View>

            {/* Avatar & Name */}
            <View style={styles.avatarSection}>
                <Image source={imageSource} style={styles.avatarImg} />
                <Text style={styles.avatarName}>{name || 'User'}</Text>
            </View>

            {activeTab === 'strk' ? (
                <>
                    {/* Amount */}
                    <Text style={styles.howMuch}>How much?</Text>
                    <Text style={styles.amount}>${dollarFormatted}</Text>
                    <Text style={styles.balance}>{strkFormatted} STRK</Text>

                    {/* Keypad */}
                    <View style={styles.keypad}>
                        {/* First row: 1 2 3 */}
                        <View style={styles.keypadRow}>
                            {['1', '2', '3'].map((key) => (
                                <TouchableOpacity
                                    key={key}
                                    style={styles.key}
                                    onPress={() => handleKeyPress(key)}
                                >
                                    <Text style={styles.keyText}>{key}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                        {/* Second row: 4 5 6 */}
                        <View style={styles.keypadRow}>
                            {['4', '5', '6'].map((key) => (
                                <TouchableOpacity
                                    key={key}
                                    style={styles.key}
                                    onPress={() => handleKeyPress(key)}
                                >
                                    <Text style={styles.keyText}>{key}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                        {/* Third row: 7 8 9 */}
                        <View style={styles.keypadRow}>
                            {['7', '8', '9'].map((key) => (
                                <TouchableOpacity
                                    key={key}
                                    style={styles.key}
                                    onPress={() => handleKeyPress(key)}
                                >
                                    <Text style={styles.keyText}>{key}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                        {/* Last row: (empty) 0 < */}
                        <View style={styles.keypadRow}>
                            <View style={[styles.key, { opacity: 0 }]} />
                            <TouchableOpacity
                                style={styles.key}
                                onPress={() => handleKeyPress('0')}
                            >
                                <Text style={styles.keyText}>0</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.key}
                                onPress={() => handleKeyPress('<')}
                            >
                                <Ionicons
                                    name="chevron-back-sharp"
                                    size={24}
                                    color="black"
                                />
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* Send Button */}
                    <TouchableOpacity style={styles.sendBtn}>
                        <Text style={styles.sendBtnText}>Send</Text>
                    </TouchableOpacity>
                </>
            ) : (
                <>
                    {/* NFT Picker Section */}
                    <View style={styles.nftPickerHeader}>
                        <TouchableOpacity>
                            <Text style={styles.nftPickerCancel}>Cancel</Text>
                        </TouchableOpacity>
                        <Text style={styles.nftPickerTitle}>
                            Your NFTs{' '}
                            <Text style={{ color: '#0B501E' }}>
                                ({nftGallery.length})
                            </Text>
                        </Text>
                        <View style={{ width: 48 }} />
                    </View>
                    <FlatList
                        data={nftGallery}
                        keyExtractor={(item, idx) => item.name + idx}
                        numColumns={4}
                        style={styles.nftGrid}
                        extraData={selectedNFTs}
                        contentContainerStyle={{ paddingBottom: 24 }}
                        renderItem={({
                            item,
                            index,
                        }: {
                            item: (typeof nftGallery)[0];
                            index: number;
                        }) => {
                            const selectedOrder = getNFTSelectionOrder(index);
                            return (
                                <TouchableOpacity
                                    style={styles.nftCard}
                                    activeOpacity={0.8}
                                    onPress={() => handleNFTPress(index)}
                                >
                                    {selectedOrder && (
                                        <View style={styles.nftSelectedBadge}>
                                            <Text
                                                style={
                                                    styles.nftSelectedBadgeText
                                                }
                                            >
                                                {selectedOrder}
                                            </Text>
                                        </View>
                                    )}
                                    <View style={styles.nftPriceTag}>
                                        <Text style={styles.nftPriceText}>
                                            ${item.price.toFixed(2)}
                                        </Text>
                                    </View>
                                    <Image
                                        source={item.image}
                                        style={styles.nftImg}
                                    />
                                </TouchableOpacity>
                            );
                        }}
                    />
                    <TouchableOpacity style={styles.sendBtn}>
                        <Text style={styles.sendBtnText}>
                            Send
                            {selectedNFTs.length > 0
                                ? ` (${selectedNFTs.length})`
                                : ''}
                        </Text>
                    </TouchableOpacity>
                </>
            )}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    headerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingTop: 6,
        paddingBottom: 6,
        justifyContent: 'space-between',
    },
    iconBtn: {
        width: 32,
        height: 32,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerTitle: {
        fontSize: 16,
        fontWeight: '500',
        color: '#222',
        fontFamily: 'Geist-Medium',
    },
    tabsRow: {
        flexDirection: 'row',
        backgroundColor: '#F7F8F9',
        borderRadius: 8,
        marginHorizontal: 16,
        marginTop: 12,
        marginBottom: 18,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: '#DBE1E7',
        padding: 4,
    },
    tab: {
        flex: 1,
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    tabActive: {
        backgroundColor: '#fff',
        borderColor: '#DBE1E7',
        borderWidth: 1,
        borderRadius: 6,
    },
    tabText: {
        color: '#888',
        fontSize: 14,
        fontWeight: '600',
        fontFamily: 'Geist-Medium',
    },
    tabTextActive: {
        color: '#0B501E',
    },
    avatarSection: {
        alignItems: 'center',
        marginBottom: 10,
    },
    avatarImg: {
        width: 72,
        height: 72,
        borderRadius: 36,
        marginBottom: 8,
        backgroundColor: '#eee',
    },
    avatarName: {
        fontSize: 24,
        color: '#0B501E',
        fontWeight: '500',
        fontFamily: 'Geist-Medium',
        marginBottom: 12,
    },
    howMuch: {
        textAlign: 'center',
        fontSize: 14,
        color: '#5A5B5C',
        marginBottom: 4,
        fontFamily: 'Geist-Regular',
    },
    amount: {
        textAlign: 'center',
        fontSize: 32,
        color: '#090909',
        fontWeight: '500',
        fontFamily: 'Geist-Medium',
        marginBottom: 2,
    },
    balance: {
        textAlign: 'center',
        fontSize: 14,
        color: '#5A5B5C',
        marginBottom: 18,
        fontFamily: 'Geist-Regular',
    },
    keypad: {
        marginHorizontal: 0,
        marginBottom: 16,
        marginTop: 42,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 30,
    },
    keypadRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
        width: '100%',
    },
    key: {
        width: 48,
        height: 48,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        borderRadius: 0,
        marginHorizontal: 8,
    },
    keyText: {
        fontSize: 24,
        color: '#090909',
        fontFamily: 'Geist-Medium',
    },
    sendBtn: {
        marginHorizontal: 20,
        backgroundColor: '#14542C',
        borderRadius: 24,
        paddingVertical: 14,
        alignItems: 'center',
        marginTop: 10,
    },
    sendBtnText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
        fontFamily: 'Geist-Bold',
    },
    nftPickerHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#F7F8F9',
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        paddingHorizontal: 18,
        paddingVertical: 12,
        borderWidth: 1,
        borderColor: '#E1E6EB',
        borderBottomWidth: 0,
        marginTop: 16,
    },
    nftPickerCancel: {
        color: '#888',
        fontSize: 15,
        fontFamily: 'Geist-Medium',
    },
    nftPickerTitle: {
        fontSize: 15,
        color: '#0B501E',
        fontWeight: '600',
        fontFamily: 'Geist-Medium',
    },
    nftGrid: {
        backgroundColor: '#F7F8F9',
        // borderBottomLeftRadius: 12,
        // borderBottomRightRadius: 12,
        borderWidth: 1,
        borderColor: '#E1E6EB',
        borderTopWidth: 0,
        paddingHorizontal: 8,
        marginBottom: 18,
        minHeight: 240,
    },
    nftCard: {
        flex: 1,
        aspectRatio: 1,
        margin: 1,
        // borderRadius: 10,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        position: 'relative',
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: '#E1E6EB',
    },
    nftPriceTag: {
        position: 'absolute',
        top: 8,
        left: 8,
        backgroundColor: '#E9F9ED',
        borderRadius: 7,
        paddingHorizontal: 7,
        paddingVertical: 2,
        zIndex: 2,
    },
    nftPriceText: {
        color: '#0B501E',
        fontSize: 12,
        fontFamily: 'Geist-Medium',
        fontWeight: '500',
    },
    nftImg: {
        width: '100%',
        height: '100%',
        // borderRadius: 8,
        resizeMode: 'contain',
    },
    nftSelectedBadge: {
        position: 'absolute',
        bottom: 8,
        left: 8,
        backgroundColor: '#0B501E',
        borderRadius: 12,
        width: 24,
        height: 24,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 3,
        borderWidth: 2,
        borderColor: '#fff',
    },
    nftSelectedBadgeText: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 15,
        fontFamily: 'Geist-Bold',
    },
});
