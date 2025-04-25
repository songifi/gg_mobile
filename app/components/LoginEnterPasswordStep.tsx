import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Platform,
    Keyboard,
    TouchableWithoutFeedback,
    ScrollView,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function LoginEnterPasswordStep({
    email,
    onNext,
    onForgotPassword,
    styles,
}: {
    email: string;
    onNext: (password: string) => void;
    onForgotPassword: () => void;
    styles: any;
}) {
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    // Mask the email for display
    const maskEmail = (email: string) => {
        const [user, domain] = email.split('@');
        if (!user || !domain) return email;
        return (
            user[0] +
            '*'.repeat(Math.max(1, user.length - 2)) +
            user[user.length - 1] +
            '@' +
            domain
        );
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
                <View style={{ flex: 1 }}>
                <Text style={styles.title}>Enter your password</Text>
                <Text style={styles.subtitle}>
                    Enter your password {maskEmail(email)}
                </Text>
                <View style={{ position: 'relative' }}>
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry={!showPassword}
                        autoCapitalize="none"
                    />
                    <TouchableOpacity
                        style={{ position: 'absolute', right: 16, top: 16 }}
                        onPress={() => setShowPassword((prev) => !prev)}
                    >
                        <Ionicons
                            name={showPassword ? 'eye' : 'eye-off'}
                            size={22}
                            color="#6B7280"
                        />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    style={styles.nextButton}
                    onPress={() => onNext(password)}
                    disabled={password.length === 0}
                >
                    <Text style={styles.nextButtonText}>Next</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ alignSelf: 'center', marginTop: 16 }}
                    onPress={onForgotPassword}
                >
                    <Text style={{ color: '#0B501E', fontWeight: '500' }}>Forgot Password</Text>
                </TouchableOpacity>
            </View>
            </ScrollView>
        </TouchableWithoutFeedback>
    );
}
