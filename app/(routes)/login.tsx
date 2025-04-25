import React from 'react';
import LoginStepper from '../components/LoginStepper';

export const unstable_settings = {
    // Ensure this route is treated as a screen
    initialRouteName: 'login',
};

export default function LoginScreen() {
    return <LoginStepper />;
}

// In your stack definition, make sure to set headerShown: false for this route.
