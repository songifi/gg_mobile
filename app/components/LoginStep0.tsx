import React from 'react';
import { Keyboard, TouchableWithoutFeedback, ScrollView } from 'react-native';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Ionicons } from '@expo/vector-icons';
import GoogleIcon from './GoogleIcon';

const emailSchema = z.object({
    email: z
        .string()
        .min(1, 'Email is required')
        .email('Invalid email address'),
});

type LoginStep0Form = z.infer<typeof emailSchema>;

export default function LoginStep0({
    onNext,
    styles,
}: {
    onNext: (email: string) => void;
    styles: any;
}) {
    const {
        control,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm<LoginStep0Form>({
        resolver: zodResolver(emailSchema),
        mode: 'onChange',
        defaultValues: { email: '' },
    });
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <ScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                keyboardShouldPersistTaps="handled"
            >
                <Text style={styles.title}>Login</Text>
                <Controller
                    control={control}
                    name="email"
                    render={({ field: { onChange, value, onBlur } }) => (
                        <TextInput
                            style={styles.input}
                            placeholder="Email"
                            value={value}
                            onChangeText={onChange}
                            onBlur={onBlur}
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />
                    )}
                />
                {errors.email && (
                    <Text style={{ color: '#EA4335', marginBottom: 8 }}>
                        {errors.email.message}
                    </Text>
                )}
                <TouchableOpacity
                    style={[
                        styles.nextButton,
                        !isValid && styles.nextButtonDisabled,
                    ]}
                    onPress={handleSubmit((data) => onNext(data.email))}
                    disabled={!isValid}
                >
                    <Text style={styles.nextButtonText}>Next</Text>
                </TouchableOpacity>
                <View style={styles.dividerRow}>
                    <View style={styles.divider} />
                    <Text style={styles.dividerText}>OR</Text>
                    <View style={styles.divider} />
                </View>
                <TouchableOpacity style={styles.socialButton}>
                    <GoogleIcon style={{ marginRight: 8 }} />
                    <Text style={styles.socialButtonText}>
                        Continue with Google
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialButton}>
                    <Ionicons
                        name="logo-apple"
                        size={22}
                        color="#111"
                        style={{ marginRight: 8 }}
                    />
                    <Text style={styles.socialButtonText}>
                        Continue with Apple
                    </Text>
                </TouchableOpacity>
            </ScrollView>
        </TouchableWithoutFeedback>
    );
}
