import React from 'react';
import SignupStepper from '../components/SignupStepper';

export const unstable_settings = {
    // Ensure this route is treated as a screen
    initialRouteName: 'signup',
};

export default function SignupScreen() {
    return <SignupStepper />;
}

// In your stack definition, make sure to set headerShown: false for this route.
