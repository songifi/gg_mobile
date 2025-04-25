import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    Image,
    StyleSheet,
} from 'react-native';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import { user, frequentGossips, nfts } from '../../components/DemoData';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

export default function Home() {
    const router = useRouter();
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <ScrollView contentContainerStyle={{ padding: 20 }}>
                {/* Header */}
                <View style={styles.headerRow}>
                    <View>
                        <Text style={styles.welcome}>Welcome👋</Text>
                        <Text style={styles.username}>{user.username}</Text>
                    </View>
                    <TouchableOpacity style={styles.bellButton}>
                        <Ionicons
                            name="notifications-outline"
                            size={22}
                            color="#08090A"
                        />
                    </TouchableOpacity>
                </View>

                {/* Wallet Balance */}
                <Text style={styles.walletLabel}>Wallet Balance</Text>
                <Text style={styles.walletBalance}>
                    {(() => {
                        const [whole, cents] = user.balance
                            .toFixed(2)
                            .split('.');
                        const wholeWithCommas = Number(whole).toLocaleString();
                        return (
                            <>
                                ${wholeWithCommas}
                                <Text style={styles.walletBalanceCents}>
                                    .{cents}
                                </Text>
                            </>
                        );
                    })()}
                </Text>
                <TouchableOpacity style={styles.fundWalletBtn}>
                    <Text style={styles.fundWalletText}>Fund Wallet</Text>
                </TouchableOpacity>

                {/* Frequent Gossips */}
                <Text style={styles.sectionTitle}>Frequent Gossips</Text>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                        marginBottom: 16,
                        // paddingHorizontal: 4,
                        gap: 5,
                    }}
                >
                    {frequentGossips.map((g, i) => (
    <TouchableOpacity
        key={g.name}
        style={styles.avatarCol}
        onPress={() => router.push({ pathname: '/(routes)/send', params: { name: g.name } })}
    >
        <Image source={g.image} style={styles.avatarImg} />
        <Text style={styles.avatarName}>{g.name}</Text>
    </TouchableOpacity>
))}
                </ScrollView>

                {/* NFTs */}
                <View style={styles.nftRowHeader}>
                    <View>
                        <Text style={styles.sectionTitle}>Your NFTs</Text>
                        <Text style={styles.nftCount}>24 total</Text>
                    </View>
                    <TouchableOpacity
                        style={styles.seeAllBtn}
                        onPress={() => router.push('/(routes)/nfts')}
                    >
                        <Text style={styles.seeAllText}>See all</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.nftCardsRow}>
                    {nfts.map((nft, i) => (
                        <View key={nft.name} style={styles.nftCard}>
                            <View style={styles.nftPriceTag}>
                                <Text style={styles.nftPriceText}>
                                    ${nft.price.toFixed(2)}
                                </Text>
                            </View>
                            <Image source={nft.image} style={styles.nftImg} />
                            <Text style={styles.nftName}>{nft.name}</Text>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
    },
    welcome: {
        color: '#565656',
        fontSize: 14,
        lineHeight: 22,
        letterSpacing: -1,
        marginBottom: 2,
    },
    username: {
        fontWeight: 500,
        fontFamily: 'Geist-Medium',
        lineHeight: 24,
        fontSize: 16,
        color: '#111',
    },
    bellButton: {
        borderColor: '#DBE1E7',
        borderWidth: 1,
        borderRadius: 20,
        padding: 8,
    },
    walletLabel: {
        color: '#5A5B5C',
        marginTop: 10,
        fontSize: 15,
        fontFamily: 'Geist-Regular',
        lineHeight: 22,
    },
    walletBalance: {
        color: '#0B501E',
        fontSize: 32,
        lineHeight: 48,
        fontWeight: 'bold',
        marginBottom: 4,
        fontFamily: 'Geist-Bold',
        marginTop: 2,
    },
    walletBalanceCents: {
        color: '#0B501E80',
        fontSize: 32,
        fontWeight: '600',
        fontFamily: 'Geist-Bold',
        lineHeight: 32,
    },
    fundWalletBtn: {
        borderRadius: 22,
        paddingVertical: 15,
        alignItems: 'center',
        marginBottom: 18,
        marginVertical: 20,
        backgroundColor: '#EDFDF1',
        borderWidth: 1,
        borderColor: '#C8F9D4',
    },
    fundWalletText: {
        borderRadius: 22,
        fontWeight: '500',
        fontFamily: 'Geist-Medium',
        lineHeight: 22,
        fontSize: 15,
        color: '#0B501E',
    },
    sectionTitle: {
        fontWeight: 500,
        marginTop: 10,
        marginBottom: 5,
        lineHeight: 20,
        fontSize: 15,
        color: '#4D4845',
    },
    avatarCol: {
        alignItems: 'center',
        marginRight: 18,
    },
    avatarImg: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: '#E7F8ED',
        marginBottom: 4,
    },
    avatarName: {
        fontSize: 13,
        color: '#222',
    },

    nftRowHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginBottom: 10,

        marginTop: 16,
    },
    nftCount: {
        fontSize: 12,
        color: '#888',
        fontFamily: 'Geist-Regular',
    },
    seeAllBtn: {
        backgroundColor: '#EDFDF1',
        borderRadius: 16,
        paddingVertical: 8,
        paddingHorizontal: 14,
        borderWidth: 1,
        borderColor: '#C8F9D4',
        alignItems: 'center',
    },
    seeAllText: {
        color: '#185C2C',
        fontWeight: '600',
        fontSize: 13,
    },
    nftCardsRow: {
        flexDirection: 'row',
        gap: 12,
        marginTop: 6,
    },
    nftCard: {
        flex: 1,
        // backgroundColor: '#F7F8F9',
        borderWidth: 1,
        borderColor: '#DBE1E7',
        borderRadius: 16,
        // padding: 10,
        marginRight: 8,
        alignItems: 'center',
        position: 'relative',
    },
    nftPriceTag: {
        position: 'absolute',
        top: 8,
        left: 8,
        backgroundColor: '#EDFDF1',
        borderWidth: 1,
        borderColor: '#C8F9D4',
        borderRadius: 10,
        paddingHorizontal: 8,
        paddingVertical: 4,
        zIndex: 2,
    },
    nftPriceText: {
        color: '#185C2C',
        fontWeight: '500',
        fontSize: 12,
        fontFamily: 'Geist-Medium',
        lineHeight: 16,
    },
    nftImg: {
        width: '100%',
        height: 160,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        marginBottom: 8,
        // backgroundColor: '#D9D9D9',
    },
    nftName: {
        fontSize: 14,
        color: '#222',
        fontWeight: '500',
        textAlign: 'center',
        fontFamily: 'Geist-Medium',
        lineHeight: 22,
        paddingBottom: 10,
    },
});
