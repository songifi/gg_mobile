import React, { useState } from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Ionicons from '@expo/vector-icons/Ionicons';

const passwordRequirements = [
    {
        key: 'minLength',
        label: '8 Characters',
        test: (val: string) => val.length >= 8,
    },
    {
        key: 'uppercase',
        label: '1 Uppercase Letter',
        test: (val: string) => /[A-Z]/.test(val),
    },
    {
        key: 'lowercase',
        label: '1 Lowercase Letter',
        test: (val: string) => /[a-z]/.test(val),
    },
    {
        key: 'number',
        label: '1 Number Character',
        test: (val: string) => /[0-9]/.test(val),
    },
    {
        key: 'special',
        label: '1 Special Character',
        test: (val: string) => /[^A-Za-z0-9]/.test(val),
    },
];

const schema = z
    .object({
        password: z
            .string()
            .min(8, 'At least 8 characters')
            .regex(/[A-Z]/, 'At least 1 uppercase letter')
            .regex(/[a-z]/, 'At least 1 lowercase letter')
            .regex(/[0-9]/, 'At least 1 number')
            .regex(/[^A-Za-z0-9]/, 'At least 1 special character'),
        confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: 'Passwords do not match',
        path: ['confirmPassword'],
    });

type FormData = z.infer<typeof schema>;

export default function CreatePasswordStep({ onNext }: { onNext: () => void }) {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const {
        control,
        handleSubmit,
        watch,
        formState: { errors, isValid },
    } = useForm<FormData>({
        resolver: zodResolver(schema),
        mode: 'onChange',
        defaultValues: { password: '', confirmPassword: '' },
    });
    const passwordValue = watch('password');
    const confirmPasswordValue = watch('confirmPassword');

    const onSubmit = (data: FormData) => {
        onNext();
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={styles.container}>
            <Text style={styles.title}>Create password</Text>
            <Text style={styles.subtitle}>
                Create password to protect your Gasless Gossip account
            </Text>
            <View style={styles.inputWrapper}>
                <Controller
                    control={control}
                    name="password"
                    render={({ field: { onChange, onBlur, value } }) => (
                        <View style={styles.inputBox}>
                            <TextInput
                                style={styles.input}
                                placeholder="Password"
                                secureTextEntry={!showPassword}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                autoCapitalize="none"
                                autoCorrect={false}
                            />
                            <TouchableOpacity
                                style={styles.eyeIcon}
                                onPress={() => setShowPassword((prev) => !prev)}
                            >
                                <Ionicons
                                    name={showPassword ? 'eye-off' : 'eye'}
                                    size={22}
                                    color="#888"
                                />
                            </TouchableOpacity>
                        </View>
                    )}
                />
                {errors.password && (
                    <Text style={styles.error}>{errors.password.message}</Text>
                )}
            </View>
            <View style={styles.chipRow}>
                {passwordRequirements.map((req) => {
                    const valid = req.test(passwordValue);
                    return (
                        <View
                            key={req.key}
                            style={[styles.chip, valid && styles.chipValid]}
                        >
                            <Text
                                style={
                                    valid
                                        ? styles.chipTextValid
                                        : styles.chipText
                                }
                            >
                                {req.label}
                            </Text>
                        </View>
                    );
                })}
            </View>
            <View style={styles.inputWrapper}>
                <Controller
                    control={control}
                    name="confirmPassword"
                    render={({ field: { onChange, onBlur, value } }) => (
                        <View style={styles.inputBox}>
                            <TextInput
                                style={styles.input}
                                placeholder="Confirm Password"
                                secureTextEntry={!showConfirm}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                autoCapitalize="none"
                                autoCorrect={false}
                            />
                            <TouchableOpacity
                                style={styles.eyeIcon}
                                onPress={() => setShowConfirm((prev) => !prev)}
                            >
                                <Ionicons
                                    name={showConfirm ? 'eye-off' : 'eye'}
                                    size={22}
                                    color="#888"
                                />
                            </TouchableOpacity>
                        </View>
                    )}
                />
                {errors.confirmPassword && (
                    <Text style={styles.error}>
                        {errors.confirmPassword.message}
                    </Text>
                )}
            </View>
            <TouchableOpacity
                style={[
                    styles.nextButton,
                    !isValid && styles.nextButtonDisabled,
                ]}
                onPress={handleSubmit(onSubmit)}
                disabled={!isValid}
            >
                <Text style={styles.nextButtonText}>Next</Text>
            </TouchableOpacity>
        </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // paddingHorizontal: 20,
        paddingTop: 90,
    },
    title: {
        fontFamily: 'Geist-Bold',
        fontSize: 24,
        marginBottom: 8,
        marginTop: 8,
    },
    subtitle: {
        color: '#444',
        fontSize: 15,
        marginBottom: 18,
    },
    inputWrapper: {
        marginBottom: 12,
    },
    inputBox: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F6F6F6',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#E0E0E0',
        paddingHorizontal: 12,
        height: 50,
        marginBottom: 0,
    },
    input: {
        flex: 1,
        fontSize: 16,
        fontFamily: 'Geist-Regular',
        color: '#222',
    },
    eyeIcon: {
        padding: 6,
    },
    error: {
        color: '#EA4335',
        fontSize: 13,
        marginTop: 2,
        marginLeft: 2,
    },
    chipRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,
        marginBottom: 20,
    },
    chip: {
        borderWidth: 1,
        borderColor: '#E0E0E0',
        borderStyle: 'dashed',
        borderRadius: 16,
        paddingHorizontal: 10,
        paddingVertical: 6,
        marginRight: 6,
        marginBottom: 6,
        backgroundColor: '#fff',
    },
    chipValid: {
        borderColor: '#0B501E',
        backgroundColor: '#E9F7EF',
    },
    chipText: {
        color: '#888',
        fontSize: 13,
        fontFamily: 'Geist-Regular',
    },
    chipTextValid: {
        color: '#0B501E',
        fontSize: 13,
        fontFamily: 'Geist-Regular',
    },
    nextButton: {
        backgroundColor: '#0B501E',
        borderRadius: 28,
        height: 52,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 18,
    },
    nextButtonDisabled: {
        opacity: 0.5,
    },
    nextButtonText: {
        color: '#fff',
        fontFamily: 'Geist-Bold',
        fontSize: 17,
    },
});
