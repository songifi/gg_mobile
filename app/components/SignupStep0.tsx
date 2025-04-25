import React from 'react';
import { Keyboard, TouchableWithoutFeedback, ScrollView } from 'react-native';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Ionicons from '@expo/vector-icons/Ionicons';

const emailSchema = z.object({
    email: z
        .string()
        .min(1, 'Email or phone is required')
        .email('Invalid email address'),
    checked: z
        .boolean()
        .refine(val => val, { message: 'You must accept the terms' }),
});

type Step0Form = z.infer<typeof emailSchema>;

export default function SignupStep0({ onNext, styles }: { onNext: (email: string) => void; styles: any }) {
    const {
        control,
        handleSubmit,
        formState: { errors, isValid },
        watch,
    } = useForm<Step0Form>({
        resolver: zodResolver(emailSchema),
        mode: 'onChange',
        defaultValues: { email: '', checked: false },
    });
    const checked = watch('checked');
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
            <Text style={styles.title}>Welcome to Gasless Gossip</Text>
            <Controller
                control={control}
                name="email"
                render={({ field: { onChange, value, onBlur } }) => (
                    <TextInput
                        style={styles.input}
                        placeholder="Email/Phone"
                        value={value}
                        onChangeText={onChange}
                        onBlur={onBlur}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                )}
            />
            {errors.email && (
                <Text style={{ color: '#EA4335', marginBottom: 8 }}>{errors.email.message}</Text>
            )}
            <View style={styles.checkboxRow}>
                <Controller
                    control={control}
                    name="checked"
                    render={({ field: { value, onChange } }) => (
                        <TouchableOpacity
                            style={styles.checkbox}
                            onPress={() => onChange(!value)}
                        >
                            <View
                                style={[
                                    styles.checkboxBox,
                                    value && styles.checkboxChecked,
                                ]}
                            >
                                {value && (
                                    <Ionicons
                                        name="checkmark"
                                        size={15}
                                        color="#fff"
                                    />
                                )}
                            </View>
                        </TouchableOpacity>
                    )}
                />
                <Text style={styles.checkboxText}>
                    By creating an account, I agree to Gasless Gossip's{' '}
                    Terms of Service and Privacy Policy
                </Text>
            </View>
            {errors.checked && (
                <Text style={{ color: '#EA4335', marginBottom: 8 }}>{errors.checked.message}</Text>
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
            </ScrollView>
        </TouchableWithoutFeedback>
    );
}
