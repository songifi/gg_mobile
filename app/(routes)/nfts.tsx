import React from 'react';
import {
    View,
    Text,
    FlatList,
    Image,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    SafeAreaView,
} from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { nfts } from '../components/DemoData';

export default function AllNFTsScreen() {
    const router = useRouter();

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
                <Text style={styles.headerTitle}>All NFTs</Text>
                <View style={styles.iconBtn} />
            </View>

            {/* Search & Add */}
            <View style={styles.searchRow}>
                <View style={styles.searchBox}>
                    <Ionicons
                        name="search"
                        size={18}
                        color="#B0B0B0"
                        style={{ marginRight: 6 }}
                    />
                    <TextInput
                        placeholder="Search..."
                        placeholderTextColor="#B0B0B0"
                        style={{
                            flex: 1,
                            fontSize: 15,
                            fontFamily: 'Geist-Regular',
                        }}
                    />
                </View>
                <TouchableOpacity style={styles.addBtn}>
                    <MaterialIcons name="add" size={22} color="#FFFFFF" />
                </TouchableOpacity>
            </View>

            {/* NFT Grid */}
            <FlatList
                data={nfts.concat(nfts).concat(nfts)}
                keyExtractor={(_, i) => i.toString()}
                numColumns={2}
                contentContainerStyle={{
                    paddingHorizontal: 12,
                    paddingTop: 10,
                }}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                renderItem={({ item }) => (
                    <View style={styles.nftCard}>
                        <View style={styles.nftPriceTag}>
                            <Text style={styles.nftPriceText}>
                                ${item.price.toFixed(2)}
                            </Text>
                        </View>
                        <Image source={item.image} style={styles.nftImg} />
                        <Text style={styles.nftName}>{item.name}</Text>
                    </View>
                )}
            />
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
        color: '#08090A',
        fontFamily: 'Geist-Medium',
        lineHeight: 24,
    },
    searchRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        marginBottom: 10,
        gap: 10,
    },
    searchBox: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F5F7F9',
        borderRadius: 8,
        paddingHorizontal: 10,
        height: 38,
    },
    addBtn: {
        width: 38,
        height: 38,
        backgroundColor: '#0B501E',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        borderWidth: 1,
        // borderColor: '#C8F9D4',
    },
    nftCard: {
        backgroundColor: '#F5F7F9',
        borderRadius: 12,
        marginBottom: 16,
        flex: 1,
        marginHorizontal: 4,
        overflow: 'hidden',
        minWidth: 150,
        maxWidth: '48%',
        borderWidth: 1,
        borderColor: '#DBE1E7',
        height: 190,
    },
    nftPriceTag: {
        position: 'absolute',
        top: 10,
        left: 10,
        backgroundColor: '#EAFBF2',
        borderRadius: 8,
        paddingHorizontal: 8,
        paddingVertical: 4,
        zIndex: 2,
        borderWidth: 1,
        borderColor: '#C8F9D4',
    },
    nftPriceText: {
        color: '#185C2C',
        fontWeight: '500',
        fontSize: 13,
        fontFamily: 'Geist-Medium',
    },
    nftImg: {
        width: '100%',
        height: 150,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        resizeMode: 'cover',
        backgroundColor: '#D9D9D9',
    },
    nftName: {
        fontSize: 14,
        color: '#222',
        fontWeight: '500',
        textAlign: 'center',
        fontFamily: 'Geist-Medium',
        paddingVertical: 10,
        backgroundColor: '#fff',
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
    },
});
