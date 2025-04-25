import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Keyboard, TouchableWithoutFeedback } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function ForgotPasswordStep({
    email,
    onContinue,
    styles,
}: {
    email: string;
    onContinue: (email: string) => void;
    styles: any;
}) {
    const [inputEmail, setInputEmail] = useState(email);
    const [showEmail, setShowEmail] = useState(false);

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
            <View style={{ flex: 1 }}>
                <Text style={styles.title}>Reset password</Text>
                <Text style={styles.subtitle}>
                    To reset your password, enter your email: {maskEmail(email)}. Note that some activities might be disabled until after 24 hours to protect your account in order to protect your account.
                </Text>
                <View style={{ position: 'relative' }}>
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        value={inputEmail}
                        onChangeText={setInputEmail}
                        secureTextEntry={!showEmail}
                        autoCapitalize="none"
                    />
                    <TouchableOpacity
                        style={{ position: 'absolute', right: 16, top: 16 }}
                        onPress={() => setShowEmail((prev) => !prev)}
                    >
                        <Ionicons
                            name={showEmail ? 'eye' : 'eye-off'}
                            size={22}
                            color="#6B7280"
                        />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    style={styles.nextButton}
                    onPress={() => onContinue(inputEmail)}
                    disabled={inputEmail.length === 0}
                >
                    <Text style={styles.nextButtonText}>Continue</Text>
                </TouchableOpacity>
            </View>
        </TouchableWithoutFeedback>
    );
}
