import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Keyboard,
    TouchableWithoutFeedback,
    ScrollView,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const passwordRequirements = [
    { label: '8 Characters', test: (pw: string) => pw.length >= 8 },
    { label: '1 Uppercase Letter', test: (pw: string) => /[A-Z]/.test(pw) },
    { label: '1 Lowercase Letter', test: (pw: string) => /[a-z]/.test(pw) },
    {
        label: '1 Special Character',
        test: (pw: string) => /[^A-Za-z0-9]/.test(pw),
    },
    { label: '1 Number Character', test: (pw: string) => /[0-9]/.test(pw) },
];

export default function ForgotPasswordResetStep({
    onConfirm,
    styles,
}: {
    onConfirm: (pw: string, confirmPw: string) => void;
    styles: any;
}) {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    const allValid = passwordRequirements.every((req) => req.test(password));
    const passwordsMatch =
        password === confirmPassword && confirmPassword.length > 0;

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
                <View style={{ flex: 1 }}>
                <Text style={styles.title}>Reset password</Text>
                <View
                    style={{
                        backgroundColor: '#EDFDF1',
                        padding: 12,
                        borderRadius: 8,
                        marginBottom: 16,
                        borderWidth: 1,
                        borderColor: '#C8F9D4',
                    }}
                >
                    <Text style={{ color: '#0B501E', fontSize: 13 }}>
                        In order to protect your account, you might not be able
                        to send STRK or NFTs until after 24 hours if you reset
                        your password
                    </Text>
                </View>
                <View style={{ position: 'relative', marginBottom: 8 }}>
                    <TextInput
                        style={styles.input}
                        placeholder="New Password"
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
                <View
                    style={{
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        marginBottom: 16,
                    }}
                >
                    {passwordRequirements.map((req) => (
                        <View
                            key={req.label}
                            style={{
                                paddingHorizontal: 8,
                                paddingVertical: 6,
                                borderRadius: 12,
                                borderStyle: 'dashed',
                                backgroundColor: req.test(password)
                                    ? '#E6F4EA'
                                    : '#F3F4F6',
                                borderColor: req.test(password)
                                    ? '#0B501E'
                                    : '#E5E7EB',
                                borderWidth: 1,
                                marginRight: 8,
                                marginBottom: 6,
                            }}
                        >
                            <Text
                                style={{
                                    color: req.test(password)
                                        ? '#0B501E'
                                        : '#6B7280',
                                    fontSize: 13,
                                }}
                            >
                                {req.label}
                            </Text>
                        </View>
                    ))}
                </View>
                <View style={{ position: 'relative', marginBottom: 16 }}>
                    <TextInput
                        style={styles.input}
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                        secureTextEntry={!showConfirm}
                        autoCapitalize="none"
                    />
                    <TouchableOpacity
                        style={{ position: 'absolute', right: 16, top: 16 }}
                        onPress={() => setShowConfirm((prev) => !prev)}
                    >
                        <Ionicons
                            name={showConfirm ? 'eye' : 'eye-off'}
                            size={22}
                            color="#6B7280"
                        />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    style={[
                        styles.nextButton,
                        !(password.length > 0 && confirmPassword.length > 0 && password === confirmPassword) && styles.nextButtonDisabled,
                    ]}
                    onPress={() => onConfirm(password, confirmPassword)}
                    disabled={!(password.length > 0 && confirmPassword.length > 0 && password === confirmPassword)}
                >
                    <Text style={styles.nextButtonText}>Confirm</Text>
                </TouchableOpacity>
            </View>
            </ScrollView>
        </TouchableWithoutFeedback>
    );
}
