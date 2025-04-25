import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Keyboard, TouchableWithoutFeedback } from 'react-native';

export default function ForgotPasswordCodeStep({
    email,
    onNext,
    onResend,
    styles,
}: {
    email: string;
    onNext: (code: string) => void;
    onResend: () => void;
    styles: any;
}) {
    const [code, setCode] = useState('');
    const [error, setError] = useState<string | null>(null);

    const handleCodeChange = (text: string) => {
        setCode(text);
        if (text.length === 0) {
            setError(null);
        } else if (!/^\d{0,6}$/.test(text)) {
            setError('Code must be numeric');
        } else if (text.length < 6) {
            setError(null);
        } else if (text.length === 6 && !/^\d{6}$/.test(text)) {
            setError('Code must be 6 digits');
        } else {
            setError(null);
        }
    };

    const isValid = code.length === 6 && /^\d{6}$/.test(code);

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={{ flex: 1 }}>
                <Text style={styles.title}>Email verification</Text>
                <Text style={styles.subtitle}>
                    A 6-digit code has been sent to {email}. Please enter it within
                    the next 30 minutes.
                </Text>
                <TextInput
                    style={styles.input}
                    placeholder="Verification Code"
                    value={code}
                    onChangeText={handleCodeChange}
                    keyboardType="number-pad"
                    autoCapitalize="none"
                    maxLength={6}
                />
                {error && (
                    <Text style={{ color: '#EA4335', marginBottom: 8 }}>{error}</Text>
                )}
                <TouchableOpacity
                    style={[styles.nextButton, !isValid && styles.nextButtonDisabled]}
                    onPress={() => onNext(code)}
                    disabled={!isValid}
                >
                    <Text style={styles.nextButtonText}>Next</Text>
                </TouchableOpacity>
                <View
                    style={{
                        alignItems: 'center',
                        marginTop: 16,
                        flexDirection: 'row',
                        justifyContent: 'center',
                    }}
                >
                    <Text style={{ color: '#444', fontSize: 14, lineHeight: 16 }}>
                        Didn't receive code{' '}
                    </Text>
                    <TouchableOpacity onPress={onResend}>
                        <Text
                            style={{
                                color: '#0B501E',
                                fontWeight: '500',
                                fontSize: 14,
                                lineHeight: 16,
                            }}
                        >
                            Resend
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}
