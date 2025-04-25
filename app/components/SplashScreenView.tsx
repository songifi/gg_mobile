import { View } from 'react-native';
import SplashLogo from '@/assets/images/logo.svg';
import React from 'react';
import { StatusBar } from 'expo-status-bar';

const SplashScreenView = () => {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#25402C',
            }}
        >
            <StatusBar style="light" />
            <SplashLogo width={180} height={180} />
        </View>
    );
};

export default SplashScreenView;
