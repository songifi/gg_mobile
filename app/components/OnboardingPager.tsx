import React, { useRef, useState } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
} from 'react-native';
import PagerView from 'react-native-pager-view';
import { useRouter } from 'expo-router';
import type { NativeSyntheticEvent } from 'react-native';

const { width } = Dimensions.get('window');

const steps = [
    {
        image: require('@/assets/images/onboarding-1.png'),
        title: 'Chat Securely, Send Instantly',
        description:
            'Talk with friends or communities using end-to-end encrypted wallet-to-wallet messaging.',
    },
    {
        image: require('@/assets/images/onboarding-2.png'),
        title: 'Send $TRK Like You Send Emojis',
        description:
            'Tip friends, split bills, or gift NFTs directly in the chat.',
    },
    {
        image: require('@/assets/images/onboarding-3.png'),
        title: 'Collect and Store your NFTs',
        description:
            'Show off your digital treasures with ease. Gasless Gossip lets you receive, view, and store NFTs.',
    },
];

export default function OnboardingPager() {
    const [step, setStep] = useState(0);
    const pagerRef = useRef<PagerView>(null);
    const router = useRouter();

    const handleNext = () => {
        if (step < steps.length - 1) {
            pagerRef.current?.setPage(step + 1);
        }
    };

    const handleSkip = () => {
        pagerRef.current?.setPage(steps.length - 1);
    };

    return (
        <View style={styles.container}>
            {(step === 0 || step === 1) && (
                <TouchableOpacity
                    style={styles.skipButton}
                    onPress={handleSkip}
                >
                    <Text style={styles.skipButtonText}>Skip</Text>
                </TouchableOpacity>
            )}
            <PagerView
                style={styles.pagerView}
                initialPage={0}
                onPageSelected={(
                    e: NativeSyntheticEvent<{ position: number }>
                ) => setStep(e.nativeEvent.position)}
                ref={pagerRef}
            >
                {steps.map((item, i) => (
                    <View style={styles.page} key={i}>
                        <Image
                            source={item.image}
                            style={styles.image}
                            resizeMode="cover"
                        />
                        <View style={styles.textContainer}>
                            <Text style={styles.title}>{item.title}</Text>
                            <Text style={styles.description}>
                                {item.description}
                            </Text>
                        </View>
                    </View>
                ))}
            </PagerView>
            <View style={styles.dotsContainer}>
                {steps.map((_, i) => (
                    <View
                        key={i}
                        style={[styles.dot, step === i && styles.activeDot]}
                    />
                ))}
            </View>
            {step < steps.length - 1 ? (
                <TouchableOpacity
                    style={styles.nextButton}
                    onPress={handleNext}
                >
                    <Text style={styles.nextButtonText}>Next</Text>
                </TouchableOpacity>
            ) : (
                <View style={styles.bottomButtons}>
                    <TouchableOpacity
                        style={styles.loginButton}
                        onPress={() => router.replace('/(routes)/login')}
                    >
                        <Text style={styles.loginButtonText}>Log In</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.signupButton}
                        onPress={() => router.replace('/(routes)/signup')}
                    >
                        <Text style={styles.signupButtonText}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: 40,
    },
    skipButton: {
        position: 'absolute',
        top: 56,
        right: 24,
        zIndex: 10,
        padding: 8,
    },
    skipButtonText: {
        color: '#111',
        fontSize: 17,
        fontWeight: '600',
        textTransform: 'uppercase',
        fontFamily: 'Geist-Bold',
    },
    pagerView: {
        flex: 1,
        width: width,
    },
    page: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: 40,
    },
    image: {
        width: width,
        height: width * 1.4,
        position: 'absolute',
        top: 0,
        left: 0,
    },
    textContainer: {
        marginTop: width * 1.05,
        width: '100%',
        alignItems: 'center',
        paddingHorizontal: 24,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#111',
        textAlign: 'center',
        marginBottom: 12,
        fontFamily: 'Geist-Bold',
    },
    description: {
        fontSize: 16,
        color: '#5A5B5C',
        textAlign: 'center',
        marginBottom: 0,
    },
    dotsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 18,
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#D2F9DD',
        marginHorizontal: 8,
    },
    activeDot: {
        backgroundColor: '#0B501E',
        width: 10,
        height: 10,
    },
    nextButton: {
        backgroundColor: '#0B501E',
        borderRadius: 28,
        paddingVertical: 16,
        marginTop: 12,
        width: '90%',
    },
    nextButtonText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 18,
        fontWeight: '600',
        fontFamily: 'Geist-Bold',
    },
    bottomButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        marginTop: 8,
    },
    loginButton: {
        flex: 1,
        borderColor: '#DBE1E7',
        borderWidth: 1,
        borderRadius: 28,
        paddingVertical: 16,
        marginRight: 8,
        alignItems: 'center',
    },
    loginButtonText: {
        color: '#0B501E',
        fontSize: 18,
        fontWeight: '600',
        fontFamily: 'Geist-Bold',
    },
    signupButton: {
        flex: 1,
        backgroundColor: '#0B501E',
        borderRadius: 28,
        paddingVertical: 16,
        marginLeft: 8,
        alignItems: 'center',
    },
    signupButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '600',
        fontFamily: 'Geist-Bold',
    },
});
