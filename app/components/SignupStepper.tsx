import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    Platform,
} from 'react-native';
import { useRouter } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import GoogleIcon from './GoogleIcon';
import CreatePasswordStep from './CreatePasswordStep';
import SignupStep0 from './SignupStep0';
import SignupStep1 from './SignupStep1';
import SignupSuccessStep from './SignupSuccessStep';

const { width } = Dimensions.get('window');

export default function SignupStepper() {
    const [step, setStep] = useState(0);
    const [email, setEmail] = useState('');
    const [code, setCode] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [checked, setChecked] = useState(false); // Added missing state
    const router = useRouter();
    // Add more state as needed for checkboxes, errors, etc.

    const handleBack = () => {
        if (router.canGoBack()) {
            router.back();
        } else if (step > 0) {
            setStep(step - 1);
        } else {
            router.replace('/(routes)/onboarding'); // fallback if needed
        }
    };
    const handleResend = () => {
        // Add resend logic here
        alert('Code resent');
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.backButton} onPress={handleBack}>
                <Ionicons name="chevron-back" size={24} color="#0B501E" />
            </TouchableOpacity>
            {step === 0 && (
                <SignupStep0
                    onNext={(emailValue: string) => {
                        setEmail(emailValue);
                        setStep(1);
                    }}
                    styles={styles}
                />
            )}

            {step === 1 && (
                <SignupStep1
                    email={email}
                    styles={styles}
                    onResend={handleResend}
                    onNext={() => setStep(2)}
                />
            )}
            {step === 2 && <CreatePasswordStep onNext={() => setStep(3)} />}
            {step === 3 && <SignupSuccessStep />}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 24,
        // justifyContent: 'center',
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
    title: {
        marginTop: 90,
        fontSize: 24,
        fontWeight: 'bold',
        fontFamily: 'Geist-Bold',
        lineHeight: 36,
        textAlign: 'left',
        marginBottom: 24,
        // marginTop: 24,
    },
    subtitle: {
        fontSize: 16,
        marginBottom: 16,
    },
    input: {
        borderWidth: 1,
        borderColor: '#DBE1E7',
        borderRadius: 8,
        padding: 16,
        marginBottom: 16,
        fontSize: 16,
        backgroundColor: '#F7F8F9',
    },
    checkboxRow: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 22,
    },
    checkbox: {
        marginRight: 8,
        marginTop: 2,
    },
    checkboxBox: {
        width: 20,
        height: 20,
        borderWidth: 2,
        borderRadius: 4,
        borderColor: '#0B501E',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    checkboxChecked: {
        backgroundColor: '#0B501E',
        borderColor: '#0B501E',
    },
    checkboxText: {
        fontSize: 15,
        color: '#565656',
        flex: 1,
        lineHeight: 21,
    },
    nextButton: {
        backgroundColor: '#0B501E',
        borderRadius: 28,
        paddingVertical: 16,
        alignItems: 'center',
        marginTop: 12,
        marginBottom: 16,
    },
    nextButtonDisabled: {
        opacity: 0.5,
    },
    nextButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '600',
        fontFamily: 'Geist-Bold',
    },
    dividerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 16,
    },
    divider: {
        flex: 1,
        height: 1,
        backgroundColor: '#E0E0E0',
    },
    dividerText: {
        marginHorizontal: 12,
        fontSize: 15,
        color: '#666666',
    },
    socialButton: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#DBE1E7',
        borderRadius: 28,
        paddingVertical: 14,
        paddingHorizontal: 16,
        marginBottom: 14,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    socialButtonText: {
        fontSize: 16,
        color: '#090909',
        fontWeight: '500',
    },
    bottomRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 18,
    },
    bottomText: {
        fontSize: 15,
        color: '#444',
    },
    loginText: {
        fontSize: 15,
        color: '#0B501E',
        fontWeight: 'bold',
        fontFamily: 'Geist-Bold',
        textDecorationLine: 'underline',
    },
    resendContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 16,
        justifyContent: 'center',
    },
    resendTitle: {
        fontSize: 15,
        color: '#444',
    },
    resendText: {
        fontSize: 15,
        color: '#0B501E',
        fontWeight: 'bold',
        fontFamily: 'Geist-Bold',
    },
});
