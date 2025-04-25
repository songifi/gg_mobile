import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Platform,
} from 'react-native';
import { useRouter } from 'expo-router';
import SuccessSvg from '@/assets/images/success.svg';

export default function SignupSuccessStep() {
    const router = useRouter();
    return (
        <View style={styles.container}>
            <View style={styles.centerContent}>
                <SuccessSvg width={120} height={120} />
                <Text style={styles.title}>Welcome to Gasless Gossip</Text>
            </View>
            <TouchableOpacity
                style={styles.nextButton}
                onPress={() => router.replace('/(drawer)/(tabs)')}
            >
                <Text style={styles.nextButtonText}>Next</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    backButton: {
        position: 'absolute',
        top: Platform.OS === 'ios' ? 56 : 32,
        left: 16,
        zIndex: 10,
        padding: 8,
        borderRadius: 20,
    },
    backButtonText: {
        fontSize: 28,
        color: '#0B501E',
        fontWeight: 'bold',
    },
    centerContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        marginTop: 24,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#185C2C',
        fontFamily: 'Geist-Bold',
        textAlign: 'center',
    },
    nextButton: {
        width: '90%',
        alignSelf: 'center',
        backgroundColor: '#0B501E',
        borderRadius: 28,
        paddingVertical: 16,
        alignItems: 'center',
        marginBottom: 32,
    },
    nextButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
        fontFamily: 'Geist-Bold',
    },
});
