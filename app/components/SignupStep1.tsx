import React from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const codeSchema = z.object({
    code: z
        .string()
        .min(6, '6-digit code required')
        .max(6, '6-digit code required')
        .regex(/^\d{6}$/, 'Must be a 6-digit code'),
});

type Step1Form = z.infer<typeof codeSchema>;

export default function SignupStep1({ onNext, email, styles, onResend }: { onNext: (code: string) => void; email: string; styles: any; onResend: () => void }) {
    const {
        control,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm<Step1Form>({
        resolver: zodResolver(codeSchema),
        mode: 'onChange',
        defaultValues: { code: '' },
    });
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <>
            <Text style={styles.title}>Verify your email</Text>
            <Text style={styles.subtitle}>
                A 6-digit code has been sent to {email}. Please enter it
                within the next 30 minutes.
            </Text>
            <Controller
                control={control}
                name="code"
                render={({ field: { value, onChange, onBlur } }) => (
                    <TextInput
                        style={styles.input}
                        placeholder="Verification Code"
                        value={value}
                        onChangeText={onChange}
                        onBlur={onBlur}
                        keyboardType="number-pad"
                        maxLength={6}
                    />
                )}
            />
            {errors.code && (
                <Text style={{ color: '#EA4335', marginBottom: 8 }}>{errors.code.message}</Text>
            )}
            <TouchableOpacity
                style={[styles.nextButton, !isValid && styles.nextButtonDisabled]}
                onPress={handleSubmit((data) => onNext(data.code))}
                disabled={!isValid}
            >
                <Text style={styles.nextButtonText}>Next</Text>
            </TouchableOpacity>
            <View style={styles.resendContainer}>
                <Text style={styles.resendTitle}>
                    Didn't receive code?{' '}
                </Text>
                <TouchableOpacity onPress={onResend}>
                    <Text style={styles.resendText}>Resend</Text>
                </TouchableOpacity>
            </View>
        </>
        </TouchableWithoutFeedback>
    );
}
